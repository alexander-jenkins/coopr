const model = require('../server').mongo_model;
const schema = require('../schemas/projectSchema');

module.exports = model('Project', schema);
