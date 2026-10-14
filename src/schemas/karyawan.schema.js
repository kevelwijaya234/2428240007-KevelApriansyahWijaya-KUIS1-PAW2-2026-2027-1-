import z from "zod";

export const storeKaryawanSchema = z.object({
    nama_karyawan : z.string().trim().max(50, "Diisi dengan nama lengkap"),
    jabatan : z.string().trim().max(50, "Jabatan tidak boleh disingkat"),
    gaji : z.number().positive("Gaji harus bilangan positif tanpa koma")
});
export const updateKaryawanSchema = z.object({
    nama_karyawan : z.string().trim().max(50, "Diisi dengan nama lengkap"),
    jabatan : z.string().trim().max(50,"Jabatan tidak boleh disingkat"),
    gaji : z.number().positive("Gaji harus bilangan positif tanpa koma")
});