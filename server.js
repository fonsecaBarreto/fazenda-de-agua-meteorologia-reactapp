const express = require("express");
const cors = require("cors")
const path = require('path');
const app = express();

app.use(cors())
const PORT = process.env.PORT || 8080

/* const API_URL =`127.0.0.1:${process.env.API_PORT || 9000 }` */

app.use('/', express.static(path.join(__dirname,'build')))

app.get('/*', function (req, res) {
     res.sendFile(path.join(__dirname,'build','index.html'));
}); 
   

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}!`)
);

