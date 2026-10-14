import moongoose from 'mongoose'

const KaryawanSchema = new moongoose.Schema({
    name :{
        nama_karyawan: String,
        jabatan: String,
        gaji: Number,
    }
},{
    timestamps : true
})

const KaryawanModel = moongoose.model('Karyawan',KaryawanSchema)
export default KaryawanModel