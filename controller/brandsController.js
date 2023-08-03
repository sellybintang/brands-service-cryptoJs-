const {Brands} = require ('../models')
// const  {path}=require('path')

// Create Brands

const buatBrands = async(req,res)=>{
    try{
        const logo = req.file.path
        const {
            id_clients,
            jenisBrands,
            namaBrands
        }=req.body
        const buatBrandsBaru=await Brands.create({id_clients:id_clients, logo:logo,jenisBrands:jenisBrands,namaBrands:namaBrands});
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, Data branch berhasil dibuat', buatBrandsBaru
        })
    }catch(err){
        res.status(500).json({
            status:'Gagal',
            message:err.message
        })
    };
};

// Read Branch

const ambilBrands = async(req, res) =>{
    try{
        const ambilBrandsBaru = await Brands.findAll();
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, Semua data brands berhasil ditampilkan', ambilBrandsBaru
        })
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, data brands gagal ditampilkan'
        })
    };
};

// Update Brands
const ubahBrands = async(req, res)=>{
    try{
        const id = req.params.id;
        const ubah =req.body.id
        const ubahBrandsBaru = await Brands.update(ubah,{where:{id}})
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, data brands berhasil diubah', ubahBrandsBaru
        })
    }catch(err){
        res.status(500).json({
            status:'Gagal', 
            message:err.message
        })
    };
};

// Delete Brands
const hapusBrands = async (req, res)=>{
    try{
        const id = req.params.id;
        const hapusBrandsBaru = await Brands.destroy({where:{id}})
        res.status(200).json({
            status:'Berhasil',
            message:'Selamat, data brands berhasil diubah', hapusBrandsBaru
        })
    }catch{
        res.status(500).json({
            status:'Berhasil',
            message:'Maaf, data gagal dihapus'
        })
    };
};

module.exports={
    ubahBrands,
    buatBrands,
    ambilBrands,
    hapusBrands
}