const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const itemsRoute = require("./routes/itemsRoute")
const usersRoute = require("./routes/userRoute")
const billsRoute = require("./routes/billRoute")
const app = express()
const PORT = 5000

//Inbuilt middleware
app.use(express.json())


app.get("/", (req, res) => {
    res.send("Welcome to Store Management")
})

app.use("/items", itemsRoute)
app.use("/users", usersRoute)
app.use("/bills", billsRoute)

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Mongoose is connected")
        app.listen(PORT, () => console.log("Server started on the port", PORT))
    })
    .catch((error) => {
        console.log(error.message)
    })

