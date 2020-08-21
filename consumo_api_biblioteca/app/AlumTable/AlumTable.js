function readAlumTableTemplate(data, keywords){
	// html for listing products
      var read_alumTable_html=`

      <!-- when clicked, it will load the create student form -->
      <br>
      <div class="container d-flex justify-content-end">
        <button id='exportar-alumnos' class='btn btn-primary'>
          <span>Exportar Alumnos</span>
        </button>
      </div>
      <br>
  
      <div class="container mt-3">
        <form class="form-group" id='search-AlumTable-form' action='#' method='post'>
            <div class='input-group pull-left w-30-pct'>
                <input type='text' value='` + keywords + `' name='keywords' class='form-control AlumTable-search-keywords' placeholder='Buscar...' required/>
                <span class='input-group-btn'>
                    <button type='submit' class='btn btn-default' type='button'>
                        <span>buscar</span>
                    </button>
                </span>
            </div>
        </form>
    </div>

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
      </tbody>`;

       if(data.paging){
        read_alumTable_html+="<ul class='pagination alumTable-pagination justify-content-center'>";
     
            // first page
            if(data.paging.first!=""){
                read_alumTable_html+="<li class='page-item'><a class='page-link alumTable-pagination' data-page='" + data.paging.first + "'>First Page</a></li>";
            }
     
            // loop through pages
            $.each(data.paging.pages, function(key, val){
                var active_page=val.current_page=="yes" ? "class='page-item active'" : "";
                read_alumTable_html+="<li " + active_page + "><a class='page-link alumTable-pagination' data-page='" + val.url + "'>" + val.page + "</a></li>";
            });
     
            // last page
            if(data.paging.last!=""){
                read_alumTable_html+="<li><a class='page-link alumTable-pagination' data-page='" + data.paging.last + "'>Last Page</a></li>";
            }
        read_alumTable_html+="</ul>";
    }

	// inject to 'page-content' of our app
	$("#page-content").html(read_alumTable_html);
}