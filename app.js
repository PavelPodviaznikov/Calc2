var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {
	res.send("hello");
})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})
function calculator(x, y, oper){
	if(oper==="plus")
	{
		return x + y;
	}
	else if(oper==="minus"){
		return x-y;
	}
	else if(oper==="multiply"){
		return x*y;
	}
	else if(oper==="divide"){
		return x/y;
	}
}