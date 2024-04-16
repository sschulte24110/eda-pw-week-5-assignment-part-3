console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];

//Not passing test
function addToCollection(collection, title, artist, yearPublished) {
  let scottsCollection = {
    title,
    artist,
    yearPublished};
  myCollection.push(scottsCollection);
  return scottsCollection;
}

addToCollection('Nevermind', 'Nirvana', 1991);
addToCollection('compact disc', 'Ten', 'Pearl Jam', 1991);
addToCollection('cassette', 'The Chronic', 'Dr. Dre', 1992);
addToCollection('compact disc', 'Ready to Die', 'The Notorious B.I.G.', 1994);
addToCollection('record', 'Achtung Baby', 'U2', 1991);
addToCollection('cassette', 'Ok Computer', 'Radiohead', 1997);

console.log(myCollection);







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
