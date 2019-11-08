// Load data
let tableData = require("../data/tableData");
let waitListData = require("../data/waitinglistData");

// Routing
module.exports = function(app) {

    // API Get requests
    app.get("/api/tables", function(request, response) {
        response.json(tableData);
    });

    app.get("/api/waitlist", function(request, response) {
        response.json(waitListData);
    });

    // API Post requests
    app.post("/api/tables", function(request, response) {
        if(tableData.length < 5) {
            tableData.push(request.body);
            response.json(true);
        } else {
            waitListData.push(request.body);
            response.json(false);
        }
    });
};