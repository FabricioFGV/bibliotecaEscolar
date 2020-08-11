$(document).ready(function(){

    $(document).on('click', '.ProgramE-form', function(){
        showProgramE();
    });

});
 
// showProgramE() method will be here



function showProgramE(){
	$.getJSON("http://localhost/api_biblioteca/ProgramE/read.php", function(data){

      // html for listing products
      var read_ProgramE_html=`
  
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

          <th class="text-center">Programa Educativo</th>

          <th class="text-center">Acciones</th>

      </tr>
      <tbody id="myTable">`;
     
        // creating new table row per record
      $.each(data.records, function(key, val) {

        read_ProgramE_html+=`
        <tr>
          <td class="text-center">`+ val.EducationProgram +`</td>

          <td align="center">
            <!-- read product button -->
            <button class='btn btn-primary m-r-10px read-one-ProgramE-button' data-id='` + val.idProgramE + `'>
            <span class='glyphicon glyphicon-eye-open'>Detalles</span> 
            </button>
   
      </tr>`; 
    });

      read_ProgramE_html+=`
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
			$("#page-content").html(read_ProgramE_html);
      // chage page title
      changePageTitle("Registro de carreras");
		});
}