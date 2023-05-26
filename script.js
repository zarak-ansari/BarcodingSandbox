// JsBarcode("#barcode", "Hi world!");


// const { jsPDF } = window.jspdf;

// const doc = new jsPDF();
// doc.text("Hello world!", 10, 10);
// doc.save("a4.pdf");

function readCSVFile(){
    var files = document.querySelector('#file').files;

    if(files.length > 0 ){

         // Selected file
         var file = files[0];

         // FileReader Object
         var reader = new FileReader();

         // Read file as string 
         reader.readAsText(file);

         // Load event
         reader.onload = function(event) {

            // Read file data
            var csvdata = event.target.result;

            // Split by line break to gets rows Array
            var rowData = csvdata.split('\n');
        
            // <table > <tbody>
            var tbodyEl = document.getElementById('tblcsvdata').getElementsByTagName('tbody')[0];
            tbodyEl.innerHTML = "";

            // Loop on the row Array (change row=0 if you also want to read 1st row)
            for (var rowNumber = 1; rowNumber < rowData.length; rowNumber++) {
                const codeString = rowData[rowNumber]
                if(codeString){
                    
                    var newRow = tbodyEl.insertRow();
    
                    var serialNumberCell = newRow.insertCell();
                    serialNumberCell.innerHTML = rowNumber;
    
                    var codeStringCell = newRow.insertCell();
                    codeStringCell.innerHTML = codeString;
                    
                    var barCodeCell = newRow.insertCell();
                    barCodeCell.innerHTML = `<img id="barcode-${rowNumber}"></img>`;
                    JsBarcode(`#barcode-${rowNumber}`, codeString);
                }
            }
         };

    } else {
         alert("Please select a file.");
    }

}