const router = require('express').Router()
const {register, login, ambilSemuaProfile, ubahProfile, hapusProfile} = require ('../controller/authController');
const Authorize = require('../middleware/hakAkses');
const upload= require('../middleware/uploader')



router.post('/register', upload.single('poto'), register);
router.post('/login', login)
router.get('/semuaProfileUsers', ambilSemuaProfile)
router.patch('/ubahProfile/:id', Authorize, ubahProfile);
router.delete('/hapusProfile/:id', Authorize, hapusProfile)

module.exports= router