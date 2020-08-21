$(document).ready(function(){
 
    // show list of student on first load
    //showstudent();

    $(document).on('click', '.student-form', function()
      {
        showstudentFirstPage();
    });

    // when a 'page' button was clicked
    $(document).on('click', '.student-pagination li', function(){
        // get json url
        var json_url=$(this).find('a').attr('data-page');
 
        // show list of student
        showstudent(json_url);
    });

});

function showstudentFirstPage(){
    var json_url="http://localhost/api_biblioteca/student/read_paging.php";
    showstudent(json_url);
}

// showstudent() method will be here
function showstudent(json_url){
	$.getJSON(json_url, function(data){

      // html for listing student
      readstudentTemplate(data, "");

      // chage page title
      changePageTitle("Registro de estudiantes");
		});
}