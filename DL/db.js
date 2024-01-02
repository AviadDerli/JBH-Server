const mongoose = require('mongoose')
const URL_MONGO = process.env.MONGO_URL

const connect = () => {
    mongoose.connect(URL_MONGO)
        .then(_ => console.log("Connection To DB - Success"))
        .catch(err => {
            console.error("DB connect error : ", err);
            throw err
        })
}
module.exports = { connect }
