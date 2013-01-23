$(document).ready(function () {
   
    $(window).ftsSearch({
        output: "#output",
        url: "data/contacts.json",
        queryField: "#q"
    });
});