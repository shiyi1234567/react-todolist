import React, { Fragment } from 'react';
import './Toggle.css'
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    //为了在回调中使用'this'必须要绑定this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    return (
      <Fragment>
        <div className={this.state.isToggleOn ? 'show' : 'hide'}>Hello World</div>
        <button onClick={this.handleClick}>
          Toggle
        </button>
      </Fragment>

    )
  }
}
export default Toggle;
