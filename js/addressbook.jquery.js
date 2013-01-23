(function( $ ) {
  
      $.fn.ftsSearch = function (options) { //define and anme plugin

    var defaults = $.extend({ //define default options
      output: "#output",
      url: "data/contacts.json",
      queryField: "#q"
    }, options);
          
         return this.each(function () { //loop through each element you're attaching the plugin to

        //start ajax call
        $.getJSON(options.url, function (data) {

          var addrBook = data.addressBook,
              count = addrBook.length,
              queryField = $(options.queryField);

          queryField.keyup(function (event) {

            var queryResult = queryField.val().toLowerCase();

            $(options.output).empty();
            
              event.preventDefault();

            if (count > 0 && queryResult !== "") {

              $.each(addrBook, function (i, obj) {

                var isItFound = obj.name.toLowerCase().indexOf(queryResult); //!= -1;

                if (isItFound !== -1) {
                  $(options.output).append('<p>' + obj.name + ', <a href="mailto:' + obj.email + ' ">' + obj.email + '</a><p>');
                    }   
                
              });
            }            
          }); //
    
        }); //end ajax
      });
  };

})( jQuery );