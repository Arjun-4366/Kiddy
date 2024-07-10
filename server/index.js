const express =  require('express')
const app  = express()
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL).then(()=>console.log('db connected'))
const cors = require('cors')
app.use(cors())
app.use(express.urlencoded({extended:true}))
const PORT = process.env.PORT || 3004



const productRoutes = require('./routes/router');


app.use('/api/products', productRoutes);

app.listen(PORT,()=>{
    console.log('server is listening in',PORT)
})

