const express = require ('express');
const app = express();

app.use(express.static('file'));

const tryDatabase = {
  // 'syavira': {pass: 'vira123',job: 'student'},
  // 'upil': {pass: '123456', job: 'student'}
  'syavira' : ('logged in at : ' + Date()),
  'upil' : ('logged in at : '+ Date()),
  'tiara' : ('logged in at : '+ Date()),
  'aulia' : ('logged in at : '+ Date()),
  'dara' : ('logged in at : '+ Date())
};

app.get('/users', (req,res)=>{
	const allUsernames = Object.keys(tryDatabase);
	console.log('allUsernames is:', allUsernames);
	res.send(allUsernames);
});

app.get('/users/:userid', (req,res)=>{
  const nameToLookup = req.params.userid; 
  const val = tryDatabase[nameToLookup];
  console.log(nameToLookup, '->', val); 
  if (val) {
    res.send(val);
  } else {
    res.send('undefined user'); // failed, so return an empty object instead of undefined
  }
});


app.listen(8080,() =>{
	console.log('Server started at http://localhost:8080/');
});