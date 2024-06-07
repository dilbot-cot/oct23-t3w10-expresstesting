
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (request, response, next) => {

    return next(new Error("Error on purpose from root route"))

    response.json({
        message:"Hello World!"
    })
});

app.use((error, request, response, next) => {
    response.json({
        message: "Error occured!",
        error: error
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})