const express = require('express');

const ctrl = require('../../controllers/contacts');
const { validateBody, checkBody, checkBodyFavorites, isValidId, authenticate } = require('../../middlewares');
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', authenticate, ctrl.getAll);

router.get('/:id', authenticate, isValidId, ctrl.getById);

router.post('/', authenticate, checkBody, validateBody(schemas.addSchema), ctrl.add);

router.put('/:id', authenticate, isValidId, checkBody, validateBody(schemas.addSchema), ctrl.updateById);

router.patch('/:id/favorite', authenticate, isValidId, checkBodyFavorites, validateBody(schemas.updateFavoriteSchema), ctrl.updateFavorite);

router.delete('/:id', authenticate, isValidId, ctrl.deleteById);

module.exports = router;
