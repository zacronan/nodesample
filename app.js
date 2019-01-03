console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js').default;

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ', command);
console.log('Process: ', process.argv);
console.log('yargs', argv);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note was not removed';
    console.log(message);
} else {
    console.log('Command not recognized');
}

// console.log('Result:', notes.add(9, -2));