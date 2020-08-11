$(document).ready(function(){
 
    // show list of student on first load
    showStudents();

    $(document).on('submit', '#create-register-form', function(){

    	var form_data=JSON.stringify($(this).serializeObject());

    	$.ajax({
		    url: "http://localhost/api_biblioteca/register/create.php",
		    type : "POST",
		    contentType : 'application/json',
		    data : form_data,
		    success : function(result) {
			        // user was created, go back to users list
			        showStudents();
			    },
			    error: function(xhr, resp, text) {
			        // show error to console
			        console.log(xhr, resp, text);
			    }
		});
	return false;
    });

});
 
// showStudents() method will be here



function showStudents(){
 			// html
			read_students_html=`  
      <br>
  <div class="container-fluid">
    <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-header">
              <h1 class="display-4" align="center">Bienvenido<h1>
              <img src="app/assets/jpg/unknown.jpg" class="img-thumbnail mx-auto d-block" alt="Cinque Terre" >
              <br>
            </div>
            <div class="card-body">
              <br>
              <form id='create-register-form' action='#' method='post'>
                <div class="input-group mb-3">
                  <input autofocus type="text" name='Enrolmed' class="form-control" placeholder="">
                  <div class="input-group-append">
                  <button class="btn btn-success" type="submit" onclick="location.href='http://localhost/Registro/';">Registrar</button>
                </div>
              </form>
              <br>
            </div>
            </div>
            <div class="card-footer" align="center">UNIVERSIDAD TECNOLÓGICA DE XICOTEPEC DE JUÁREZ</div>
        </div>
      </div>
			`;

		$.getJSON("http://localhost/api_biblioteca/AlumTable/readLast.php", 
 		function(data){
     		// end table

     		var dt = new Date();
     		var hours = new Date().getHours();
    		var hours = (hours+24-2)%24;
     		var mid='am';
    		if(hours==0){ //At 00 hours we need to show 12 am
    			hours=12;
    		}else if(hours>12){
    			hours=hours%12;
    			mid='pm';
   			}
			var time = ((dt.getHours() + 24) % 12 || 12) + ":" + ((dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes())+" "+mid;
			$.each(data.records, function(key, val) {
			read_students_html+=`
      <div class="col-sm-9">
  			<div class="card">
  				<div class="card-body">
  					<br>
  					<div class="row">
  						<div class="col"></div>
 	 					<div class="col-10">
 	 						<div class="card shadow p-4 mb-4 bg-white">
 	 							<br>
 	 							<h1 align="center">Matricula</h1>
 	 							<br>
 	 							<h2 align="center" id="Matricula">`+val.Enrolmed+`</h2>
 	 							<br>
 	 						</div>
 	 					</div>
  						<div class="col"></div>
					</div>
					<br>
					<div class="row">
						<div class="col-6">
							<div class="card shadow p-4 mb-4 bg-white">
 	 							<br>
 	 							<h1 align="center">Tiempo</h1>
 	 							<br>
 	 							<h2 align="center" id="idtiempo">`+time+`</h2>
 	 							<br>
 	 						</div>
						</div>

  						<div class="col-6">
  							<div class="card shadow p-4 mb-4 bg-white">
 	 							<br>
 	 							<h1 align="center">Carrera</h1>
 	 							<br>
 	 							<h2 align="center" id="carrer">`+val.EducationProgram+`</h2>
 	 							<br>
 	 						</div>
  						</div>

					</div>
  				</div>
  			</div>
  		</div>
	</div>
</div>

<br>
		`;
		});
			// inject to 'page-content' of our app
			$("#page-content").html(read_students_html);
		});
}