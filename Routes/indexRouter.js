const router = require('express').Router()
const authRoutes= require('../Routes/usersRoutes')


router.use ('/users', authRoutes);

module.exports=router