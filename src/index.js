const {app, PORT} = require('./server')

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})