const mongoose = require('mongoose')
require('./user.model')
require('./car.model')

const rentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "user",
        required: true
    },
    carId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "car",
        required: true
    },
    rentDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: Date,
        required: true,
    },
    returned: {
        type: Boolean,
        default: false
    }

})
const rentModel = mongoose.model('rent', rentSchema)
module.exports = rentModel;


// const go = async () => {
//     require("dotenv").config();
//     const db = require('./db')
//     db.connect()

//     // let data = {
//     //     userId: "6592a4a5641d9b1dde81ccc4",
//     //     carId: "659416afbff0a4789aba0a80",
//     //     rentDate: new Date(2023, 10, 1),
//     //     returnDate: new Date(2023, 10, 6),
//     // }
//     // let res = await rentModel.create(data)


//     let res = await rentModel
//         .findOne({ _id: "659419cc808f7feb46deb213" })
//         .populate("userId")
//         .populate("carId")

//     console.log(res);
// }

// go()