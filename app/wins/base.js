/**
 * base.js
 * This is the window super class. It provides a common set of code to define our re-usable window
 */
import Magnium, { Component } from '/system/magnium';
import AndroidHeader from '/components/androidheader';

// import the styles we want
import { standardWindowStyle } from '/theme';


class BaseWindow extends Component {


    generateView({title}) {

        // create main container window
        const mainWindow = Ti.UI.createWindow({...standardWindowStyle, title: title});

        // as this is a cross platform window we are going to use a 'faux' android header
        // purely optional but shows the use of detecting if Android
        if(Magnium.isAndroid){
            mainWindow.add(new AndroidHeader({title: title}).view);
        }

        // return our standard view
        return mainWindow;
    }


}

export default BaseWindow;