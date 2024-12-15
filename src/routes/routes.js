import express from 'express'
import registrationFormRoutes from './registrationForm.routes.js'
import educationBoardRoutes from './educationBoard.routes.js'

const router = express.Router()

router.get('/test-api', (_req, res) => res.sendStatus(200));

router.use('/registration-form', registrationFormRoutes)
router.use('/education-board-master-data', educationBoardRoutes)
export default router;
