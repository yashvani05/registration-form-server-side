
import MODEL from '../educationBoard.models.js'


async function findEducationBoardMasterDataByInstituteType(params) {
    try {
    const response = await MODEL.findOne({ institute_type: params.instituteType });
    return response;
    } catch (error) {

    }
}


export {
    findEducationBoardMasterDataByInstituteType
}