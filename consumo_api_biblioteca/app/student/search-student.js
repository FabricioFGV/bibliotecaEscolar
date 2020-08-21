$(document).ready(function(){
 
    // when a 'search student' button was clicked
    $(document).on('submit', '#search-student-form', function(){
 
        // get search keywords
        var keywords = $(this).find(":input[name='keywords']").val();
 
        // get data from the api based on search keywords
        $.getJSON("http://localhost/api_biblioteca/student/search.php?s=" + keywords, function(data){
 
            // template in student.js
            readstudentTemplate(data, keywords);
 
            // chage page title
            changePageTitle("Buscar " + keywords);
 
        });
 
        // prevent whole page reload
        return false;
    });
 
});