$(document).ready(function(){
 
    // show list of student on first load


    $(document).on('click', '.register-form', function()
      {
        showRegister();
    });

});
 
// showRegister() method will be here



function showRegister(){
	$.getJSON("http://localhost/api_biblioteca/register/read.php", function(data){

      // html for listing products
      var read_Register_html=`
  
      <!--Buscador-->
      <div class="container mt-3">
        <input class="form-control" id="myInput" type="text" placeholder="Buscar...">
      <br>

      <!--Inicio de la tabla-->
      <div class="table-responsive container-fluid">
      <!-- start table -->
      <table class='table table-bordered table-hover' border='1' cellpadding="2" cellspacing="0" width="100%">

      <!-- creating our table heading -->
      <tr>
          <th class="text-center">Entrada</th>

          <th class="text-center">Matricula</th>

      </tr>
      <tbody id="myTable">`;
     
        // creating new table row per record
      $.each(data.records, function(key, val) {

        read_Register_html+=`
        <tr>
          <td class="text-center">`+ val.enter +`</td>

          <td class="text-center">`+ val.Enrolmend +`</td>
   
      </tr>`; 
    });

      read_Register_html+=`
      </table>
      </div>
      </tbody>
      <script>
        $(document).ready(function(){
          $("#myInput").on("keyup", function() {
            var value = $(this).val().toLowerCase();
            $("#myTable tr").filter(function() {
              $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
          });
        });
      </script>`;

			// inject to 'page-content' of our app
			$("#page-content").html(read_Register_html);
      // chage page title
      changePageTitle("Registro entradas");
		});
}