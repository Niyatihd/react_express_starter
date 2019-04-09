const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @description GET All Items
// @access Public (coz we do not auth incorporated yet, so everything is public)
//if this was in ServiceWorkerRegistration.js File, app.get('/api/items')
router.get('/', (req, res) => { 
  Item.find()
  .sort({ date: -1 })
  .then(items => res.json(items));
}); 

module.exports = router;