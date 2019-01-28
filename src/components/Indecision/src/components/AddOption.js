import React from "react"

export default class AddOption extends React.Component {
  handleAddOption = e => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim()
    e.target.elements.option.value = ""
    if (option) this.props.handleAddOption(option)
  }

  render() {
    return (
      <div>
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className="add-option__input" type="text" name="option" />
          <button className="button">Add New Item</button>
        </form>
      </div>
    )
  }
}
