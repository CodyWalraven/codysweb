class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
      visible: true
    }
    
  }

  handleToggleVisibility(){
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Show Details" : "Hide Details"}</button>
        <p>{this.state.visible && "The toggle text!"}</p>
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"))