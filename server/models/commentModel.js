const model = require('../server').mongo_model;
const schema = require('../schemas/commentSchema');

module.exports = model('Comment', schema);
