"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _ArtistaController = require('./app/controllers/ArtistaController'); var _ArtistaController2 = _interopRequireDefault(_ArtistaController);
var _AtelieController = require('./app/controllers/AtelieController'); var _AtelieController2 = _interopRequireDefault(_AtelieController);

const routes = new (0, _express.Router)();

routes.get("/artistas", _ArtistaController2.default.index);
routes.get("/artistas/:id", _ArtistaController2.default.show);

routes.get("/atelie", _AtelieController2.default.index);
routes.get("/atelie/:id", _AtelieController2.default.show);

exports. default = routes;
