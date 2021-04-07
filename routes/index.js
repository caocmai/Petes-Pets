const Pet = require("../models/pet");

module.exports = (app) => {
  /* GET home page. just on first page*/
  // app.get('/', (req, res) => {
  //   Pet.paginate().then((results) => {
  //     res.render('pets-index', { pets: results.docs });
  //   });
  // });

  /* GET home page.  with pagination*/
  app.get("/", (req, res) => {
    const page = req.query.page || 1;

    Pet.paginate({}, { page: page }).then((results) => {
      // res.render('pets-index', { pets: results.docs });    // works manually going to each url ie http://localhost:3000/?page=2
      res.render("pets-index", {
        pets: results.docs,
        pagesCount: results.pages,
        currentPage: page,
      }); // moves to each page automatically
    });
  });

  // GET home page with pagination return JSON if request is JSON for API
  // app.get('/', (req, res) => {
  //   const page = req.query.page || 1

  //   Pet.paginate({}, { page: page }).then((results) => {
  //     // If the request is JSON, we want to send a JSON response
  //     if (req.header('Content-Type') == 'application/json') {
  //       return res.json({ pets: results.docs, pagesCount: results.pages, currentPage: page });
  //     // Otherwise we do what we did before
  //     } else {
  //       res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
  //     }
  //   });
  // });

};
