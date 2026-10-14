import KaryawanModel from "../model/Karyawan.model.js";
import { apiResponse,apiResponseValidation } from "../utils/response.js";
import { storeKaryawanSchema,updateKaryawanSchema } from "../schemas/Karyawan.schema.js";
class KaryawanController {
    static async index(req,res) {
        const listKaryawan = await KaryawanModel.find()

        return apiResponse({
            res,
            status : 200,
            message : "List Karyawan",
            data : listKaryawan
        })
    }
    static async show(req,res) {
        const KaryawanId = req.params.id;

        const Karyawan = await KaryawanModel.findById(KaryawanId)
        return apiResponse({
            res,
            status : 200,
            message : "Detail Karyawan",
            data : Karyawan
        })
    }
    static async store(req,res){
        const result = storeKaryawanSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{ nama_karyawan, jabatan, gaji} = result.data;

        const Karyawan = await KaryawanModel.create({
            nama_karyawan : nama_karyawan,
            jabatan : jabatan,
            gaji : gaji
        })
        return apiResponse({
            res,
            status : 200,
            message : "Karyawan berhasil di buat",
            data : Karyawan 
        })
    }
    static async update(req, res) {
        const KaryawanId = req.params.id
        const result = updateKaryawanSchema.safeParse(req.body);
        if(!result.success) {
            return apiResponseValidation({
                res,
                errors: result.error
            })
        }
        const{nama_karyawan, jabatan, gaji} = result.data;
   
        const exists = await KaryawanModel.exists({ _id: KaryawanId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Karyawan tidak ditemukan' })
    }
        const updateKaryawan = await KaryawanModel.findOneAndUpdate(
            { _id: KaryawanId },
            { nama_karyawan, jabatan, gaji },
            { new: true }
    )
        return apiResponse({ res, status: 200, data: updateKaryawan })
  }
    static async delete(req, res) {
        const KaryawanId = req.params.id
        const exists = await KaryawanModel.exists({ _id: KaryawanId })
        if (!exists) {
            return apiResponse({ res, status: 404, message: 'Karyawan tidak ditemukan' })
    }
        await KaryawanModel.findOneAndDelete({ _id: KaryawanId })
            return apiResponse({ res, status: 200, message: 'Karyawan berhasil dihapus', data: null })
  }

}

export default KaryawanController