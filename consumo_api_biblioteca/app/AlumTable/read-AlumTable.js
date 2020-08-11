$(document).ready(function(){
 
    // show list of student on first load
    showAlumTable();


    $(document).on('click', '.AlumTable-form', function()
      {
        showAlumTable();
    });

});
 
// showAlumTable() method will be here



function showAlumTable(){
	$.getJSON("http://localhost/api_biblioteca/AlumTable/read.php", function(data){

      // html for listing products
      var read_alumTable_html=`
  
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

          <th class="text-center">Nombre</th>

          <th class="text-center">Grado</th>

          <th class="text-center">Grupo</th>

          <th class="text-center">Programa Educativo</th>

      </tr>
      <tbody id="myTable">`;
     
        // creating new table row per record
      $.each(data.records, function(key, val) {

        read_alumTable_html+=`
        <tr>
          <td class="text-center">`+ val.enter +`</td>

          <td class="text-center">`+ val.Enrolmed +`</td>
      
          <td class="text-center">`+ val.name +`</td>

          <td class="text-center">`+ val.rank +`</td>

          <td class="text-center">`+ val.group +`</td>

          <td class="text-center">`+ val.EducationProgram +`</td>
   
      </tr>`; 
    });

      read_alumTable_html+=`
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
			$("#page-content").html(read_alumTable_html);
      // chage page title
      changePageTitle("Registro general");
		});
}