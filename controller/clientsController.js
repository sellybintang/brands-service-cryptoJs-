const {Clients}=require('../models');

// Create Client
const buatClients = async(req, res)=>{
    try{
        const buat= req.body;
        console.log(buat)
        const buatClientsBaru= await Clients.create(req.body);
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, data clients anda telah terdaftar',buatClientsBaru
        })
        console.log(buatClientsBaru)
    }catch(err){
        res.status(500).json({
            status:'Gagal',
            message:err.message
        })
    };
};
// 'Maaf, data anda belum bisa terdaftar'

// Read Clients
const ambilDataClients = async (req, res)=>{
    try{
        const ambilDataClientsBaru = await Clients.findAll()
        res.status(200).json({
            status:'Berhasil',
            message:'Semua data clients', ambilDataClientsBaru
        })
    }catch(err){
        res.status(500).json({
            status:'Gagal',
            message:err.message
        })
    }
}

// Update Clients
const ubahDataClinets = async(req, res)=>{
    try{
        const id = req.params.id;
        const ubahDataClinetsBaru = await Clients.update(req.body,{where:{id}});
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, data berhasil dirubah', ubahDataClinetsBaru
        })
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, data gagal dirubah'
        })
    }
};

// Delete Clients
const hapusClients = async (req, res)=>{
    try{
        const id= req.params.id
        const hapusClientsBaru = await Clients.destroy({where:{id}})
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, data anda berhasil dihapus', hapusClientsBaru
        })
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, data gagal dihapus'
        })
    }
}

module.exports={
    buatClients,
    ambilDataClients,
    ubahDataClinets,
    hapusClients
}