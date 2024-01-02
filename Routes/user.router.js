const express = require('express')
const router = express.Router()

const userService = require('../Services/user.service')

const { FilterBy } = require('../utility')


router.get('/', async (req, res) => {
    let data = await userService.getAllUser()
    res.send(data)
})
// /user/search?email=robert.johnson@example.com
// req.query = {email=robert.johnson@example.com}
router.get('/search', async (req, res) => {
    try {
        let data = await userService.getUser(req.query)
        res.send(data)
    }
    catch (err) {
        console.log("Error:\n", err);
        res.status(400).send(err)
    }
})
//   /user/234234234
router.get('/:userId', async (req, res) => {
    try {
        let data = await userService.getUser(req.params.userId, FilterBy.Id)
        res.send(data)
    }
    catch (err) {
        console.log("Error:\n", err);
        res.status(400).send(err)
        // res.sendStatus(400)
    }
})

router.get('/email/:email', async (req, res) => {
    let data = await userService.getUser(req.params.email, FilterBy.Email)

    res.send(data)
})


router.post('/', async (req,res)=>{
    try{
        const newUser = await userService.addNewUser(req.body)
        res.send(newUser)
    }
    catch(err){
        res.status(400).send(err)
    }
})
router.put('/:userId', async (req,res)=>{
    try{
        const updatedUser = await userService.updateUser(req.params.userId, req.body)
        res.send(updatedUser)
    }
    catch(err){
        res.status(400).send(err)
    }
})

module.exports = router