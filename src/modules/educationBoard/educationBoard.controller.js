import { getEducationBoardMasterDataService, saveEducationBoardMasterDataService, updateEducationBoardMasterDataService } from "./services/educationBoard.service.js";

const getEducationBoardMasterData = (req, res) => {
    const params = req.params
    getEducationBoardMasterDataService(params).then((response) => {
        console.log("response: " + response);
        
        const responseRecived = response !== null ? 200 : 400;
        res.status(responseRecived).send({
            message: responseRecived === 400 ? "no record found for this borad" : 'master data fetched successfully!!',
            data: response
        })
    }).catch((error) => {
        const errorResponse = error.code === 11000 ? 409 : error.code;
        res.status(errorResponse).send({
            message: 'master data failed to fetch!!',
            error: error,
        })
    })
}
const saveEducationBoardMasterData = (req, res) => {
    const params = req.body
    saveEducationBoardMasterDataService(params).then((response) => {
        const responseRecived = response ? 200 : 400;
        res.status(responseRecived).send({
            message: 'master data saved successfully!!',
            data: response
        })
    }).catch((error) => {
        const errorResponse = error.code === 11000 ? 409 : error.code;
        res.status(errorResponse).send({
            message: 'master data failed to save!!',
            error: error,
        })
    })
}
const updateEducationBoardMasterData = (req, res) => {
    const params = req.body
    updateEducationBoardMasterDataService(params).then((response) => {
        const responseRecived = response ? 200 : 400;
        res.status(responseRecived).send({
            message: 'master data update successfully!!',
            data: response
        })
    }).catch((error) => {
        const errorResponse = error.code === 11000 ? 409 : error.code;
        res.status(errorResponse).send({
            message: 'master data failed to update!!',
            error: error,
        })
    })
}


export {
    getEducationBoardMasterData,
    saveEducationBoardMasterData,
    updateEducationBoardMasterData
}
