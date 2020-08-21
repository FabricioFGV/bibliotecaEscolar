$(document).ready(function(){
 
    // show list of Register on first load


    $(document).on('click', '.register-form', function()
      {
        showRegisterFirstPage();
    });

    // when a 'page' button was clicked
    $(document).on('click', '.Register-pagination li', function(){
        // get json url
        var json_url=$(this).find('a').attr('data-page');
 
        // show list of Register
        showRegister(json_url);
    });

});
 

function showRegisterFirstPage(){
    var json_url="http://localhost/api_biblioteca/Register/read_paging.php";
    showRegister(json_url);
}


// showRegister() method will be here
function showRegister(json_url){
	$.getJSON(json_url, function(data){

      readRegisterTemplate(data, "");

      // chage page title
      changePageTitle("Registro entradas");
		});
}