import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import NativeBaseTest from './src/screens/NativeBaseTest';
import Home from './src/screens/Home';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
    NativeBase: NativeBaseTest,
    Home: Home
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Tomato",
      headerStyle: {
        backgroundColor: "#D74949",
      },

      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);


export default createAppContainer(navigator);