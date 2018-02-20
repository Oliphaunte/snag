import React from 'react'

class Loader extends React.Component {
  render() {
    return (
      <div className={"m__loader " + (this.props.isActive ? 'active' : 'inactive') }>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
  }
}

export default Loader