const sqlite3 = require('sqlite3-offline');
const db = new sqlite3.Database('user.db');
db.serialize(() => {
  // create a new database table:
  db.run("CREATE TABLE user (id INT, name TEXT, pass TEXT, job TEXT)");

  // insert 3 rows of data:
  db.run("INSERT INTO user VALUES ('1','upil', '123456', 'student')");
  db.run("INSERT INTO user VALUES ('2','syavira', 'vira123','student')");
  db.run("INSERT INTO user VALUES ('3','tiara', '123123','bachelor')");
  db.run("INSERT INTO user VALUES ('4','aulia', 'aul123','bachelor')");
  db.run("INSERT INTO user VALUES ('5','dara','dara123','bachelor')");

  console.log('successfully created the user table in user.db');

  // print them out to confirm their contents:
  db.each("SELECT name FROM user", (err, row) => {
      console.log(`Received post data: ` + row.name);
  });
});

db.close();