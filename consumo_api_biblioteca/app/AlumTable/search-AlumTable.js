$(document).ready(function(){
 
    // when a 'search AlumTable' button was clicked
    $(document).on('submit', '#search-AlumTable-form', function(){
 
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
 
        // get data from the api based on search keywords
        $.getJSON("http://localhost/api_biblioteca/AlumTable/search.php?s=" + keywords, function(data){
 
            // template in AlumTable.js
            readAlumTableTemplate(data, keywords);
 
            // chage page title
            changePageTitle("Buscar " + keywords);
 
        });
 
        // prevent whole page reload
        return false;
    });
 
});