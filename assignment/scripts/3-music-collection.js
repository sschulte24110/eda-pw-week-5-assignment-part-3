console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
let myCollection = [];

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

// Will not show all albums by specific artist and says artists that are in collection are not.
let albumArray = [];
function findByArtist(collection, artist) {
  for (let x = 0; x < collection.length; x++){
    if (artist === collection[x].artist) {
      albumArray.push(collection[x]);
      return albumArray;
    } else {
      return `${artist} not in collection`;
    }
  }
}


console.log(addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991));
console.log(addToCollection(myCollection, 'Ten', 'Pearl Jam', 1991));
console.log(addToCollection(myCollection, 'The Chronic', 'Dr. Dre', 1992));
console.log(addToCollection(myCollection, 'Ready to Die', 'The Notorious B.I.G.', 1994));
console.log(addToCollection(myCollection, 'Achtung Baby', 'U2', 1991));
console.log(addToCollection(myCollection, 'Ok Computer', 'Radiohead', 1997));
console.log(addToCollection(myCollection, 'In Utero', 'Nirvana', 1993));

console.log(myCollection);

showCollection(myCollection);
console.log(findByArtist(myCollection, 'Nirvana'));
console.log(findByArtist(myCollection, 'U2'));







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
