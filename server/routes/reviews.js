const express = require('express');
const axios = require('axios');
let router = express.Router();

const url = require('../atelier_api.js');
const {TOKEN} = require('../../config.js');

// .route adds onto the path that is stated in app.js
// this whole file uses this base path '/reviews'

// GET /reviews
// POST /reviews
// this is actually http://localhost:3000/reviews
router
  .route('/:id') // expecting the text after / to be a param named id
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/reviews?product_id=${req.params.id}&${req.url.split('?')[1]}`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  })
  .post((req, res) => { // using router, you can chain your requests!
    // ...
  })

// The .route can be whatever you want to name it! I just put /meta as an example
// this is equivalent to http://localhost:3000/reviews/meta
router
  .route('/:id/meta')
  .get((req, res) => {
    axios({
      method: 'get',
      url: `${url}/reviews`,
      headers: {
        'Authorization': `${TOKEN}`
      }
    })
    .then(response => {
      // ...
    })
  })

// ... add the rest

module.exports = router;