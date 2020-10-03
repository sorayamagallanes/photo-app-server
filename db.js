const Sequelize = require('sequelize');
const sequelize = new Sequelize('PA-server', 
'postgres', 'sapphoTlou2', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to database :)')
    },
    function(err) {
        console.log(err);
    }
);
module.exports = sequelize;