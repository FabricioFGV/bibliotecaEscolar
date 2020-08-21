// student list html
function readstudentTemplate(data, keywords){
 
    var read_student_html=`
    <div class="container mt-3">
        <form class="form-group" id='search-student-form' action='#' method='post'>
            <div class='input-group pull-left w-30-pct'>
                <input type='text' value='` + keywords + `' name='keywords' class='form-control student-search-keywords' placeholder='Buscar...' required/>
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
            <table class='table table-bordered table-hover'>

              <!-- creating our table heading -->
              <tr>

                <th class="text-center">Matricula</th>

                <th class="text-center">Nombre</th>

                <th class="text-center">Grado</th>

                <th class="text-center">Grupo</th>

                <th class="text-center">Acciones</th>

              </tr>
            <tbody id="myTable">`;
 
 
    // loop through returned list of data
    $.each(data.records, function(key, val) {
 
        // creating new table row per record
        read_student_html+=` <tr>

          <td class="text-center">`+ val.idClassmate +`</td>

          <td class="text-center">`+ val.name +`</td>

          <td class="text-center">`+ val.rank +`</td>

          <td class="text-center">`+ val.group +`</td>
   
          <td align="center">
            <!-- read student button -->
            <button class='btn btn-primary m-r-10px read-one-student-button' data-id='` + val.idClassmate + `'>
            <span class='glyphicon glyphicon-eye-open'>Detalles</span> 
            </button>
            
          </td>
        </tr>`;
    });
 
    // end table
    read_student_html+=`
        </table>
        </div>
        </tbody>`;
      // pagination
    if(data.paging){
        read_student_html+="<ul class='pagination student-pagination justify-content-center'>";
     
            // first page
            if(data.paging.first!=""){
                read_student_html+="<li class='page-item'><a class='page-link student-pagination' data-page='" + data.paging.first + "'>First Page</a></li>";
            }
     
            // loop through pages
            $.each(data.paging.pages, function(key, val){
                var active_page=val.current_page=="yes" ? "class='page-item active'" : "";
                read_student_html+="<li " + active_page + "><a class='page-link student-pagination' data-page='" + val.url + "'>" + val.page + "</a></li>";
            });
     
            // last page
            if(data.paging.last!=""){
                read_student_html+="<li><a class='page-link student-pagination' data-page='" + data.paging.last + "'>Last Page</a></li>";
            }
        read_student_html+="</ul>";
    }
 
    // inject to 'page-content' of our app
    $("#page-content").html(read_student_html);
}