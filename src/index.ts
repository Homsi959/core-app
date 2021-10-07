import express from "express";
import { MongoClient } from 'mongodb'
import { router } from './authRouter'

const app = express();
const PORT = 3001

app.use(express.json())
app.use('/auth', router)


const start = async () => {
  try {
    const URL = 'mongodb+srv://Homsi:1234@core-app.5xi9o.mongodb.net/auth_core?retryWrites=true&w=majority'

    await MongoClient.connect(URL)

    app.listen(PORT, () => {
      console.log("asd");

    })
  } catch (err) { }
}

start()