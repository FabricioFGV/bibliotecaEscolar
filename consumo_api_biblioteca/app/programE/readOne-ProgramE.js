$(document).ready(function(){
 
    // handle 'read one' button click
    $(document).on('click', '.read-one-ProgramE-button', function(){
        // ProgramE ID will be here
        // get ProgramE id
        var id = $(this).attr('data-id');
        // read ProgramE record based on given ID
        $.getJSON("http://localhost/api_biblioteca/programE/readOne.php?idProgramE=" + id, function(data){
            // read ProgramE button will be here
            // start html
            var read_one_ProgramE_html=`
             <br>
            <div class="container d-flex justify-content-end">
            <button class='btn btn-primary ProgramE-form'>
                <span>Volver </span><i class='fas fa-angle-right'></i> 
            </button>
            </div>
            <br>

            <div class="container mt-3">
                <div class="row">
                    <br>
                    <div class="col-sm-3 rounded-sm bg-secondary text-white">Nombre del programa educativo</div>
                    <div class="col-sm-9 border border-left-0">`+data.EducationProgram+`</div>
                    <br>
                </div>
            </div>
            <br>`;

            // inject html to 'page-content' of our app
            $("#page-content").html(read_one_ProgramE_html);
             
            // chage page title
            changePageTitle("Programa educativo");
        });
    });
 
});