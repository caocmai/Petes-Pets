const Pet = require('../models/pet');

module.exports = (app) => {

/* GET home page. just on first page*/ 
// app.get('/', (req, res) => {
//   Pet.paginate().then((results) => {
//     res.render('pets-index', { pets: results.docs });    
//   });
// });

/* GET home page. */
app.get('/', (req, res) => {
  const page = req.query.page || 1

  Pet.paginate({}, {page: page}).then((results) => {
    // res.render('pets-index', { pets: results.docs });    // works manually going to each url ie http://localhost:3000/?page=2 
    res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page }); // moves to each page automatically

  });
});

// SEARCH PET
app.get('/search', (req, res) => {
  term = new RegExp(req.query.term, 'i')

  Pet.find({$or:[
    {'name': term},
    {'species': term}
  ]}).exec((err, pets) => {
    res.render('pets-index', { pets: pets });
  })
});

}


