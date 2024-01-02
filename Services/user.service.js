const userController = require('../DL/user.controller')

const { FilterBy } = require('../utility')



async function getAllUser() {
    return await userController.read()
}

async function getUser(param, filterBy) {
    let filter = {}
    if (filterBy == FilterBy.Id) filter._id = param
    if (filterBy == FilterBy.Email) filter.email = param

    if (!filterBy) filter = param

    let user = await userController.readOne(filter)
    if (!user) throw "User is not exist"
    return user
}



async function addNewUser(data) {

    // exist by email
    const userExist = await userController.readOne({ email: data.email })
    if (userExist) throw "User is exist"

    // validation
    let errorList = await validation(data)
    if (errorList.length) throw errorList

    // map to model >> user (object)
    let user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        rule: "user",
        license: data.license,
        createdDate: new Date(),
    }
    let newUser = await userController.create(user)

    return newUser
}


async function validation(data) {
    let errors = []
    if (!data.firstName) errors.push("firstName")
    if (!data.lastName) errors.push("lastName")
    if (!data.email) errors.push("email")

    return errors
}


async function updateUser(userId, data) {
 
    // userId exists
    const userExist = await userController.readOne({ _id: userId })
    if (!userExist) throw "User is not exist"

    // map to my object by model
    let userToUpdate = {
        firstName: data.firstName,
        lastName: data.lastName,
    }
    if(data.license){
        userToUpdate.license=[...userExist.license, ...data.license]
    }

    await userController.update({ _id: userId },userToUpdate)
    return await userController.readOne({ _id: userId })
}

function generateId() {
    return Date.now().toString().substring(2, 8)
}

module.exports = { getAllUser, getUser, addNewUser ,updateUser}




// ******* OLD ********
// async function getUserById(userId) {
//     let user = await userController.readOne({ _id: userId })
//     if (!user) throw "User is not exist"
//     return user
// }
// async function getUserByEmail(email) {
//     let user = await userController.readOne({ email })
//     if (!user) throw "User is not exist"
//     return user
// }