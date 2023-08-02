const Users = require ('../models').Users;
const bcrypt = require('bcrypt');
const { constants } = require('fs/promises');

// Register Users
const register = async (req,res)=>{
    try{
        const poto = req.file.path
        const {
            namaAwal,
            namaAkhir,
            alamat,
            email,
            kataSandi,
            role
        }=req.body
        const salt = await bcrypt.genSalt(10)
        const hashKataSandi = await bcrypt.hash(kataSandi, salt);
        console.log(hashKataSandi)

        // Validasi Kata Sandi minimal 10 karakter
        const sandi = kataSandi.length>8
        if (!sandi){
            return res.status(200).json({
                message:'Kata sandi minimal 8 karakter'
            })
        }

        // Validasi jika email sudah terdaftar
        const validasiEmail= await Users.findOne({where:{email:email}})
        if(validasiEmail){
            return res.status (400).json({
                message: 'Maaf, email sudah terdaftar'
            })
        }

        const buatAkun = await Users.create({
            namaAwal,
            namaAkhir,
            alamat,
            email,
            poto:poto,
            kataSandi:hashKataSandi,
            role
        });
            res.status(200).json({
                status: 'Berhasil',
                message: 'Terimakasih, data sudah terdaftar', buatAkun
            });
    }catch(err){
        res.status(500).json ({
            status: 'Gagal',
            message: err.message
        });
    };
};


const login = async(req, res) =>{
    try{
        const {email, kataSandi}=req.body
        const masukUser = await Users.findOne({where:{email:email}})
        const masukSandi = await Users.findOne({where:{kataSandi:kataSandi}})
        
        if(!masukUser){
            return res.status (400).json({
                status: 'Gagal',
                message: 'Maaf, email sudah terdaftar'
            })   
        }
        if(!masukSandi){
            return res.status (400).json({
                status: 'Gagal',
                message: 'Maaf, kata sandi salah'
            })   
        }
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, ada kesalahan saat memasukkan email atau kata sandi anda'
        })
    }
};

const ambilSemuaProfile = async (req, res) =>{
    console.log(req.Users)
    try{
        const getAllProfile = await Users.findAll()
        res.status(200).json({
            status:'Berhasil',
            message:'Berikut semua data users', getAllProfile
        })
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, data users belum bisa ditampilkan'
        })
    }
}

const ubahProfile =async(req, res) =>{
    try{
        const id = req.params.id;
        const ubah = req.body;
        console.log(ubah)
        const ubahProfileBaru = await Users.update(ubah,{where:{id:id}});
        res.status(200).json({
            status:'Berhasil',
            message:'Data berhasil dirubah', ubahProfileBaru
        })
    }catch{
        res.status(500).json({
            status:'Gagal',
            message:'Maaf, data belum bisa diubah'
        })

    }
};

const hapusProfile = async(req, res)=>{
    try{
        const id = req.params.id;
        const hapusProfileBaru= await Users.destroy({where:{id}});
        res.status(200).json({
            status:'Berhasil',
            message:'Data berhasil dihapus', hapusProfileBaru
        })
    }catch{
        res.status(500).json({
            status: 'Gagal',
            message: 'Data gagal dihapus'
        })
    }
}

module.exports={
    register,
    login,
    ambilSemuaProfile,
    ubahProfile,
    hapusProfile
}