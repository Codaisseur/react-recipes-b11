import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import loading from '../images/loading.gif'

class Loading extends PureComponent {
  render() {
    if (this.props.show) {
      return <img src={loading} alt="loading" />
    }

    return null
  }
}

const mapStateToProps = ({ loading }) => ({
  show: loading
})

export default connect(mapStateToProps)(Loading)
