// const encryptionKey = '1234'; // Replace this with your encryption key
// const dataToEncrypt = 'sensitive_data';
// const encryptedData = encryptData(dataToEncrypt, encryptionKey);
const {Roles, Users} = require('../models')
const decryptCrypto = require('crypto-js')

const readToken = async(token) => {
    const bytes = decryptCrypto.AES.decrypt(token, process.env.KEY);
    const decryptedData = bytes.toString(decryptCrypto.enc.Utf8);
    return JSON.parse(decryptedData);
}



// Authorize

const Authorize=async(req, res, next)=>{
    try{
        const BearerToken= req.headers.authorization
        console.log(BearerToken)
        if(!BearerToken){
            return res.status(401).json({
                status:'Error',
                message:'Unauthorized'
            })
        }
        const token = BearerToken.split("Bearer ")[1];
        const tokenPayload = await readToken(token);

        if(tokenPayload.exp && tokenPayload.exp< Math.floor(Date.now()/1000)){
            return res.status(401).json({
                status:'Error',
                message: 'Maaf, token yang diinput sudah kedaluarsa, silahkan login kembali.'
            })
        }
        tokenPayload.role_id = tokenPayload.role_id.toString()
        const akses = await Roles.findOne({where: {id_role:tokenPayload.role_id}})

        // if(akses.id_role==1){
        //     next()
        //     // res.status(200).json({
        //     //      next()
        //     //     status:'Berhasil',
        //     //     message:'Akses Diberikan'
        //     // })
           
        // }

        console.log(akses.hak_Akses)

        const endpoint = req.originalUrl.split('/')[2]
        const cekHak = akses.hak_Akses.find(e=>e==endpoint)
        if(!cekHak){
            return res.status(401).json({
                status:'Error',
                message:'Unauthorized'
            })
        }
        next()
    }catch(err){
        res.status(200).json({
            status:'Error',
            message: err.message
        })
    }
}


module.exports = Authorize
