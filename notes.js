const fs = require('fs'); //important required modules

debugger

const getNotes =  () => {   //getNotes  
    return "Your notes"
}

const listNotes = () => { //listNotes
    const notes  = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
 }




 const readNotes = (title,body) => { //readNotes
    const notes  = loadNotes() 

    //const titleExists = notes.find((note) => note.title === title)
    const Note = notes.find((note) => note.title === title)


    if(!Note){  
        console.log('Title doesn\'t exists')
    }else{
        //notes.map(item =>{   //Iterate through each element verify the title remve it if exists and save notes
            //if(item.title == title){
                //console.log(`${title},${item.body}`)
           // }
       // }
        //)
        console.log(Note.title,Note.body)
    }
 }









const removeNotes = (title,body) => { //addNotes
    var titleExists = false    //to keep track if titleExists 
    const notes  = loadNotes() 
    var i = 0


    notes.map(item =>{   //Iterate through each element verify the title remve it if exists and save notes
        i++
        if(item.title == title){
            notes.splice(i-1,1)
            saveNotes(notes);
            console.log(`${title}Note has been removed`)
            titleExists = true
        }
    })

    if(!titleExists){  
        console.log('Title doesn\'t exists')
    }
 }



const addNotes = function(title,body){   //addNotes
    const notes  = loadNotes()
    

    const duplicate = notes.find((note) => note.title === title)
   
    if(!duplicate){ //If no duplicates then element is pushed
    notes.push({
        title: title,
        body: body
    })
    console.log('Note has been added')
    saveNotes(notes);
   }else
   {
    console.log('Title already exists')
   }

 }

 const saveNotes = (notes) => { //saveNotes    //Notes is written into Json file
     fs.writeFileSync('notes.json',JSON.stringify(notes))
 }
 

const loadNotes = () => { //loadNotes
    try{
        const dataBuffer = fs.readFileSync('notes.json');  //loads notes from notes.json
        const data = dataBuffer.toString();
        return JSON.parse(data);
    }
    catch(exception){
      return [];
    }
}


module.exports = { //modules are exported
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes : listNotes,
    readNotes : readNotes
}