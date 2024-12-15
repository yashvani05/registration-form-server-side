import MODEL from '../educationBoard.models.js'


async function saveEducationBoardMasterData(params) {
    try {
        const response = await MODEL.create(params);
        return response;
    } catch (error) {
       throw error;
    }
}

export {
    saveEducationBoardMasterData
}