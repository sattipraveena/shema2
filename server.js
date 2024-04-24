const express = require("express")
const app = express()
const cors = require("cors")
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static("public"));
mongoose.connect('mongodb://localhost:27017');
// connect to the mongodb database
/* connectDB() */

app.use('/api/items', require("./routes/items"))
app.use('/api/payment', cors(), require("./routes/payment"))

app.listen(PORT, console.log("Server is running on port ", PORT))