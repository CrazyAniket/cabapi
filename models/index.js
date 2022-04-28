
const dbConfig          = require("../config/db.config");
const Sequelize         = require("sequelize");
    
const database = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  //operatorsAliases: false,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;

db.databaseConf = database;
// function to drop existing tables and re-sync database
db.dropRestApiTable = () => {
  db.databaseConf.sync({ force: true }).then(() => {
    console.log("restTutorial table just dropped and db re-synced.");
  });
};
db.posts = require("./Sequelize.model")(database, Sequelize);

db.carcapacity = require("./Carcapacity.model")(database, Sequelize);
db.carcolor = require("./Carcolor.model")(database, Sequelize);
db.cardetails = require("./Cardetails.model")(database, Sequelize);
db.carmanufacture = require("./Carmanufacture.model")(database, Sequelize);
db.carmodel = require("./Carmodel.model")(database, Sequelize);
db.cartype = require("./Cartype.model")(database, Sequelize);
db.city = require("./City.model")(database, Sequelize);
db.country = require("./Country.model")(database, Sequelize);
db.driver = require("./Driver.model")(database, Sequelize);
db.hrmanage = require("./Hrmanage.model")(database, Sequelize);
db.state = require("./State.model")(database, Sequelize);

db.documents = require("./Documents.model")(database, Sequelize);

db.user = require("./User.model")(database, Sequelize);
db.userrole = require("./Userrole.model")(database, Sequelize);
db.admin = require("./Admindetails.model")(database, Sequelize);
db.assignhr = require("./Assignhr.model")(database, Sequelize);

module.exports = db;
