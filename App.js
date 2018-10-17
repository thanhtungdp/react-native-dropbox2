import { createStackNavigator } from 'react-navigation'

import LaunchScreen from './screens/LaunchScreen'
import Login from './screens/Login'
import Register from './screens/Register'
import Dashboard from './screens/Dashboard'

const AppNavigation = createStackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
    Dashboard: {
      screen: Dashboard
    }
  },
  {
    headerMode: 'none'
  }
)

export default AppNavigation
