import mongoose from "mongoose"
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import bcrypt from "bcrypt-nodejs"
import uuid from "uuid/v4"

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

const mongoUrl = "mongodb://localhost/user-info"
mongoose.connect(mongoUrl, { useNewUrlParser: true })

mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))



app.listen(8080, () => console.log("Server running on port 8080!"))
