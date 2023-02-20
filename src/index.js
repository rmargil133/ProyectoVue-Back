const cors = require("cors")
const express = require("express")
const app = express()
const rutasV1 = require("./routes/v1/indexRoutes")

app.use(express.json())
app.use(cors())
// app.use(auth.checkUser)
app.use("/api/v1", rutasV1.router)


app.use((err, req, res, next) => {
  console.log("ERROR EN EL SERVIDOR")
  console.log(err.stack)
  res.status(500).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(
      "\x1b[41m%s\x1b[0m",
      `[start] 🚀 Server listening on port ${PORT} 🚀`
    );
})