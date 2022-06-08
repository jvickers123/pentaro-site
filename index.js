import express from 'express'
import mongoose from 'mongoose'


const app = express()

//server setup
const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
    console.log('✅ mongoDB server connected ✅')

    //JSON parser
    app.use(express.json())

    //Middleware
    //logger
    // app.use((req, _res, next) => {
    //   console.log(`🚩 request has been recieved ${req.method} - ${req.url}`)
    //   next()
    // })
    // //routes //add this in once routes are made
    // app.use('/api', router)

    // //deployment additions
    // app.use(express.static(path.join(__dirname, 'client', 'build')))
    // app.get('*', (req, res) => {
    //   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    // })


    // //CATCH all
    // app.use((_req, res) => {
    //   return res.status(404).json({ message: 'route not found' })
    // })

    app.listen(process.env.PORT, () => console.log(`server is listening on port ${process.env.PORT}`))

  } catch (err) {
    console.log(err)
  }

}
startServer()