/**
 * child.js
 * This is an example child window
 */
import Magnium from '/system/magnium';
import BaseWindow from '/wins/base';


class ChildScreen extends BaseWindow {


    generateView() {

        // create main container window
        const mainWindow = super.generateView({title: "Child"});
        mainWindow.add(Ti.UI.createLabel({...styles.childLabel, text: "Child Window"}));

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