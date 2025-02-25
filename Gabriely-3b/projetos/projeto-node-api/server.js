const express = require("express")
const router = require("./src/routers/userRoutes")

const app = express

app.use(express.json())
app.use("/api", router)

app.listen(8080, () => {
    console.log("API ONLINE")
})