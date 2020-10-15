const sequelize = require("../db");


module.exports = (sequelize, DataTypes) => {
    const upload = sequelize.define('upload', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        caption: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        author: {
            type: DataTypes.STRING
        },
        owner: {
            type: DataTypes.INTEGER
        }

    })



    return upload;
}
