/**
 * home.js
 * This is the root or home screen for our demo app
 * This version has been updated to show the sue of a common base class for a standard window
 */
import Magnium from '/system/magnium';
import BaseWindow from '/wins/base';
import ButtonBar from '/components/buttonbar';
import LoadingIndicator from '/components/loadingindicator';
import ChildScreen from '/wins/child';
import PDFScreen from '/wins/pdf';

  
// define our buttons 
const barButtons = [
    {id: "BTN_GO", icon: "\uf0a4", title: "Go"}, 
    {id: "BTN_ABOUT", icon: "\uf129", title: "Info"}, 
];


class HomeScreen extends BaseWindow {


    checkButton(evt){
        switch(evt.button){
            case "BTN_PDF": Magnium.Dispatcher.trigger(Magnium.Events.evt.MAGNIUM_STACKNAV_OPEN, {window: PDFScreen}); break;
            case "BTN_ABOUT": alert("this is the demo about about dialog!"); break;
            case "BTN_GO":  // faux loader for demo
                const loader = new LoadingIndicator({text:"Loading Child Screen. Please Wait....."}).view;
                loader.open();
                setTimeout(() => {
                    loader.close();
                    Magnium.Dispatcher.trigger(Magnium.Events.evt.MAGNIUM_STACKNAV_OPEN, {window: ChildScreen});                
                }, 1000);
                break;
        }
    }

    beforeView() {

        // just for test purposes we register the button event and set up a monitor
        Magnium.Events.registerEvent('MAGNIUM_BAR_BUTTON_CLICK');
        Magnium.Dispatcher.on(Magnium.Events.evt.MAGNIUM_BAR_BUTTON_CLICK, this.checkButton.bind(this));

        // Also add the PDF viewer button if Android for viewer demo
        if(Magnium.isAndroid){
            barButtons.push({id: "BTN_PDF", icon: "\uf1c1", title: "PDF"});
        }
    }

    generateView() {

        // create main container window
        const mainWindow = super.generateView({title: "Home"});

        // assemble the main window
        mainWindow.add(new ButtonBar({buttons: barButtons}).view);
        return mainWindow;
    }


}

export default HomeScreen;