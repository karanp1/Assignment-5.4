var array = [
{
"Employee1":{
	"name": "Karan Prasad",
	"age" : "28",
	"salary" : "10 Lakhs",
	"address" : {
		"city":"New Delhi",
		"state":"Delhi",
		"pincode": 110021}
		}
},

{
"Employee2":{
	"name": "Arjun Prasad",
	"age" : "56",
	"salary" : "20 Lakhs",
	"address" : {
		"city":"Gurgaon",
		"state":"Haryana",
		"pincode": 110002}
		}
},

{
"Employee3":{
	"name": "Krishna Prasad",
	"age" : "86",
	"salary" : "30 Lakhs",
	"address" : {
		"city":"Jamshedpur",
		"state":"Bihar",
		"pincode": 110045}
		}
}




]
var output = array[0].Employee1;
console.log(output.name +', '+output.age +', '+output.salary)
console.log(output.address.city +', '+output.address.state +', '+output.address.pincode)


