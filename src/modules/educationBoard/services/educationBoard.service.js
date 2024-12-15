import { findEducationBoardMasterDataByInstituteType } from "../core/find.js";
import { saveEducationBoardMasterData } from "../core/save.js";
import { updateEducationBoardMasterData } from "../core/update.js";

async function getEducationBoardMasterDataService(params) {
    try {
        console.dir(params, { depth: null });
        if(!params.instituteType){
            throw {
                code: 400,
                message: 'Invalid instituteType or its missing value',
                success: false,
            }
        }
        const parameter = {
            instituteType: params.instituteType
        }
        const response = await findEducationBoardMasterDataByInstituteType(parameter)
        return response
    } catch (error) {
        console.log(error);
        throw error

    }
}
async function saveEducationBoardMasterDataService(params) {
    try {
        console.dir(params, { depth: null });
        const response = await saveEducationBoardMasterData(params)
        return response
    } catch (error) {
        console.log(error);
        throw error

    }
}
async function updateEducationBoardMasterDataService(params) {
    try {
        console.dir(params, { depth: null });
        params.updated_at = new Date
        const response = await updateEducationBoardMasterData(params)
        return response
    } catch (error) {
        console.log(error);
        throw error

    }
}

export {
    getEducationBoardMasterDataService,
    saveEducationBoardMasterDataService,
    updateEducationBoardMasterDataService
}