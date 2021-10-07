import { Router } from "express";
import { authController } from "./authController"

export const router = Router()
const controller = new authController()

router.get('/registration', controller.registration)
router.get('/login', controller.login)
router.get('/users', controller.users)
