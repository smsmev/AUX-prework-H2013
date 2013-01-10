//ajax call with jQuery
$(document).ready(function () {
    
    //start ajax call
    $.getJSON('data/contacts.json', function (data) {
        
        var addrBook = data.addressBook,
            count = addrBook.length,
            queryField = $("#q");
            
        queryField.keyup( function(event) {
            
            var queryResult = queryField.val().toLowerCase();
            
            $('#output').empty();
            event.preventDefault();
            
            if(count > 0 && queryResult !== "") {
                
                $.each(addrBook, function (i, obj) {
                
                    var isItFound = obj.name.toLowerCase().indexOf(queryResult); //!= -1;
                
                    if(isItFound !== -1) {
                        $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>');
                    }   
                
            })
            }            
        }); //
    
        }); //end ajax
    
}); //close document.ready
