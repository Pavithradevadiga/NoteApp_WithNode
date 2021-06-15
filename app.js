const namee = require('./util.js');
const chalk = require('chalk');
const yargs = require('yargs');
const { boolean } = require('yargs');
const notesUtility = require('./notes.js');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title :{
            describe: 'A title',
            demandOption: true,
            type: 'string'
        },
        body :{
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtility.addNotes(argv.title,argv.body);
    }
})


yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder:{
        title :{
            describe: 'A title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notesUtility.removeNotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    builder:{
        title :{
            describe: 'A title',
            demandOption: false,
            type: 'string'
        }
    },
    handler(){
        notesUtility.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'Reading the notes',
    builder:{
        verifyNotARobot:{
            describle: 'To verify not a robot',
            demandOption: false,
            type: boolean
        }
    },
    handler(argv){
        notesUtility.readNotes(argv.title);
    }
})



console.log(yargs.argv)


