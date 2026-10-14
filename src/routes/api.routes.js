import express from 'express'
import KaryawanController from '../controllers/Karyawan.controller.js'

import upload from '../config/upload.js'
import UploadController from '../controllers/upload.controller.js'
import UserController from '../controllers/user.controller.js'
import WelcomeController from '../controllers/welcome.controller.js'

const router = express.Router()

router.get('/welcome', WelcomeController.welcome)
router.post('/users', UserController.store)
router.post('/upload', upload.single('file'), UploadController.store)

router.get('/Karyawan',KaryawanController.index)
router.get("/Karyawan/:id",KaryawanController.show)
router.post("/Karyawan",KaryawanController.store)
router.put("/Karyawan/:id",KaryawanController.update)
router.patch("/Karyawan/:id",KaryawanController.update) 
router.delete("/Karyawan/:id",KaryawanController.delete)

export default router
