const fs = require('fs')

const _=require('lodash')

//adding new note to list
const addNotes=(title,body)=>{
    let notes=[]
    let note={
    	title,
    	body
    }

     try{
     	let noteStr = fs.readFileSync('notes.json')
    	notes=JSON.parse(noteStr)
     }catch(e){}
    
    let filtredNotes = notes.filter(note=>note.title===title)
    if(filtredNotes.length==0){
    	notes.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}else{
	console.log('note exist')
}
    
}
//listing existing notes
const listNotes=()=>{

            let noteList=JSON.parse(fs.readFileSync("notes.json"))
            console.log(`Printing `+noteList.length+` note(s)`)
            for(let i=0;i<noteList.length;i++)
            {
            console.log("--")
          console.log("Title:",noteList[i].title)
          console.log("Body:",noteList[i].body)
            }
}

//removing existing note
const removeNotes=(title)=>{


    let noteStr = fs.readFileSync('notes.json')
    let notes=JSON.parse(noteStr)
let index=_.findIndex(notes, function(found) { return found.title == title; });

if(index==-1)
{console.log("note not found")}
else{
let listfiltred=notes.filter(el=>{return el.title!=title})

console.log("note was removed")
 let data=JSON.stringify(listfiltred)
  fs.writeFileSync("note.json",data)
console.log(listfiltred)
}



}
//reading existing note
const readNotes=(title)=>{
    let noteStr = fs.readFileSync('notes.json')
      notes=JSON.parse(noteStr)
let index=_.findIndex(notes, function(found) { return found.title == title; });

if(index==-1)
{console.log("note not found")}
else{
console.log("note found")
console.log({title})
}

}


module.exports ={
	addNotes,
	listNotes,
	removeNotes,
	readNotes


}


