$(document).ready(function(){
 
    // when a 'search Register' button was clicked
    $(document).on('submit', '#search-Register-form', function(){
 
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
 
        // get data from the api based on search keywords
        $.getJSON("http://localhost/api_biblioteca/Register/search.php?s=" + keywords, function(data){
 
            // template in Register.js
            readRegisterTemplate(data, keywords);
 
            // chage page title
            changePageTitle("Buscar " + keywords);
 
        });
 
        // prevent whole page reload
        return false;
    });
 
});