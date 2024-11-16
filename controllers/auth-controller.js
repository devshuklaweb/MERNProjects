
const home = async (res, resp) => {

    try {

        resp.status(200).send("auth controller using auth-router");

    } catch(err) {
        console.log(err);
    }

}

const register = async (res,resp) => {

    try {
        resp.status(200).send("register-auth controller using auth-router");
    } catch(error) {
        resp.status(400).send("Error found. "+error);
    }
}

module.exports = {home,register};