let build = function () {

    const RenderPDF = require('chrome-headless-render-pdf');
    RenderPDF.generateSinglePdf(path.join(config.hostname, "pdf"), path.join(config.projectDir, 'public/AksenovVladimirCV.pdf'), {
        //chromeBinary: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
        paperWidth: "8.27",
        paperHeight: "11.69",
        noMargins: true
    })
        .then((onFulfilled, onRejected) => {
            console.log("Done");
        })
        .catch(function () {
            console.log("Pdf build error");
        });
};

module.exports.build = build;