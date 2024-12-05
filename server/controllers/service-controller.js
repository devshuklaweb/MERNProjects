const ServiceModal = require('../models/service-model')

const Services = async (res, resp) => {
    try {
        const response = await ServiceModal.find();
        if (!response) {
            return resp.status(404).json({message:"No services found!"});    
        }
        return resp.status(200).json({
            data: response, message:"Services found" });
    } catch (error) {
        console.log(errorObj, 'Error')
    }
}

module.exports = Services
