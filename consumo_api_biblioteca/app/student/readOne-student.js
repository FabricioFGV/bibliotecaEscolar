$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-student-button', function(){
        // student ID will be here
        // get student id
        var id = $(this).attr('data-id');
        // read student record based on given ID
        $.getJSON("http://localhost/api_biblioteca/student/readOne.php?idClassmate=" + id, function(data){
            // read student button will be here
            // start html
            var read_one_student_html=`
             <br>
            <div class="container d-flex justify-content-end">
                <button class='btn btn-primary student-form'>
                    <span>Volver </span><i class='fas fa-angle-right'></i> 
                </button>
            </div>
            <br>

            <div class="container mt-3">
                <div class="row">
                    <br>
                    <div class="col-sm-1 rounded-sm bg-secondary text-white">Nombre</div>
                    <div class="col-sm-11 border border-left-0">`+data.name+`</div>
                    <br>
                </div>
                <br>
                <div class="row">
                    <br>
                    <div class="col-sm-1 rounded-sm bg-secondary text-white">Grado</div>
                    <div class="col-sm-11 border border-left-0">`+data.rank+`</div>
                    <br>
                </div>
                <br>
                <div class="row">
                    <br>
                    <div class="col-sm-1 rounded-sm bg-secondary text-white">Grupo</div>
                    <div class="col-sm-11 border border-left-0">`+data.group+`</div>
                    <br>
                </div>
                <br>
                <div class="row">
                    <br>
                    <div class="col-sm-3 rounded-sm bg-secondary text-white">ID Programa educativo</div>
                    <div class="col-sm-9 border border-left-0">`+data.idClassmate+`</div>
                    <br>
                </div>
            </div>

            <br>`;

            // inject html to 'page-content' of our app
            $("#page-content").html(read_one_student_html);
             
            // chage page title
            changePageTitle("Estudiante");
        });
    });
 
});