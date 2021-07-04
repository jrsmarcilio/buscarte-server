"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Atelie = require('../models/Atelie'); var _Atelie2 = _interopRequireDefault(_Atelie);
var _Artista = require('../models/Artista'); var _Artista2 = _interopRequireDefault(_Artista);
var _Artista_foto_atelie = require('../models/Artista_foto_atelie'); var _Artista_foto_atelie2 = _interopRequireDefault(_Artista_foto_atelie);
var _Foto_atelie = require('../models/Foto_atelie'); var _Foto_atelie2 = _interopRequireDefault(_Foto_atelie);

class AtelieController {
  async index(req, res) {
    const atelies = await _Atelie2.default.findAll({
      include: {
        model: _Artista_foto_atelie2.default,
        include: {
          model: _Foto_atelie2.default,
        },
      },
    });

    if (!atelies) {
      return res.status(401).json({
        error: `Nenhum ateliê encontrado`,
      });
    }

    return res.status(200).json(atelies);
  }

  async show(req, res) {
    const atelies = await _Artista2.default.findOne({
      where: {
        id_atelie: req.params.id,
      },
    });

    if (!atelies) {
      return res.status(401).json({
        error: `Nenhum artista encontrado`,
      });
    }

    return res.status(200).json(atelies);
  }
}

exports. default = new AtelieController();
