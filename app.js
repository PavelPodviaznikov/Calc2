var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());

app.get('/', function (req, res) {
	var html = '<form action="/" method="post">'+
					'a: '+
					'<input type="text" name="a">'+
					'<br>'+
					'b: '+
					'<input type="text" name="b">'+
					'<br>'+
					'operator: '+
					'<input type="text" name="operator">'+
					'<br>'+
					'<button type="submit">Calculate</button>'+
				'</form>';
	res.send(html);
});
app.post('/', function (req, res) {
	var a = req.body.a;
	var b = req.body.b;
	var operator = req.body.operator;
	var html = '<form action="/" method="post">'+
					'a: '+
					'<input type="text" name="a">'+
					'<br>'+
					'b: '+
					'<input type="text" name="b">'+
					'<br>'+
					'operator: '+
					'<input type="text" name="operator">'+
					'<br>'+
					'<button type="submit">Calculate</button>'+
				'</form>'+
				'ANSWER = '+calculator(parseInt(a),parseInt(b),operator);
	res.send(html);
});

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