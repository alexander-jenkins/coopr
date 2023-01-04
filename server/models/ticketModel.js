const model = require('../server').mongo_model;
const schema = require('../schemas/ticketSchema');

module.exports = model('Ticket', schema);
