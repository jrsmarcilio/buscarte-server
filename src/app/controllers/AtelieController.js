import Atelie from "../models/Atelie";
import Artista from "../models/Artista";
import Artista_foto_atelie from "../models/Artista_foto_atelie";
import Foto_atelie from "../models/Foto_atelie";

class AtelieController {
  async index(req, res) {
    const atelies = await Atelie.findAll({
      include: {
        model: Artista_foto_atelie,
        include: {
          model: Foto_atelie,
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
    const atelies = await Atelie.findOne({
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

export default new AtelieController();
