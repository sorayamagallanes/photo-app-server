const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, 
 {
   
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to database');
    },
    function(err) {
        console.log(err);
    }
);

let Users = sequelize.import('./models/user');
let Uploads = sequelize.import('./models/upload');

Users.hasMany(Uploads, {
    foreignKey: "owner",
    constraints: true,
  });
  
  Uploads.belongsTo(Users, {
    foreignKey: "id",
    constraints: true,
  });

module.exports = sequelize;