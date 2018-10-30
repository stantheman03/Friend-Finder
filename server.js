var express = require('express');
var path = require('path');
var PORT= process.env.PORT || 8000;

app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)





app.listen(PORT,function(){
    console.log('Server is connected')
})