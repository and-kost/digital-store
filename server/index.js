require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const fileUpload = require('express-fileupload')
const errorHandller = require('./middlewares/ErrorHandling')
const path = require('path')

const PORT = process.env.PORT || 3038

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

app.use(errorHandller)

app.get('/', (req, res) => {
    res.status(200).json({message: 'hello'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()

        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} port.`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
