function getHTTPObject() {

    var xhr;
    
    if (window.xmlHttpRequest) {
        
        xhr = new XMLHttpRequest();
        
    } else if (window.ActiveXObject) {
        
        xhr = newActiveXObject("Msx,12.XMLHTTP");
        
    }

        return xhr;
}
//define ajax call
function ajaxCall(dataUrl, outputElement, callback) {
    
    var request = getHTTPObject();
    
    outputElement.innerHTML = "Loading...";
    
    request.onreadystatechange = function() {
        
        if (request.readyState === 4 && request.status === 200 ) {
            
            var contacts = JSON.parse(request.reponseText);
            
            if(typeof callback === "function"){
                
                callback(contacts);
                
            }
        }
    }
    
    request.open("GET", dataUrl, true);
    request.send(null);
}
    

(function(){
    
    var searchForm = document.getElementById("searchForm"),
        searchField = document.getElementById("q"),
        target = document.getElementById("output")

    var addr = {
	
        search : function (event) {	

        var output = document.getElementById("output")
    
//starting ajax call    
    ajaxCall('data/contacts.json', output, function (data) {
        
	var addrBook = data.addressBook,
        count = addrBook.length,
        i;

	event.preventDefault();

	target.innerHTML = "";

	if(count > 0 && searchValue !== "") {
        
        for (i = 0; i < count; i = i + 1) {
            
            
            var obj = addrBook[i],
                isItFound = obj.name.toLowerCase.indexOf(searchValue);
            
            if (isItFound !== -1) {

				target.innerHTML += '<p><a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>';
                }
            }
        }
    });
},
/*
        getAllContacts : function()  {
            
            var output = document.getElementById(output);
            
            ajaxCall('data/contacts.json', output, function (data){
                            
            var searchValue = searchField.value,
                addrBook = data.addressBook,                
                count = addrBook.length,
                i;

            target.innerHTML = "";

            if (count > 0) {

                for (i = 0; i < count; i = i + 1) {
            
                    var obj = addrBook[i];

                    target.innerHTML += '<p><a href="mailto:' + obj.email + '">' + obj.name + '</a><p>';

                }
            }
        });
    },          
     
//---------        
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
        
//--------
*/ 
}        
    searchField.addEventListener("keyup", addr.search, false);

})();