const sequelize = require("../db");


module.exports = (sequelize, DataTypes) => {
    const imageUpload = sequelize.define('upload', {
        imageName: {
            type: DataTypes.STRING,
            required: true
        },
       password: {
           type: DataTypes.STRING,
           allowNull: false
       }
    })
    return User;
}