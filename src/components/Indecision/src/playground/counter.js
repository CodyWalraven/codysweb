class Counter extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    }
  }

  componentDidUpdate(prevProps, prevState){
    //Set the local storage to current count only if value changes
    if (prevState.count !== this.state.count){
      localStorage.setItem("count", this.state.count)
    }
  }

  componentDidMount(){
    const stringCount = localStorage.getItem("count")
    const count = parseInt(stringCount)

    if (!isNaN(count)){
      this.setState(() => ({count}))
    }
  }
  
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0
// const addOne = () => {
//   count++
//   renderCounterApp()
// }

// const minusOne = () => {
//   //If count is less than 0 prevent anymore subtraction
//   (count > 0) && count--
//   renderCounterApp()
// }

// const reset = () => {
//   count = 0
//   renderCounterApp()
// }



// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
//   ReactDOM.render(templateTwo, appRoot)
// }

// renderCounterApp()
