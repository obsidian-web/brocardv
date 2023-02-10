require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const path = require('path')
const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use(fileUpload({}))
app.use('/api', require('./routes'))

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start().then(r => console.log(r))