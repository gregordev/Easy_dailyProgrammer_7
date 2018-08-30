/*
  Name: The Reading List
  Inspiration: 
  https://www.teaching-materials.org/javascript/exercises/objects
*/
'use strict';

let books = [
  {
    title: 'Harry Potter and the Order of Phoenix',
    author: 'J.K. Rowling',
    alreadyRead: 1
  },
  {
    title: 'Moon above Moscow',
    author: 'Alexey Sudorov',
    alreadyRead: 0
  },
  {
    title: 'Emotional Intelligence',
    author: 'Daniel Goleman',
    alreadyRead: 1
  }
];

function showInfo() {
  console.log(`${this.title} ${this.author}`);
}

books.forEach(function(x) {
  if(x.alreadyRead === 1) {
    console.log(`You already read: "${x.title}" from ${x.author}`);
  }
  else {
    console.log(`You still need to read: "${x.title}" from ${x.author}`);
  }
});