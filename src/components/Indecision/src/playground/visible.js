let visibility = false;
const toggleVisibility = () => {
  visibility ? visibility = false : visibility = true
  render()
}

const contentToShow = "This is the text that will be hidden or not!"

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}</button>
      {visibility && (
      <div>
        <p>{contentToShow}</p>
      </div>)}
    </div>
  )
ReactDOM.render(jsx, appRoot)
}

const appRoot = document.getElementById("app")
render()