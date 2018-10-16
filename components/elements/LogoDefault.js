import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'

export default class LogoDefault extends React.Component {
  static propTypes = {
    size: PropTypes.number
  }

  render () {
    return (
      <Image
        source={require('../../assets/logo.png')}
        style={{
          width: this.props.size,
          height: this.props.size
        }}
        resizeMode='contain'
      />
    )
  }
}
