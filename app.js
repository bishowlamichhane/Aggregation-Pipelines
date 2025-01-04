import express from "express"
import bodyParser from "body-parser"
import cookieParser from 'cookie-parser'
const app = express()

app.use(express.json())
app.use(bodyParser)
app.use(express.cookieParser())
app.use(express.static('public'))



import router from "./routes/user.routes.js"

app.route("/api/v1/users",router)

export default app()