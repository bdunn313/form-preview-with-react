var exports = {};

exports.ifExists = function (value, fallback=undefined){
    return value ? value : fallback;
};

module.exports = exports;