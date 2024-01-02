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
    if (!data.lastName) errors.push("latstName")
    if (!data.email) errors.push("email")

    return errors
}




function updateUser(user) {
    // user.email 
    // user is not exist >> by email

    // valid : fName, lName ,DOB

    // generate ID :
    // Option 1
    // Option 1
    //  id maximum >> higher
    //  + 1

    // Option 2
    // id by algorithem
    let id = generateId()
    // user.id = genId

    // push user to data

    // return user / user.id 
}

function generateId() {
    return Date.now().toString().substring(2, 8)
}

module.exports = { getAllUser, getUser, addNewUser }




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