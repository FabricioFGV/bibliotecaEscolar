$(document).ready(function(){
 
    // show list of student on first load
    /*showstudent();*/


    $(document).on('click', '.student-form', function()
      {
        showstudent();
    });

});
 
// showstudent() method will be here



function showstudent(){
	$.getJSON("http://localhost/api_biblioteca/student/read.php", function(data){

      // html for listing products
      var read_student_html=`

      </div>

      <!--Buscador-->
      <div class="container mt-3">
        <input class="form-control" id="myInput" type="text" placeholder="Buscar...">
          <br>

          <!--Inicio de la tabla-->
          <div class="table-responsive container-fluid">
            <!-- start table -->
            <table class='table table-bordered table-hover'>

              <!-- creating our table heading -->
              <tr>

                <th class="text-center">Matricula</th>

                <th class="text-center">Nombre</th>

                <th class="text-center">Grado</th>

                <th class="text-center">Grupo</th>

                <th class="text-center">Programa Educativo</th>

                <th class="text-center">Acciones</th>

              </tr>
            <tbody id="myTable">`;
     
        // creating new table row per record
      $.each(data.records, function(key, val) {

        read_student_html+=`
        <tr>

          <td class="text-center">`+ val.idClassmate +`</td>

          <td class="text-center">`+ val.name +`</td>

          <td class="text-center">`+ val.rank +`</td>

          <td class="text-center">`+ val.group +`</td>

          <td class="text-center">`+ val.idProgramE +`</td>
   
          <td align="center">
            <!-- read product button -->
            <button class='btn btn-primary m-r-10px read-one-student-button' data-id='` + val.idClassmate + `'>
            <span class='glyphicon glyphicon-eye-open'>Detalles</span> 
            </button>
            
          </td>
        </tr>`; 
    });

      read_student_html+=`
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
			$("#page-content").html(read_student_html);
      // chage page title
      changePageTitle("Registro de estudiantes");
		});
}