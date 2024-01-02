const userModel = require('./user.model')


async function create(data) {
    return userModel.create(data)
}

async function read(filter) {
    return userModel.find({...filter,isActive:true})
}
async function readOne(filter) {
    return userModel.findOne({...filter,isActive:true})
}

async function update(filter, data ) {
    return userModel.updateOne(filter,data)
}

async function del(filter) {
    return update(filter, {isActive:false})
}

const go = async () => {
    // ***************
    // *** Create ****
    // ***************
    // let res = await create(user)
    // console.log(res);

    // **************
    // **** Read ****
    // **************
    // let res = await read({ rule: "user", firstName:"moshe" })
    // let res = await read({ _id:"65917f01a48beaebe515e886" })
    // let res = await read()
    // let res = await readOne({ _id:"65917f01a48beaebe515e880" })
    // let res = await read({ createdDate   })
    // console.log(res);

    // ****************
    // **** update ****
    // ****************
    // let _id = "65917f01a48beaebe515e886"
    // let data = {firstName : "tzahi", rule:"user"}
    // let res = await update({_id:_id}, data)
    // console.log(res)
    
    // ****************
    // **** Delete ****
    // ****************
    let _id = "65917f01a48beaebe515e886"
    // let data = {firstName : "tzahi", rule:"user"}
    let res = await del({_id:_id})
}


module.exports = { create,read,readOne,update,del }