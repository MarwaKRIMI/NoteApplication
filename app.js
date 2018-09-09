const yargs = require('yargs')
const notes = require('./notes.js') 

const argv=yargs
.command('add','adding new note',{
	title:{
		describe:'title of note',
		demand:true,
		alias:'t'    
	},
	body:{
		describe:'body of note',
		demand:true,
		alias:'b'    
	}
}).command('list','listing note')
.command('remove','removing note',{
	title:{
		describe:'title of note',
		demand:true,
		alias:'t'    
	}
})
.command('read','reading',{
		title:{
		describe:'title of note',
		demand:true,
		alias:'t'    
	}
})
.help()
.argv


const command = argv._[0]
if(command=='add'){
	notes.addNotes(argv.title,argv.body)
}else if(command=='list'){
	notes.listNotes()
}else if(command=='read'){
	notes.readNotes(argv.title)
}else if(command=='remove'){
	notes.removeNotes(argv.title)
}else{
	console.log('command not recognized')
}