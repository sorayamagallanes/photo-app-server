const sequelize = require("../db");

module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profile', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            
        },
       age: {
           type: DataTypes.INTEGER,
           allowNull: true
       },
       bio:{
           type: DataTypes.TEXT,
           allowNull: true
       }
    })
    return Profile;
}
