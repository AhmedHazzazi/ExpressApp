const router = require('express').Router(),
PostController = require('../controllers/post');
router.get('/', PostController.index);
router.get('/:uid', PostController.show);
router.put('/:uid/update', PostController.update);
router.delete('/:uid/delete', PostController.delete);
router.post('/create', PostController.create);
module.exports = router;