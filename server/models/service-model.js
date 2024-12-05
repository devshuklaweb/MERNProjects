const { Schema, model } = require('mongoose')

const ServiceSchema = Schema({
        service: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: String, required: true },
        provider: { type: String, required: true }
    },
    {
        timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
    }
)

//create a modal or collection
const Service = new model('Service', ServiceSchema)

module.exports = Service
