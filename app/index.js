/**
 * index.js
 * This is the main class that is used to start your app
 * The class name can be anything you wish, in the example it is StackApp
 */
import { Component } from '/system/magnium';
import StackNavigator from '/components/stacknavigator';
import HomeScreen from '/wins/home';

class StackApp extends Component {

 
  generateView() {

    // in ths example we start with a Stack Navigator
    return new StackNavigator({window:HomeScreen}).view;

  }

}



export default StackApp;
