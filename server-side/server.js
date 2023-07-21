require("dotenv").config({path:'./config.env'})
const app = require("./app")
const { connectDB } = require("./DB/connection")
const port = process.env.PORT || 4000






connectDB()
app.listen(port, () => console.log(`Example app listening on port ${port}!`))