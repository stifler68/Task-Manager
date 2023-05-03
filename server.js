const express = require('express');
const connectDb = require("./config/dbConnection")
const dotenv= require("dotenv").config();
const errorHandler = require("./middleware/ErrorHandler");

connectDb();
const app = express();


app.use(express.json()); // used when user send Json data to the system.
app.use('/api/contacts', require("./routes/contacts-routes"));
app.use('/api/users', require("./routes/userRoutes")); 

app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port,(req,res)=>{
    console.log(`Server running on port ${port}`);
})
