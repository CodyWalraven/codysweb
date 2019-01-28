const app = {
  header: "Indecision App",
  subtitle: "An app to help make decisions",
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault()
  const option = e.target.elements.option.value
  if (option){
    app.options.push(option)
    e.target.elements.option.value = ""
    console.log(`Options now has ${app.options.length} options`)
    render()
  }
}

const clearOptions = () => {
  app.options = []
  render()
}

const onMakeDecision = () =>{
  const randomNum = Math.floor(Math.random() * app.options.length)
  const option = app.options[randomNum]
  alert(option)
}

const numbers = [55, 101, 1000]

const render = () => {
  const template = (
    <div>
      <h1>{app.header}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? `There are ${app.options.length} options` : "There are no options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={clearOptions}>Remove All</button>
      <ol>
          {app.options.map((num, index) => <li key={index}>{num}</li>)}   
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  )
  ReactDOM.render(template, appRoot)
}

const appRoot = document.getElementById("app") 
render()


