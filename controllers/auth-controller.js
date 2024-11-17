
const home = async (req, resp) => {

    try {

        resp.status(200).send("auth controller using auth-router");

    } catch(err) {
        console.log(err);
    }

}

const register = async (req,resp) => {

    try {
        console.log(req.body);
        //resp.status(200).send("register-auth controller using auth-router");
        resp.status(200).send({inputs: req.body});
    } catch(error) {
        resp.status(400).send("Error found. "+error);
    }
}

module.exports = {home,register};