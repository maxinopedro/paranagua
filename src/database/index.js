const { Sequelize } = require("sequelize");

const databaseConfig = require("../config/database.js");

const {Cadastro} = require('../models/Cadastro.js')

/* const Cadastro = require("../models/Cadastro"); */

const models =[Cadastro]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.model))