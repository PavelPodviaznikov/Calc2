var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());
/*app.get('/', function(request, response) {
  var html = "<a href='/calc1'>Calc1</a>"+
  			 "<br>"+
  			 "<a href='/calc2'>Calc2</a>";
  response.send(html);
});*/


app.get('/calc1', function(request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var operator=request.param('operator');
  var answer = "Answer is "+calculator(a,b,operator);
  var html = "<p>"+answer+"</p>"+
  			 "<br>"+	 
  			 "<a href='/'>Main</a>";

  response.send(html);
});
app.get('/calc2', function (request, response) {
	var a=parseInt(request.param('a'));
	var b=parseInt(request.param('b'));
	var operator=request.param('operator');
	var answer = "Answer is "+calculator(a,b,operator);
	var html = '<form action="/calc2" method="get">'+
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
				'<p>'+answer+'</p>'+
				 "<a href='/'>Main</a>";
	response.send(html);
});
app.get('/calc3.html', function (request, response) {
	response.send("calc3.html");
});
app.get('/calc4', function (request, response) {
	var html = '<a href="/calc4/divide">Divide</a>'+
				'<br>'+
				'<a href="/calc4/multiply">Multiply</a>'+
				'<br>'+
				'<a href="/calc4/add">Add</a>'+
				'<br>'+
				'<a href="/calc4/sub">Sub</a>'+
				'<br>'+
				'<a href="/calc4/mod">Mod</a>';
	response.send(html);
});

app.get('/calc4/divide', function (request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var answer = "Answer is "+(a/b);
  var html = "<p>"+answer+"</p>";
  response.send(html);
});
app.get('/calc4/multiply', function (request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var answer = "Answer is "+(a*b);
  var html = "<p>"+answer+"</p>";
  response.send(html);
});
app.get('/calc4/add', function (request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var answer = "Answer is "+(a+b);
  var html = "<p>"+answer+"</p>";
  response.send(html);
});
app.get('/calc4/sub', function (request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var answer = "Answer is "+(a-b);
  var html = "<p>"+answer+"</p>";
  response.send(html);
});
app.get('/calc4/mod', function (request, response) {
  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var answer = "Answer is "+(a%b);
  var html = "<p>"+answer+"</p>";
  response.send(html);
});

app.get('/answer', function (request, response) {

  var a=parseInt(request.param('a'));
  var b=parseInt(request.param('b'));
  var operator=request.param('operator');
  var answer = "Answer is "+calculator(a,b,operator);
  var html = "<p>"+answer+"</p>";
  response.send(html);
	
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
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
	else if(oper==="modulo"){
		return x%y;
	}
}
