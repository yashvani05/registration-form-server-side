import { saveRegistartionForm } from "../core/save.js";

async function saveRegistartionFormService(params) {
    try {
        console.dir(params, { depth: null });
        const response = await saveRegistartionForm(params)
        return response
    } catch (error) {
        console.log(error);
        throw error

    }
}

export {
    saveRegistartionFormService
}