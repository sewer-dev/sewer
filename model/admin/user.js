var mysql = require('mysql');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'hotel'
// });
//
// connection.connect();


var login = () => {
  "use strict";
  console.log("login---------------")
  // connection.query("", (err, res) => {
  //   if (err) {
  //     console.log('[user login db error] - ', err.message);
  //     return;
  //   }
  //   console.log(res);
  //   res.send(res);
  // });
}

var add = () => {
  "use strict";
  console.log("add---------------")
  //   connection.query("", [], (err, res) => {
  //     if (err) {
  //       console.log('[user add db error] - ', err.message);
  //       return;
  //     }
  //   });
}

module.exports = {
  login,
  add
}



