import React, { PureComponent } from 'react'

class Title extends PureComponent {
  render() {
    const { content, style } = this.props
    const defaultStyles = {
      borderBottom: '2px solid red'
    }

    return (
      <h1 style={{ ...defaultStyles, ...style }}>{ content }</h1>
    )
  }
}

export default Title
