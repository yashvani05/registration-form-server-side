import MODEL from '../registartionForm.models.js'


async function saveRegistartionForm(params) {
    try {
        const response = await MODEL.create(params);
        return response;
    } catch (error) {
       throw error;
    }
}

export {
    saveRegistartionForm
}