const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const imageModel = sequelize.define('imageModel', {
        cloudinary_id: {
            type: DataTypes.STRING,
            // allowNull: false,
            // unique: true
        },
       image_url: {
           type: DataTypes.STRING,
        //    allowNull: false
       }
    })
    return imageModel;
}