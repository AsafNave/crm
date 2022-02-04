import { addNewContact, getContactById, getContacts, updateContactById, deleteContactById} from "../controllers/crmController";

//building route as a const with a parameter app
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, getContacts)

        .post(addNewContact);

    app.route('/contact/:contactID')
        .get(getContactById)

        .put(updateContactById)

        .delete(deleteContactById)
}

export default routes;