import { getLivros, getLivro, postLivro, patchLivro } from '../controller/livroController.js';
import {Router} from 'express'
const router = Router(); 

router.get('/', getLivros)
router.get('/:id', getLivro)
router.post("/", postLivro);
router.patch("/:id", patchLivro)

// DELETE  - Apagar um livro
router.delete('/', (req, res) =>{
    res.send('Estou na rota delete')
});

export default router;
