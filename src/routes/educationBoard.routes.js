import express from 'express'
import { getEducationBoardMasterData, saveEducationBoardMasterData, updateEducationBoardMasterData } from '../modules/educationBoard/educationBoard.controller.js'
const controllerRoutes = express.Router()


controllerRoutes.get('/get-education-board-master-data/:instituteType', getEducationBoardMasterData)
controllerRoutes.post('/save-education-board-master-data', saveEducationBoardMasterData)
controllerRoutes.post('/update-education-board-master-data', updateEducationBoardMasterData)

export default controllerRoutes