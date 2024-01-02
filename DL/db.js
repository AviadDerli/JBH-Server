const mongoose = require('mongoose')
const MONGO_URL = process.env.MONGO_URL

const connect = () => {
    mongoose.connect(MONGO_URL)
        .then(_ => console.log("Connection To DB - Success"))
        .catch(err => {
            console.error("DB connect error : ", err);
            throw err
        })
}
module.exports = { connect }
