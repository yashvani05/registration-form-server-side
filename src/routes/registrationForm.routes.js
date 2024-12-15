import express from 'express'
import { saveRegstartionForm } from '../modules/registrationForm/registrationForm.controller.js'
const controllerRoutes = express.Router()


controllerRoutes.post('/save-form', saveRegstartionForm)

export default controllerRoutes

