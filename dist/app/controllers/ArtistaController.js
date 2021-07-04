"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Artista = require('../models/Artista'); var _Artista2 = _interopRequireDefault(_Artista);
var _Categoria = require('../models/Categoria'); var _Categoria2 = _interopRequireDefault(_Categoria);
var _Artista_categoria = require('../models/Artista_categoria'); var _Artista_categoria2 = _interopRequireDefault(_Artista_categoria);

class ArtistaController {
  async index(req, res) {
    const artistas = await _Artista2.default.findAll({
      include: {
        model: _Artista_categoria2.default,
        attributes: ["fk_categoria_id_categoria", "fk_artista_id_artista"],
        include: {
          model: _Categoria2.default,
          attributes: ["titulo", "id_categoria"],
        },
      },
    });

    if (!artistas) {
      return res.status(401).json({
        error: `Nenhum artista encontrado`,
      });
    }

    return res.status(200).json(artistas);
  }

  async show(req, res) {
    const artista = await _Artista2.default.findOne({
      where: {
        id_artista: req.params.id,
      },
      include: {
        model: _Artista_categoria2.default,
        attributes: ["fk_categoria_id_categoria", "fk_artista_id_artista"],
        include: {
          model: _Categoria2.default,
          attributes: ["titulo", "id_categoria"],
        },
      },
    });

    if (!artista) {
      return res.status(401).json({
        error: `Nenhum artista encontrado`,
      });
    }

    return res.status(200).json(artista);
  }
}

exports. default = new ArtistaController();
