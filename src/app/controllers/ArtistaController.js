import Artista from "../models/Artista";
import Categoria from "../models/Categoria";
import Artista_categoria from "../models/Artista_categoria";

class ArtistaController {
  async index(req, res) {
    const artistas = await Artista.findAll({
      attributes: ["id_artista", "nome", "nome_artistico", "instagram"],
      include: {
        model: Artista_categoria,
        attributes: ["fk_categoria_id_categoria", "fk_artista_id_artista"],
        include: {
          model: Categoria,
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
    const artista = await Artista.findOne({
      where: {
        id_artista: req.params.id,
      },
      include: {
        model: Artista_categoria,
        attributes: ["fk_categoria_id_categoria", "fk_artista_id_artista"],
        include: {
          model: Categoria,
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

export default new ArtistaController();
