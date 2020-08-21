$(document).ready(function(){
 
    // show list of student on first load
    showAlumTableFirstPage();


    $(document).on('click', '.AlumTable-form', function()
      {
        showAlumTableFirstPage();
    });

    $(document).on('click', '.alumTable-pagination li', function(){
        // get json url
        var json_url=$(this).find('a').attr('data-page');
 
        // show list of AlumTable
        showAlumTable(json_url);
    });

});
 
function showAlumTableFirstPage(){
    var json_url="http://localhost/api_biblioteca/AlumTable/read_paging.php";
    showAlumTable(json_url);
}

// showAlumTable() method will be here
function showAlumTable(json_url){
	$.getJSON(json_url, function(data){

      readAlumTableTemplate(data, "");
      // chage page title
      changePageTitle("Registro general");
		});
}