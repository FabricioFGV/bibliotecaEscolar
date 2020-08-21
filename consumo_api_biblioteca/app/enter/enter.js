function readRegisterTemplate(data, keywords){

      // html for listing products
      var read_Register_html=`
  
      <div class="container mt-3">
        <form class="form-group" id='search-Register-form' action='#' method='post'>
            <div class='input-group pull-left w-30-pct'>
                <input type='text' value='` + keywords + `' name='keywords' class='form-control Register-search-keywords' placeholder='Buscar...' required/>
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
      </tbody>`;

      if(data.paging){
        read_Register_html+="<ul class='pagination Register-pagination justify-content-center'>";
     
            // first page
            if(data.paging.first!=""){
                read_Register_html+="<li class='page-item'><a class='page-link Register-pagination' data-page='" + data.paging.first + "'>First Page</a></li>";
            }
     
            // loop through pages
            $.each(data.paging.pages, function(key, val){
                var active_page=val.current_page=="yes" ? "class='page-item active'" : "";
                read_Register_html+="<li " + active_page + "><a class='page-link Register-pagination' data-page='" + val.url + "'>" + val.page + "</a></li>";
            });
     
            // last page
            if(data.paging.last!=""){
                read_Register_html+="<li><a class='page-link Register-pagination' data-page='" + data.paging.last + "'>Last Page</a></li>";
            }
        read_Register_html+="</ul>";
    }

      // inject to 'page-content' of our app
      $("#page-content").html(read_Register_html);
}