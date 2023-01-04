// noinspection JSUnusedLocalSymbols

const path = require('path');

exports.endpoints = (req, res, next) => {
    let options = { root: path.join(__dirname, '../resources') };
    res.status(418).sendFile('teapot.png', options);
};
