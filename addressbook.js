(function () {

var contacts = {
{
"addressBook" : [
   {
	"name": "Sean Smevik",
	"email": "smsmev@gmail.com",
	},
	 {
	"name": "Xin Xin",
	"email": "xin@xin-squared.com",
	},
	 {
	"name": "David Levine",
	"email": "dmlevi@gmail.com",
	},
 	{
	"name": "Mel Choyce",
	"email": "melissachoye@gmail.com",
	},
 	{
	"name": "Mat Budelman",
	"email": "matbudelman@gmail.com",
	} 
	{
	"name": "Geordie Kaytes",
	"email": "geordie.kaytes@freshtilledsoil.com",
	} 
 	]
}

};

var searchForm = document.getElementById("search-form"),
	searchField = document.getElementById("q"),
	count = contacts.addressBook.length,
	target = document.getElementById("output")
	
var 	addr ={
	search : function (event) {	
	
	var searchValue = searchField.value,
	i;
	
	event.preventDefault();
	
	target.innerHTML = "";
	
	if(count > 0 && search value !== "") {
	
	for (i = 0; i < count; i = i + 1) {
		
		var obj = contacts.addressBook[i],
            isItFound = obj.name.indexOf(searchValue);
		
		if (isItFound !== -1) {
	
				target.innerHTML += '<p><a href="mailto:' + obj.email + ' ">' + obj.email +'</a></p>';
            }
        }
    }
},

searchField.addEventListener("keyup", addr.search, false);
  
})();
