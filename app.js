/** packages */

const express = require("express")
const config = require("config")
const bodyParser = require("body-parser")
/** app configuration */

const app = express()
const port = config.get("server-port")
const jsonParser = bodyParser.json()
const urlEncodedParser = bodyParser.urlencoded({
    extended: true
})
app.use(jsonParser)
app.use(urlEncodedParser)


const ipFn = require("./middleware/getipAddress")
app.use("*", ipFn)

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome academic rest api")
})

//** user routes loading */
const userRoutes = require("./routes/user.routes")
userRoutes(app)

//** token middleware */
tkFn = require("./middleware/veryToken")
app.use(tkFn)


/**student routes loading */
const studentRoutes = require("./routes/student.routes")
studentRoutes(app)

//** teacher routes loading */
const teacherRoutes = require("./routes/teacher.routes")
teacherRoutes(app)

//** period routes loading */
const periodRoutes = require("./routes/period.routes")
periodRoutes(app)

//** course routes loading */
const courseRoutes = require("./routes/course.routes")
courseRoutes(app)




app.listen(port, () => {
    console.log("Server is runnig..")
})
