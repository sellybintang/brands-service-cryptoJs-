const router = require('express').Router()
const {register, login, ambilSemuaProfile, ubahProfile, hapusProfile} = require ('../controller/authController')
const upload= require('../middleware/uploader')



router.post('/register', upload.single('poto'), register);
router.post('/login', login)
router.get('/semuaProfileUsers', ambilSemuaProfile)
router.patch('/ubahProfile/:id', ubahProfile);
router.delete('/hapusProfile/:id', hapusProfile)

module.exports= router