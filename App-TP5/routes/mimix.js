const express = require('express');
// Lodash utils library
const _ = require('lodash');

const router = express.Router();

// Create RAW data array
let film = [{
  id: "0",
  movie: "Arthur et les minimoys",
  yearOfRelease: 2005,
  duration: 115, 
  actors: ["Arthur", "Johny deep"],
  poster: "https://images.affiches-et-posters.com//albums/3/3138/3138-poster-film-animation-arthur-et-les-minimoys.jpg", // lien vers une image d'affiche,
  boxOffice: 500000 ,
  rottenTomatoesScore: 9,
}];


/* GET filù listing. */
router.get('/', (req, res) => {
  // Get List of film and return JSON
  res.status(200).json({ films });
});

/* GET one film */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find film in DB
  const film = .find(films, ["id", id]);
  // Return film
  res.status(200).json({
    message: 'Film found!',
    film
  });
});

/* PUT new film. */
router.put('/', (req, res) => {
  // Get the data from request from request
  const { film } = req.body;
  // Create new unique id
  const id = _.uniqueId();
  // Insert it in array (normaly with connect the data with the database)
  films.push({ film, id });
  // Return message
  res.json({
    message: `Just added ${id}`,
    film: { film, id }
  });
});

/* DELETE film. */
router.delete('/:id', (req, res) => {
  // Get the :id of the film we want to delete from the params of the request
  const { id } = req.params;

  // Remove from "DB"
  _.remove(films, ["id", id]);

  // Return message
  res.json({
    message: `Just removed ${id}`
  });
});

/* UPDATE film. */
router.post('/:id', (req, res) => {
  // Get the :id of the film we want to update from the params of the request
  const { id } = req.params;
  // Get the new data of the film we want to update from the body of the request
  const { film } = req.body;
  // Find in DB
  const filmToUpdate = _.find(films, ["id", id]);
  // Update data with new data (js is by address)
  filmToUpdate.film = film;

  // Return message
  res.json({
    message: `Just updated ${id} with ${film}`
  });
});

module.exports = router;
