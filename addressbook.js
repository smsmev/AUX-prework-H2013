(function () {

var contacts = {
    
        "addressBook": [
        {
            "name": "Kristy Stetson",
            "email": "kristy@freshtilledsoil.com"
        },
        {
            "name": "Alex Sylvia",
            "email": "alex@freshtilledsoil.com"
        },
        {
            "name": "Alec Harrison",
            "email": "alec@freshtilledsoil.com"
        },
        {
            "name": "Steve Hickey",
            "email": "steve@freshtilledsoil.com"
        },
        {
            "name": "Mark Grambau",
            "email": "mark@freshtilledsoil.com"
        },
        {
            "name": "Neal Corbett",
            "email": "neal@freshtilledsoil.com"
        },
        {
            "name": "Jonathan Barker",
            "email": "jonathan@freshtilledsoil.com"
        },
        {
            "name": "Tim Wright",
            "email": "tim@freshtilledsoil.com"
        },
        {
            "name": "Sarah Canieso",
            "email": "sarah@freshtilledsoil.com"
        },
        {
            "name": "Jinyoung Chang",
            "email": "jinyoung@freshtilledsoil.com"
        },
        {
            "name": "Dave Romero",
            "email": "dave@freshtilledsoil.com"
        },
        {
            "name": "Paul Greenlea",
            "email": "paul@freshtilledsoil.com"
        },
        {
            "name": "Steve Benoit",
            "email": "steve@freshtilledsoil.com"
        },
        {
            "name": "Michael Connors",
            "email": "michael@freshtilledsoil.com"
        },
        {
            "name": "Geordie Kaytes",
            "email": "geordie@freshtilledsoil.com"
        },
        {
            "name": "Richard Banfield",
            "email": "richard@freshtilledsoil.com"
        },
        {
            "name": "Alex Fedorov",
            "email": "alex@freshtilledsoil.com"
        },
        {
            "name": "Dan Allard",
            "email": "dan@freshtilledsoil.com"
        },
        {
            "name": "Kelly Powell",
            "email": "kelly@freshtilledsoil.com"
        },
        {
            "name": "Mike Banfield",
            "email": "mike@freshtilledsoil.com"
        },
        {
            "name": "Tim Lupo",
            "email": "tim@freshtilledsoil.com"
        },
        {
            "name": "Michele Hartog",
            "email": "michele@freshtilledsoil.com"
        },
        {
            "name": "Michael Perrone",
            "email": "michael@freshtilledsoil.com"
        },
        {
            "name": "Alex Stetson",
            "email": "alex@freshtilledsoil.com"
        },
        {
            "name": "Gary Ambrosino",
            "email": "gary@freshtilledsoil.com"
        },
        {
            "name": "Jason Henrichs",
            "email": "jason@freshtilledsoil.com"
        },
        {
            "name": "Kitt Williams",
            "email": "kitt@freshtilledsoil.com"
        }
        ]
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

	if(count > 0 && searchValue !== "") {

	for (i = 0; i < count; i = i + 1) {

		var obj = contacts.addressBook[i],
            isItFound = obj.name.indexOf(searchValue);

		if (isItFound !== -1) {

				target.innerHTML += '<p><a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>';
            }
        }
    }
},

        getAllContacts: function() {

            var i;

            target.innerHTML = "";

            if (count > 0) {

                for (i = 0; i < count; i = i + 1) {

                    var obj = contacts.addressBook[i];

                    target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a><p>';
                    
                }
            }
        },
    
    //--------------
        setActiveSection : function(){
            
            this.parentNode.setAttribute("class", "active");
        },
    
        removeActiveSection : function(){
            
            this.parentNode.removeAttribute("class");
        },
          
        addHoverClass : function(){
            
            searchForm.setAttribute("class", "hovering");
        },
        
        removeHoverClass : function(){
            
            searchForm.removeAttribute("class");
        },    
    
    //--------------
    };

    searchField.addEventListener("keyup", addr.search, false);

})();
