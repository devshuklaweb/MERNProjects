const UserModel = require("../models/user-model");
const contactModel = require("../models/contact-model")
const serviceModel = require("../models/service-model")

const getAllUsers = async (req, resp) => {

    try {
        const response = await UserModel.find({}, { 'password': 0 });
        if (!response || response.length === 0) {
            resp.status(404).send({ message: 'User not found!' })
        }
        return resp.status(200).json(response);
    } catch (error) {
        next(error);
        //resp.status(500).send({ message: 'Internal server error and error' })
    }
};

const getUserById = async (req, resp) => {

    try {
        const id = req.params.id;
        const data = await UserModel.findOne({ _id: id }, { password: 0 });
        console.log(data, "Edit Data");
        return resp.status(200).json(data);

    } catch (error) {
        next(error);
    }
};

const updateUserById = async (req, resp) => {

    try {
        const id = req.params.id;
        const updateData = req.body;
        console.log(updateData, 'updateData');
        const updatedData = await UserModel.updateOne({ _id: id }, {
            $set: updateData
        });
        console.log(updatedData, "updateUserById Data");
        return resp.status(200).json(updatedData);

    } catch (error) {
        next(error);
    }
};

const deleteUserById = async (req, resp) => {

    try {
        const id = req.params.id;
        const response = await UserModel.deleteOne({ _id: id });
        return resp.status(200).json({ message: 'User deleted successfully.' });
        
    } catch (error) {
        next(error);
    }
};

const getAllContacts = async (req, resp) => {

    try {
        const response = await contactModel.find();
        if (!response || response.length === 0) {
            resp.status(404).send({ message: 'Contact not found!' })
        }
        return resp.status(200).json(response);
    } catch (error) {
        next(error);
    }
}; 

const deleteContactById = async (req, resp) => {

    try {
        const id = req.params.id;
        const response = await contactModel.deleteOne({ _id: id });
        return resp.status(200).json({ message: 'User deleted successfully.' });

    } catch (error) {
        next(error);
    }
};

const getAllServices = async (req, resp) => {

    try {
        const response = await serviceModel.find();
        if (!response || response.length === 0) {
            resp.status(404).send({ message: 'Services not found!' })
        }
        return resp.status(200).json(response);
    } catch (error) {
        next(error);
    }
};

const deleteServiceById = async (req, resp) => {

    try {
        const id = req.params.id;
        const response = await serviceModel.deleteOne({ _id: id });
        return resp.status(200).json({ message: 'Service deleted successfully.' });
        
    } catch (error) {
        next(error);
    }
};

module.exports = { getAllUsers, getUserById, updateUserById, deleteUserById, getAllContacts, deleteContactById, getAllServices, deleteServiceById };