const app = require('./app')
const connectDB = require('./config/database')
const dotenv = require('dotenv')
const cloudinary = require('cloudinary')


//Handle Unhandled Promise rejections
process.on('uncaughtException', err => {
    console.log(`ERROR ${err.stack}`)
    console.log('Shutting down due to uncaught exception')
    process.exit(1)
})

//Setup config file
dotenv.config({ path: 'backend/config/config.env' })

//Connect to database
connectDB()

// Setting up cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})
module.exports=server;
//Handle Unhandled Promise rejections
process.on('unhandledRejection', err => {
    console.log(`ERROR ${err.message}`)
    console.log('Shutting down server due to unhandled Promise rejection')
    server.close(() => {
        process.exit(1)
    })
})
