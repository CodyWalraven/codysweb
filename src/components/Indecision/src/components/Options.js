import React from "react"
import Option from "./Option"

const Options = props => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className="widget widget__message">Please add an option to get started</p>}
    {props.options.map((val, index) => (
      <Option
        key={val}
        option={val}
        handleDeleteOption={props.handleDeleteOption}
        count={index + 1}
      />
    ))}
  </div>
)

export default Options
