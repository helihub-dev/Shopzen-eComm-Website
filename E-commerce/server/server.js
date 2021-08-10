// going to be entry point

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const {readdirSync} = require("fs");
require('dotenv').config;

//import routes
//const authRoutes = require("./routes/auth");

//app
const app = express();

// import dotenv
const dotenv = require("dotenv");
dotenv.config();


// database connection
mongoose
    .connect(process.env.MONGO_URI, { 
        useNewUrlParser: true, //mine
        useCreateIndex: true, //Indoex
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"));

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
});

/*//db setup
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
.then(() => console.log(`DB CONNECTED`))
.catch((err) => console.log(`DB CONNECTION ERR`, err));
*/
//DATABASE=mongodb://localhost:27017/ecom


//middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "2mb" })); // we pass json data for server-client communication
app.use(cors());


//route middlewares
//app.use("/api", authRoutes); (not auto load)
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

//route


//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
