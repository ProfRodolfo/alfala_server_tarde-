import { getLivros, getLivro } from '../controller/livroController.js';
import {Router} from 'express'

const router = Router(); 


router.get('/', getLivros)


router.get('/:id', getLivro)


router.post('/', (req, res) =>{
    res.send('Estou na rota post')
});


router.patch('/', (req, res) =>{
    res.send('Estou na rota patch')
});
// DELETE  - Apagar um livro
router.delete('/', (req, res) =>{
    res.send('Estou na rota delete')
});

export default router;
