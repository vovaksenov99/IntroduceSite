let build = function () {
    const RenderPDF = require('chrome-headless-render-pdf');
    RenderPDF.generateSinglePdf(path.join(config.hostname, "pdf?lang=Rus"), path.join(config.projectDir, 'public/AksenovVladimirCV_Rus.pdf'), {
        //chromeBinary: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        paperWidth: "8.27",
        paperHeight: "11.69",
        noMargins: true
    })
        .then((onFulfilled, onRejected) => {
            console.log("Done Rus");
        })
        .catch(function () {
            console.log("Pdf build error");
        });
    RenderPDF.generateSinglePdf(path.join(config.hostname, "pdf?lang=En"), path.join(config.projectDir, 'public/AksenovVladimirCV_En.pdf'), {
        //chromeBinary: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        paperWidth: "8.27",
        paperHeight: "11.69",
        noMargins: true
    })
        .then((onFulfilled, onRejected) => {
            console.log("Done En");
        })
        .catch(function () {
            console.log("Pdf build error");
        });
};

module.exports.build = build;