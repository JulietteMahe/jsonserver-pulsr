const artists = require("./data/artists");
const places = require("./data/places");
const labels = require("./data/labels");
const genres = require("./data/genres");

module.exports = {
  artists,
  places,
  labels,
  genres
}


// const artists = require("./data/artists");

// module.exports = () => {

//   var places = artists.map((i) => i.places);
//   places = [].concat.apply([], places);
//   places = [...new Set(places)];

 

//   var labels = artists.map((i) => i.manufacturer);
//   labels = [...new Set(labels)];

//   var itemTypes = artists.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     artists,
//     places,
//     labels,
//     itemTypes,
//   };
// };
