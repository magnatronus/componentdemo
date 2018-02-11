/**
 * pdf.js
 * This is an example child that will using the android pdf viewer component
 */
import Magnium from '/system/magnium';
import BaseWindow from '/wins/base';
import PDFViewer from '/components/androidpdfviewer';

class PDFScreen extends BaseWindow {


    generateView() {

        // first move the embedded pdf to the applicationData directory and extract the file name
        var roPDF= Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,'demo.pdf');
        var newPDF = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'demo.pdf');
        if (roPDF.exists() !== false) {
            newPDF.write(roPDF.read());
        }

        // create main container window
        const mainWindow = super.generateView({title: "Demo PDF"});

        // now if PDF exists lets add a viewer
        if(newPDF.exists()){

            // prepare the filename so the viewer can reference it
            const file = newPDF.nativePath.replace("file:///", "/");
        
            // prep the PDF Viewer
            const pdf = new PDFViewer({pdf: file});
            pdf.openPDF();
            this.currentPage = 1;
        
            // add a view to hold the PDF
            const viewer = Ti.UI.createView({
                width: Ti.UI.FILL,
                top: 40,
                bottom: 40
            });
            viewer.add(pdf.view);
            pdf.getPreview(); // we will just use preview to get the first page
            mainWindow.add(viewer);
        }

        // assemble the main window
        return mainWindow;
    }


}

export default PDFScreen;