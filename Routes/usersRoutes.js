const router = require('express').Router()
const {login, ambilSemuaProfile, ubahProfile, hapusProfile, buatAkunUser} = require ('../controller/authController');
const Authorize = require('../middleware/hakAkses');
const upload= require('../middleware/uploader')



router.post('/buatAkunUser', upload.single('poto'), Authorize, buatAkunUser);
router.post('/login', login);
router.get('/semuaProfileUsers', ambilSemuaProfile);
router.patch('/ubahProfile/:id', Authorize, ubahProfile);
router.delete('/hapusProfile/:id', Authorize, hapusProfile);

module.exports= router