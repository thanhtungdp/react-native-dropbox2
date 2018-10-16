import styled from 'styled-components/native'
import Colors from '../../themes/colors'
import PropTypes from 'prop-types'

const Screen = styled.View`
  background-color: ${props => props.backgroundColor};
  flex: 1;
`
Screen.propTypes = {
  backgroundColor: PropTypes.string
}
Screen.defaultProps = {
  backgroundColor: Colors.backgroundColor
}

export default Screen
