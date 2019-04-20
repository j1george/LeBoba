const express = require('express');
const router = express.Router();
const DataStore = require('./DataStore');
const ds = new DataStore();
// const {Items} = require('../data_templates');

//Get All Orders
router.get('/', (req, res) => {
  res.json(ds.getAll());
});

//Get Order
router.get('/:id', (req, res) => {
    res.json(ds.get(req.params.id));
});

//Remove Order
router.delete('/:id', (req, res) => {
    ds.remove(req.params.id);

    res.send('done');
});

//Create
router.post('/', (req, res) => {
    ds.add(req.body);

    res.send('done');
});

module.exports = router;