// Dependencies
let express = require("express");

let app = express();
let PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

// Router
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
    console.log(`App is listening on Port ${PORT}`);
});