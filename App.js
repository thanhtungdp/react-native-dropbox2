import { createStackNavigator } from 'react-navigation'

import LaunchScreen from './screens/LaunchScreen'

const AppNavigation = createStackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen
    }
  },
  {
    headerMode: 'none'
  }
)

export default AppNavigation
