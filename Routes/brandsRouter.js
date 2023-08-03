const router = require('express').Router()
const { buatBrands, ambilBrands, ubahBrands, hapusBrands } = require('../controller/brandsController');
const Authorize = require('../middleware/hakAkses');
const upload =require('../middleware/uploader')



router.post('/buatBrands', Authorize, upload.single('logo'),buatBrands);
router.get('/ambilBrands', Authorize,ambilBrands);
router.patch('/ubahBrands/:id',Authorize, ubahBrands);
router.delete('/hapusBrands/:id',Authorize, hapusBrands);

module.exports=router