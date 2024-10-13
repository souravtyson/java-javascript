var pdfcrowd = require("pdfcrowd");

// create the API client instance
var client = new pdfcrowd.HtmlToPdfClient("demo", "ce544b6ea52a5621fb9d55f8b542d14d");

// configure the conversion
try {
    client.setPageSize("A4");
    client.setMarginTop("0in");
    client.setMarginRight("0in");
    client.setMarginBottom("0in");
    client.setMarginLeft("0in");
    client.setUsePrintMedia(true);
} catch(why) {
    // report the error
    console.error("Pdfcrowd Error: " + why);
    process.exit(1);
}

// run the conversion and write the result to a file
client.convertFileToFile(
    "D:\\code\\resume\\nova\\topdf.zip",
    "result.pdf",
    function(err, fileName) {
        if (err) return console.error("Pdfcrowd Error: " + err);
        console.log("Success: the file was created " + fileName);
});