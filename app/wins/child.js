/**
 * child.js
 * This is an example child window
 */
import Magnium, { Component } from '/system/magnium';
import AndroidHeader from '/components/androidheader';

// import the styles we want
import { standardWindowStyle } from '/theme';

class ChildScreen extends Component {


    generateView() {

        // create main container window
        const mainWindow = Ti.UI.createWindow({...standardWindowStyle, title: "Child"});
        mainWindow.add(Ti.UI.createLabel({...styles.childLabel, text: "Child Window"}));

        // as this is a cross platform window we are going to use a 'faux' android header
        // purely optional but shows the use of detecting if Android
        if(Magnium.isAndroid){
            mainWindow.add(new AndroidHeader({title: "Child"}).view);
        }

        // assemble the main window
        return mainWindow;
    }


}

const styles = {
    
    childLabel: {
        font: {fontSize: 20},
        color: "#400080",
        height: Ti.UI.SIZE,
        width: Ti.UI.FILL,
        textAlign: "center"
    }
};

export default ChildScreen;