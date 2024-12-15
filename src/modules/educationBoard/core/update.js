import MODEL from '../educationBoard.models.js'


async function updateEducationBoardMasterData(params) {
    try {
        const response = await MODEL.updateOne({ institute_type: params.instituteType }, params);
        return response;
    } catch (error) {
        throw error;
    }
}

export {
    updateEducationBoardMasterData
}