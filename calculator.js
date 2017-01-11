var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var answer = []

app.get("/:operator/:number/:secondNumber", function(request, response) {
	var operator = request.params.operator;
  	var numOne = parseInt(request.params.number);
	var numTwo  = parseInt(request.params.secondNumber);
	var result;

  switch(operator) {
  	case "add":
		result = numOne + numTwo;
		response.json(result)
	break;
	 case "subtract":
		result = numOne - numTwo;
		response.json(result)
	break;
	 case "multiply":
		result = numOne * numTwo;
		response.json(result)
	break;
	case "divide":
		result = numOne / numTwo;
		response.json(result)
	break;
  }
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

