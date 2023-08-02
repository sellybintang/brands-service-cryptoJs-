const Users = require ('../models').Users;
const bcrypt = require('bcrypt');

// Register Users
const register = async (req,res)=>{
    console.log(req.body)
    try{
      
        
        const {
            namaAwal,
            namaAkhir,
            alamat,
            email,
            poto,
            kataSandi,
            role
        }=req.body
       
        // const hashKataSandi = await bcrypt.hash(kataSandi, 10);
        // console.log(hashKataSandi)
        const buatAkun = await Users.create({
            namaAwal,
            namaAkhir,
            alamat,
            email,
            poto,
            kataSandi,
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

module.exports={
    register,
}