//ajax call with jQuery
$(document).ready(function () {
    
//start ajax call
$.getJSON('data/contacts.json', function (data) {
    
    var addrBook = data.addressBook,
        count = addrBook.length
        
        $('#output').empty();
          
          if (count > 0) {
                    
        $.each(addrBook, function (i, obj) {
        
            $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>');  
            
            });
        }
    }).error(function (){
    
        alert('there was and ajax error');
    
    }).complete(function () {
            
        alert('your ajax call is complete');
    
    }).success(function() {
    
        alert('your ajax call was a success')

    }); //end ajax
    
}); //close document.ready