console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
const myCollection = [];

const nevermindTracks = [
  {number: 1, name: 'Smells Like Teen Spirit', duration: '5:01'},
  {number: 2, name: 'In Bloom', duration: '4:14'},
  {number: 3, name: 'Come as You Are', duration: '3:39'},
  {number: 4, name: 'Breed', duration: '3:03'},
  {number: 5, name: 'Lithium', duration: '4:17'},
  {number: 6, name: 'Polly', duration: '2:57'},
  {number: 7, name: 'Territorial Pissings', duration: '2:22'},
  {number: 8, name: 'Drain You', duration: '3:43'},
  {number: 9, name: 'Lounge Act', duration: '2:36'},
  {number: 10, name: 'Stay Away', duration: '3:32'},
  {number: 11, name: 'On a Plain', duration: '3:16'},
  {number: 12, name: 'Something in the Way', duration: '3:52'},
  {number: 13, name: 'Endless, Nameless', duration: '6:43'}
];

const tenTracks = [
  {number: 1, name: 'Once', duration: '3:52'},
  {number: 2, name: 'Even Flow', duration: '4:54'},
  {number: 3, name: 'Alive', duration: '5:41'},
  {number: 4, name: 'Why Go', duration: '3:20'},
  {number: 5, name: 'Black', duration: '5:44'},
  {number: 6, name: 'Jeremy', duration: '5:19'},
  {number: 7, name: 'Oceans', duration: '2:42'},
  {number: 8, name: 'Porch', duration: '3:31'},
  {number: 9, name: 'Garden', duration: '4:59'},
  {number: 10, name: 'Deep', duration: '4:18'},
  {number: 11, name: 'Release', duration: '5:05'},
  {number: 12, name: 'I\'ve Got a Feeling', duration: '3:37'},
  {number: 13, name: 'Master/Slave', duration: '3:43'}
];

const odelayTracks = [
  {number: 1, name: 'Devil\'s Haircut', duration: '3:14'},
  {number: 2, name: 'Hotwax', duration: '3:49'},
  {number: 3, name: 'Lord Only Knows', duration: '4:15'},
  {number: 4, name: 'The New Pollution', duration: '3:40'},
  {number: 5, name: 'Derelict', duration: '4:13'},
  {number: 6, name: 'Novacane', duration: '4:37'},
  {number: 7, name: 'Jack-Ass', duration: '4:12'},
  {number: 8, name: 'Where It\'s At', duration: '5:30'},
  {number: 9, name: 'Minus', duration: '2:32'},
  {number: 10, name: 'Sissyneck', duration: '3:57'},
  {number: 11, name: 'Readymade', duration: '2:37'},
  {number: 12, name: 'High 5 (Rock The Catskills)', duration: '4:11'},
  {number: 13, name: 'Ramshackle', duration: '4:47'},
  {number: 14, name: 'Computer Rock', duration: '0:43'}
];

const brandNewManTracks = [
  {number: 1, name: 'Brand New Man', duration: '2:58'},
  {number: 2, name: 'My Next Broken Heart', duration: '2:55'},
  {number: 3, name: 'Cool Drink of Water', duration: '3:05'}, 
  {number: 4, name: 'Cheating On the Blues', duration: '2:51'},
  {number: 5, name: 'Neon Moon', duration: '4:21'},
  {number: 6, name: 'Lost and Found', duration: '3:48'},
  {number: 7, name: 'I\'ve Got a Lot to Learn', duration: '2:54'},
  {number: 8, name: 'Boot Scootin\' Boogie', duration: '3:17'},
  {number: 9, name: 'I\'m No Good', duration: '3:08'},
  {number: 10, name: 'Still in Love with You', duration: '3:35'},
];

const noFencesTracks = [
  {number: 1, name: 'The Thunder Rolls', duration: '3:44'},
  {number: 2, name: 'New Way to Fly', duration: '3:54'},
  {number: 3, name: 'Two of a Kind, Working on a Full House', duration: '2:33'}, 
  {number: 4, name: 'Victim of the Game', duration: '3:07'},
  {number: 5, name: 'Friends in Low Places', duration: '4:19'},
  {number: 6, name: 'Wild Horses', duration: '3:09'},
  {number: 7, name: 'Unanswered Prayers', duration: '3:25'},
  {number: 8, name: 'Same Old Story', duration: '2:53'},
  {number: 9, name: 'Mr. Blue', duration: '3:18'},
  {number: 10, name: 'Wolves', duration: '4:08'},
];

const freshHorsesTracks = [
  {number: 1, name: 'The Old Stuff', duration: '4:12'},
  {number: 2, name: 'Cowboys and Angels', duration: '3:17'},
  {number: 3, name: 'The Fever', duration: '2:39'}, 
  {number: 4, name: 'That Ol\' Wind', duration: '5:20'},
  {number: 5, name: 'Rollin\'', duration: '4:02'},
  {number: 6, name: 'The Change', duration: '4:07'},
  {number: 7, name: 'The Beaches of Cheyenne', duration: '4:13'},
  {number: 8, name: 'To Make You Feel My Love', duration: '3:56'},
  {number: 9, name: 'It\'s Midnight Cinderella', duration: '2:23'},
  {number: 10, name: 'She\'s Every Woman', duration: '2:55'},
  {number: 11, name: 'Ireland', duration: '4:56'},
];

// Add to Collection
function addToCollection(collection, title, artist, yearPublished) {
  const record = {
    collection,
    title,
    artist,
    yearPublished,
  };
  collection.push(record);
  return record;
}
// Extra Stretchy Add to Collection
// function addToCollection(collection, title, artist, yearPublished, tracks) {
//   const record = {
//     collection,
//     title,
//     artist,
//     yearPublished,
//     tracks};
//   collection.push(record);
//   return record;
// }

// Show Collection
function showCollection(collection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}`);
  }
}
// Extra Stretchy Show Collection ********Not displaying the track array correctly*******
// function showCollection(collection) {
//   for (let i = 0; i < collection.length; i++) {
//     console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublished}: ${collection[i].tracks}`);
//   }
// }

// Find By Artist
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

// Find By Artist using .filter and .some
// function findByArtist(collection, artist) {
//   return collection.filter(function(record) {
//     return Object.keys(record).some(function(key) {
//       return record[key] === artist;
//     })
//   });
// }

// Find by artist using an arrow functions and eliminating the use of .some
// function findByArtist(collection, artist) {
//   return collection.filter((record) => record.artist === artist);
// }

// Stretch Goal - Search Function
let searchCriteria = { artist: 'Garth Brooks', year: 1995 };
function search(collection, searchCriteria) {
  let albumArray = [];
  // Look in to finding how to add empty search object.
  if (!searchCriteria || Object.keys(searchCriteria).length === 0 || !searchCriteria.artist || !searchCriteria.year) {
    return collection;
  }
  for (let i = 0; i < collection.length; i++) {
      if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
        albumArray.push(collection[i]);
      } 
      
    }
    return albumArray;
  }
// Extra Stretchy - Search Function
//   let searchCriteria = { artist: 'Garth Brooks', year: 1995 };
// function search(collection, searchCriteria) {
//   let albumArray = [];
//   // Look in to finding how to add empty search object.
//   if (!searchCriteria || Object.keys(searchCriteria).length === 0 || !searchCriteria.artist || !searchCriteria.year) {
//     return collection;
//   }
//   for (let i = 0; i < collection.length; i++) {
//       if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.year) {
//         albumArray.push(collection[i]);
//       } 
      
//     }
//     return albumArray;
//   }

// function search(collection, searchCriteria) {
//   return collection.filter(searchCriteria
//     ? a => a[searchCriteria] === value 
//     : a => Object.keys(a).some(k => a[k] === value)
//   );
// }


// console.log(addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991, nevermindTracks));
// console.log(addToCollection(myCollection, 'Ten', 'Pearl Jam', 1991, tenTracks));
// console.log(addToCollection(myCollection, 'Odelay', 'Beck', 1992, odelayTracks));
// console.log(addToCollection(myCollection, 'Brand New Man', 'Brooks & Dunn', 1991, brandNewManTracks));
// console.log(addToCollection(myCollection, 'No Fences', 'Garth Brooks', 1990, noFencesTracks));
// console.log(addToCollection(myCollection, 'Fresh Horses', 'Garth Brooks', 1995, freshHorsesTracks);
// console.log(addToCollection(myCollection, 'Unknown', 'Ray Charles', 1957, unknownTracks));

addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991, nevermindTracks);
addToCollection(myCollection, 'Ten', 'Pearl Jam', 1991, tenTracks);
addToCollection(myCollection, 'Odelay', 'Beck', 1996, odelayTracks);
addToCollection(myCollection, 'Brand New Man', 'Brooks & Dunn', 1991, brandNewManTracks);
addToCollection(myCollection, 'No Fences', 'Garth Brooks', 1990, noFencesTracks);
addToCollection(myCollection, 'Fresh Horses', 'Garth Brooks', 1995, freshHorsesTracks);

console.log(myCollection);

// showCollection(myCollection);
// console.log(findByArtist(myCollection, 'Nirvana'));
// console.log(findByArtist(myCollection, 'Garth Brooks')?.length > 0 ? 'found': 'Artist not found');
// console.log(findByArtist(myCollection, 'Tom Petty')?.length > 0 ? 'found': 'Artist not found');

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
