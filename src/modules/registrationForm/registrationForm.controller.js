import { saveRegistartionFormService } from "./services/registrationForm.service.js";

const saveRegstartionForm = (req, res) => {
    const params = req.body
    saveRegistartionFormService(params).then((response) => {
        const responseRecived = response ? 200 : 400;
        res.status(responseRecived).send({
            message: 'user data saved successfully!!',
            data: response
        })
    }).catch((error) => {
        const errorResponse = error.code === 11000 ? 409 : error.code;
        res.status(errorResponse).send({
            message: 'user data failed to save!!',
            error: error,
        })
    })
}


export {
    saveRegstartionForm
}
