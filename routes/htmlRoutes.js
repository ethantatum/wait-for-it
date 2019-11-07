// Dependencies
const path = require("path");

// HTML routing
module.exports = function(app) {
    app.get("/tables", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
};