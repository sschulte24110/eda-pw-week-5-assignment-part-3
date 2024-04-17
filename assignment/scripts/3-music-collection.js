console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    collection,
    title,
    artist,
    yearPublished};
  collection.push(record);
  return record;
}

function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
}


function findByArtist(collection, artist) {
  let artistArray = [];
  for (let i = 0; i < collection.length; i++){
    if (collection[i].artist === artist) {
      artistArray.push(collection[i])
    } 
  }  
  console.log('Find by Artist:', artistArray);
  return artistArray;
}

//Using .filter and .some
// function findByArtist(collection, artist) {
//   return collection.filter(function(record) {
//     return Object.keys(record).some(function(key) {
//       return record[key] === artist;
//     })
//   });
// }
// function findByArtist(collection, artist) {
//   return collection.filter((album) => album.artist === artist);
// }

// Using arrow functions
// function findByArtist(collection, artist) {
//   return collection.filter(record => Object.keys(record).some(key => record[key] === artist));
// }

// Stretch Goal

// let albumArray = [];
// let searchCriteria = { artist: 'Ray Charles', yearPublished: 1957 }
// function search(collection, searchCriteria) {
//   for (let i = 0; i < collection.length; i++) {
//     for(key in collection[i]) {
//       if (collection[i][key].indexOf(toSearch)!== -1) {
//         results.push(collection[i]);
//       }
//     }
//   }
// }

// function search(collection, searchCriteria) {
//   return collection.filter(searchCriteria
//     ? a => a[searchCriteria] === value 
//     : a => Object.keys(a).some(k => a[k] === value)
//   );
// }


console.log(addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991));
console.log(addToCollection(myCollection, 'Ten', 'Pearl Jam', 1991));
console.log(addToCollection(myCollection, 'The Chronic', 'Dr. Dre', 1992));
console.log(addToCollection(myCollection, 'Ready to Die', 'The Notorious B.I.G.', 1994));
console.log(addToCollection(myCollection, 'Achtung Baby', 'U2', 1991));
console.log(addToCollection(myCollection, 'Ok Computer', 'Radiohead', 1997));
console.log(addToCollection(myCollection, 'In Utero', 'Nirvana', 1993));

console.log(myCollection);

// showCollection(myCollection);
console.log(findByArtist(myCollection, 'Nirvana'));
console.log(findByArtist(myCollection, 'U2')?.length > 0 ? 'found': 'Artist not found');
console.log(findByArtist(myCollection, 'Tom Petty')?.length > 0 ? 'found': 'Artist not found');

// console.log(search(myCollection, searchCriteria));






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
