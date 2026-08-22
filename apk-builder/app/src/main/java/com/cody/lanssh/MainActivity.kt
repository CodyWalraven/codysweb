package com.cody.lanssh

import android.os.Bundle
import android.util.Base64
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.background
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.rememberScrollState
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jcraft.jsch.*
import org.connectbot.terminal.*
import java.io.InputStream
import java.io.OutputStream
import java.security.MessageDigest
import java.util.concurrent.Executors

class MainActivity : ComponentActivity() {
    private val pool = Executors.newCachedThreadPool()
    private val password = "P4SSWD"
    private val port = 22
    private val pinned = "SHA256:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    @Volatile private var session: Session? = null
    @Volatile private var shell: ChannelShell? = null
    @Volatile private var output: OutputStream? = null
    private lateinit var term: TerminalEmulator
    private var status by mutableStateOf("Disconnected")
    private var connected by mutableStateOf(false)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        term = TerminalEmulatorFactory.create(
            initialRows = 40,
            initialCols = 100,
            defaultForeground = Color(0xFFE8F5E9),
            defaultBackground = Color(0xFF050708),
            onKeyboardInput = { b -> pool.execute { write(b) } },
            onResize = { d -> pool.execute { resize(d) } },
        )
        setContent { Screen() }
    }

    @Composable private fun Screen() {
        MaterialTheme(colorScheme = darkColorScheme()) {
            Column(Modifier.fillMaxSize().background(Color(0xFF080C10)).padding(8.dp)) {
                Text("LAN SSH + Codex", style = MaterialTheme.typography.titleLarge)
                Text(status, color = Color(0xFF9ECBFF))
                Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                    Button({ connect(HostSpec("host-aaaa", "u001", listOf("host-aaaa", "192.168.9.999"), null)) }, Modifier.weight(1f), enabled = !connected) { Text("host-aaaa") }
                    Button({ connect(HostSpec("host-bbbb", "usr02", listOf("host-bbbb.local", "192.168.9.998"), pinned)) }, Modifier.weight(1f), enabled = !connected) { Text("host-bbbb") }
                }
                CodexBar()
                Terminal(
                    terminalEmulator = term,
                    modifier = Modifier.fillMaxWidth().weight(1f).padding(top = 6.dp),
                    initialFontSize = 11.sp,
                    keyboardEnabled = true,
                    showSoftKeyboard = true,
                    backgroundColor = Color(0xFF050708),
                    foregroundColor = Color(0xFFE8F5E9),
                )
                KeyBar()
            }
        }
    }

    @Composable private fun CodexBar() {
        var menu by remember { mutableStateOf(false) }
        Row(Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()).padding(top = 6.dp), horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            AssistChip({ send("codex\n") }, { Text("Start Codex") }, enabled = connected)
            AssistChip({ bytes(27,91,90) }, { Text("Build / Plan") }, enabled = connected)
            AssistChip({ send("/model\n") }, { Text("Model + Thinking") }, enabled = connected)
            Box {
                AssistChip({ menu = true }, { Text("Slash commands") }, enabled = connected)
                DropdownMenu(menu, { menu = false }) {
                    slashItems().forEach { (c,p) -> DropdownMenuItem(text = { Column { Text(c); Text(p, style = MaterialTheme.typography.bodySmall) } }, onClick = { menu=false; send("$c\n") }) }
                }
            }
            AssistChip({ disconnect("Disconnected") }, { Text("Disconnect") }, enabled = connected)
        }
    }

    @Composable private fun KeyBar() {
        Row(Modifier.fillMaxWidth().horizontalScroll(rememberScrollState()).padding(top = 6.dp), horizontalArrangement = Arrangement.spacedBy(6.dp)) {
            AssistChip({ bytes(3) }, { Text("Ctrl-C") }, enabled = connected)
            AssistChip({ bytes(27) }, { Text("Esc") }, enabled = connected)
            AssistChip({ bytes(9) }, { Text("Tab") }, enabled = connected)
            AssistChip({ bytes(27,91,90) }, { Text("Shift-Tab") }, enabled = connected)
            AssistChip({ bytes(27,91,65) }, { Text("↑") }, enabled = connected)
            AssistChip({ bytes(27,91,66) }, { Text("↓") }, enabled = connected)
            AssistChip({ bytes(27,91,68) }, { Text("←") }, enabled = connected)
            AssistChip({ bytes(27,91,67) }, { Text("→") }, enabled = connected)
        }
    }

    private fun slashItems() = listOf(
        "/model" to "model and reasoning effort", "/plan" to "enter Plan mode", "/status" to "session status", "/permissions" to "permissions",
        "/init" to "create AGENTS.md", "/review" to "review changes", "/compact" to "compact context", "/new" to "new conversation",
        "/resume" to "resume conversation", "/fork" to "fork conversation", "/mcp" to "MCP tools", "/skills" to "skills",
        "/ps" to "background terminals", "/stop" to "stop background terminals", "/goal" to "task goal", "/fast" to "fast tier",
        "/personality" to "style", "/raw" to "raw scrollback", "/statusline" to "status line", "/theme" to "theme", "/logout" to "sign out"
    )

    private fun connect(spec: HostSpec) {
        disconnect(null); status = "Connecting to ${spec.label}..."
        pool.execute {
            var last: Exception? = null
            for (host in spec.hosts) {
                try {
                    runOnUiThread { status = "Trying ${spec.user}@$host:$port" }
                    val j = JSch().also { it.hostKeyRepository = Repo(spec.fingerprint) }
                    val s = j.getSession(spec.user, host, port)
                    s.setPassword(password)
                    s.setConfig("PreferredAuthentications", "password,keyboard-interactive")
                    s.setConfig("StrictHostKeyChecking", "yes")
                    s.serverAliveInterval = 15000; s.serverAliveCountMax = 3; s.connect(10000)
                    val ch = s.openChannel("shell") as ChannelShell
                    val d = term.dimensions
                    ch.setPtyType("xterm-256color"); ch.setPtySize(d.columns, d.rows, 0, 0)
                    val input = ch.inputStream; val out = ch.outputStream; ch.connect(10000)
                    session=s; shell=ch; output=out
                    runOnUiThread { connected=true; status="Connected: ${spec.user}@$host:$port" }
                    read(input); return@execute
                } catch (e: Exception) { last=e; cleanup() }
            }
            runOnUiThread { connected=false; status="Connection failed: ${last?.message ?: "unknown"}" }
        }
    }

    private fun read(input: InputStream) {
        val b=ByteArray(8192)
        try { while (true) { val n=input.read(b); if(n<0) break; if(n>0) term.writeInput(b,0,n) } } catch (_:Exception) {}
        finally { cleanup(); runOnUiThread { connected=false; status="Disconnected" } }
    }
    private fun send(s:String)=sendBytes(s.toByteArray())
    private fun bytes(vararg v:Int)=sendBytes(ByteArray(v.size){v[it].toByte()})
    private fun sendBytes(b:ByteArray){ if(connected) pool.execute{write(b)} }
    private fun write(b:ByteArray){ try{ output?.apply{write(b);flush()} }catch(_:Exception){} }
    private fun resize(d:TerminalDimensions){ try{shell?.setPtySize(d.columns,d.rows,0,0)}catch(_:Exception){} }
    private fun disconnect(msg:String?){cleanup();connected=false;if(msg!=null)status=msg}
    @Synchronized private fun cleanup(){try{shell?.disconnect()}catch(_:Exception){};try{session?.disconnect()}catch(_:Exception){};shell=null;session=null;output=null}
    override fun onDestroy(){cleanup();pool.shutdownNow();super.onDestroy()}

    private data class HostSpec(val label:String,val user:String,val hosts:List<String>,val fingerprint:String?)
    private class Repo(private val expected:String?):HostKeyRepository{
        override fun check(host:String?,key:ByteArray?):Int{ if(expected==null)return HostKeyRepository.OK;if(key==null)return HostKeyRepository.CHANGED;return try{val a="SHA256:"+Base64.encodeToString(MessageDigest.getInstance("SHA-256").digest(key),Base64.NO_WRAP).trimEnd('=');if(a==expected)HostKeyRepository.OK else HostKeyRepository.CHANGED}catch(_:Exception){HostKeyRepository.CHANGED}}
        override fun add(h:HostKey?,u:UserInfo?){};override fun remove(h:String?,t:String?){};override fun remove(h:String?,t:String?,k:ByteArray?){};override fun getKnownHostsRepositoryID()="LAN SSH + Codex";override fun getHostKey():Array<HostKey> = emptyArray();override fun getHostKey(h:String?,t:String?):Array<HostKey> = emptyArray()
    }
}
