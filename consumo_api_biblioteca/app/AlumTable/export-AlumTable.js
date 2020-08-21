$(document).ready(function(){
  
  $(document).on('click', '#exportar-alumnos', function(){

    var jsonval;

    $.getJSON("http://localhost/api_biblioteca/AlumTable/read.php", function(data){
      jsonval=data;
      console.log(jsonval);
      if (jsonval == null) {
        return ;
      }
      JSONToCSVConvertor(jsonval, "Concentrado de Alumnos", true);
    });
  });
});


function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
  //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
  var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

  console.log(arrData);

  var CSV = '';
  //Set Report title in first row or line

  CSV += ReportTitle + '\r\n\n';

  //This condition will generate the Label/Header
  if (ShowLabel) {
    var row = "";

    //This loop will extract the label from 1st index of on array
    for (var index in arrData.records[0]) {
      //Now convert each value to string and comma-seprated
      row += index + ',';
    }

    //append Label row with line break
    CSV += row.slice(0, -1) + '\r\n';
  }
  // Recorrer todos los registros
  arrData.records.forEach(record => {
    let row = '';
    // Recorrer columnas
    for(var index in record) {
      // Obtener valor de cada columna y encerrar entre comillas
      row += `"${record[index]}",`;
    }
    CSV += row.slice(0, -1) + '\r\n';
  });

  //Generate a file name
  var fileName = "Biblioteca_";
  //this will remove the blank-spaces from the title and replace it with an underscore
  fileName += ReportTitle.replace(/ /g, "_");

  //Initialize file format you want csv or xls
  var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

  // Now the little tricky part.
  // you can use either>> window.open(uri);
  // but this will not work in some browsers
  // or you will not get the correct file extension    

  //this trick will generate a temp <a /> tag
  var link = document.createElement("a");
  link.href = uri;

  //set the visibility hidden so it will not effect on your web-layout
  link.style = "visibility:hidden";
  link.download = fileName + ".csv";

  //this part will append the anchor tag and remove it after automatic click
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}