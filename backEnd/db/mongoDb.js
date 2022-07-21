import Mongoose  from 'mongoose';



const connectionString= process.env.DB_CONNECT;

// conexión con MongoDB

const db=()=>{
  Mongoose.connect(connectionString)
  .then(() => {
    console.log("database connected")
  }).catch(err => {
    console.error(err)
  })
}

export default db;