const router = require('express').Router()
const { buatClients, ambilDataClients, ubahDataClinets, hapusClients } = require('../controller/clientsController');
const Authorize = require('../middleware/hakAkses');



router.post('/buatClients', Authorize, buatClients);
router.get('/ambilClients', Authorize, ambilDataClients);
router.patch('/ubahClients/:id', Authorize, ubahDataClinets);
router.delete('/hapusClients/:id', Authorize, hapusClients);

module.exports= router