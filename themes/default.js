/**
 * a test theme for our Component Demo
 */


// first lets define some default local values that can be referenced eslewhere in the theme
const app = {
    defaultTextSize: 18,
    primaryTextColor: "#4C4C4C",
    secondaryTextColor: "#FFFFFF",
    primaryBackgroundColor: "#FFFFFF",
    secondaryBackgroundColor: "#108080"
  };
  
  
  // A standard window style
  export const standardWindowStyle = {
    tintColor: app.secondaryTextColor,
    barColor: app.secondaryBackgroundColor,
    backgroundColor: app.primaryBackgroundColor,
    titleAttributes: {
      font: {fontSize: app.defaultTextSize},
      color: app.secondaryTextColor
    }
  };
  
  // override for the StackNavigator component
  export const stackNavigatorStyle =  {
    navWindowStyle: {...standardWindowStyle}
  };
  
  
  // override the android header style
  export const androidHeaderStyle = {
  
    mainView: {
      top: 0,
      width: Ti.UI.FILL,
      height: 50,
      backgroundColor: app.secondaryBackgroundColor
    },
  
    title:{
      font: {fontSize: app.defaultTextSize},
      color: app.secondaryTextColor,
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE,
      textAlign: 'center'
    },
  
  };
  
  // override for the LoadingIndicator component
  export const loadingIndicatorStyle = {
  
    popupViewStyle: {
      backgroundColor: app.secondaryBackgroundColor,
      borderRadius: 6,
      height: Ti.UI.SIZE,
      width: 280
    },
  
    labelStyle: {
      left:15,
      right: 15,
      top:20,
      bottom: 20,
      backgroundColor: app.secondaryBackgroundColor,
      color: app.secondaryTextColor,
      width: Ti.UI.FILL,
      height: Ti.UI.SIZE,
      textAlign: 'center',
      font: {fontSize: app.defaultTextSize}
    }
  
  
  };