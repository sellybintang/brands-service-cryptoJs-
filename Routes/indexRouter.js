const router = require('express').Router()
const authRoutes= require('../Routes/usersRoutes')
const clientRoutes= require('../Routes/clientsRouter')
const brandsRoutes= require('../Routes/brandsRouter')


router.use ('/users', authRoutes);
router.use ('/clients', clientRoutes);
router.use ('/brands', brandsRoutes);

module.exports=router