// jQuery Plug-In
(function ($) {
    
    $.fn.addressBook = function(options) {
        
        var defaults = {
            url: 'data/contacts.json',
            
        };        
        
        var options = $.extend(defaults, options);
        
        return this.each(function() {
            
                        
        });
    });  //end loop
}; 
        
        
})(jQuery);
        
$(document).ready( function () {
                
}); //close document.ready
        
/*-----------------   

//ajax call with jQuery
$(document).ready(function () {
    
    
$.getJSON('data/contacts.json',function (data) {
    
    var addrBook = data.addressBook,
        count = addrBook.lenth
        
        $('#output').empty();
          
          if (count > 0) {
                    
        $.each(addrBook, function (i, obj) {
        
            $('#output').append('<p>' + obj.name + ', <a href="mailto:' + obj.email + ' ">' + obj.email +'</a><p>') .hide().fadeIn();  
            
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

-----------------*/