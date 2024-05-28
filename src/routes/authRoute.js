import express from "express";
import * as authController from '../controllers/authController.js';

const router = express.Router()

router.post('/login',authController.login)
router.patch('/forgotpassword',authController.forgotPassword)
router.patch('/resetpassword/:token',authController.resetPassword)
router.patch('/verification/:token',authController.validateEmailAddress)

export default router