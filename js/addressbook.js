//ajax call with jQuery
$(document).ready(function () {
    
    //start ajax call
    $.getJSON('data/contacts.json', function (data) {
        
        var addrBook = data.addressBook,
            count = addrBook.length,
            queryField = $("#q");
            
        queryField.keyup( function(event) {
            
            var queryResult = queryField.val();
            
            event.preventDefault();
            
            $('#output').empty();
                        
            $.each(addrBook, function (i, obj) {
                
                var isItFound = obj.name.indexOf(queryResult);
                
                if(isItFound !== -1) {
                    $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>');
                }
                
            });
        });
    
        }); //end ajax
    
}); //close document.ready
