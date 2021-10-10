let data2 = fetch('krizaljkabr2.txt')
    .then((response) => { 
        return response.text()
      }).then(someText =>{
        console.log(someText)
        var rows = someText.split('\r\n')
        let redak = parseInt(rows[0].split(" ")[0]);
        let stupac = parseInt(rows[0].split(" ")[1]);
        rows = rows.filter((row, index)=>{
            return index!==0;
        }).map(row =>{
            let dataRow=[];
            row = row.split(" ");
            dataRow[0]= parseInt(row[0]);
            dataRow[1]= parseInt(row[1]);
            dataRow[2]= parseInt(row[2]);
            dataRow[3]=row[3];
            row.forEach((element, index) => {
                if(index>3) dataRow[3] +=`\n${element}`  
            });
            return dataRow 
        })

        console.log(rows)
        var element = document.getElementById("secondTable");
        let caption=document.createElement("caption");
        let text=document.createTextNode("SLAVNE OSOBE");
        caption.appendChild(text);
        element.appendChild(caption);
          
                for(var i=0;i<redak;i++){ 
                    let tableRow = document.createElement("tr");
                    for (var j=0; j<stupac; j++) {

                            var cell = document.createElement("td");
                            let cellInput=document.createElement("input");
                            cellInput.type="text";
                            cell.appendChild(cellInput);
                            tableRow.appendChild(cell);
                    }
                    element.appendChild(tableRow);
                }
           
                      
            
                var htmlRows = document.querySelectorAll("tr")
                console.log({htmlRows})
                var btnProv=document.getElementById("btnProvjeri")

        rows.forEach((row)=> {
            if(row[2]===1){
                htmlRows[row[0]].cells[row[1]].innerText = row[3];
                htmlRows[row[0]].cells[row[1]].style.backgroundColor="papayawhip";
            }
            else if(row[2]===2){
                htmlRows[row[0]].cells[row[1]].firstChild.minLength=1;
                htmlRows[row[0]].cells[row[1]].firstChild.maxLength=1;
               
                //htmlRows[row[0]].cells[row[1]].firstChild.addEventListener('focusout',provjeri)
            }
            else if(row[2]===4){
                htmlRows[row[0]].cells[row[1]].firstChild.minLength=1;
                htmlRows[row[0]].cells[row[1]].firstChild.maxLength=1;
                htmlRows[row[0]].cells[row[1]].style.borderBottom="dashed";

            }
            else if(row[2]===5){
                htmlRows[row[0]].cells[row[1]].firstChild.minLength=1;
                htmlRows[row[0]].cells[row[1]].firstChild.maxLength=1;
                htmlRows[row[0]].cells[row[1]].style.borderRight="dashed";


            }
        });
   
     /*   function provjeri(){
            rows.forEach((row)=> {
                
               if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() === row[3]){
                   htmlRows[row[0]].cells[row[1]].firstChild.style.borderColor='green';
               }
               else if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() !== row[3] && htmlRows[row[0]].cells[row[1]].firstChild.value !==""){
                   htmlRows[row[0]].cells[row[1]].firstChild.style.borderColor='red';
               }
               else if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value ===""){
                   htmlRows[row[0]].cells[row[1]].firstChild.style.borderColor='black';
               }
           })}
           */
        function checkAllInputs(){
            rows.forEach((row)=> {
                
                if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() === row[3]){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='green';
                }
                else if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() !== row[3] && htmlRows[row[0]].cells[row[1]].firstChild.value !==""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='red';
                }
                else if(row[2]===2 && htmlRows[row[0]].cells[row[1]].firstChild.value ===""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='white';
                }
                else if(row[2]===4 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() === row[3]){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='green';
                   
                }
                else if(row[2]===4 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() !== row[3] && htmlRows[row[0]].cells[row[1]].firstChild.value !==""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='red';
                }
                else if(row[2]===4 && htmlRows[row[0]].cells[row[1]].firstChild.value ===""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='white';
                }
                else if(row[2]===5 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() === row[3]){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='green';
                   
                }
                else if(row[2]===5 && htmlRows[row[0]].cells[row[1]].firstChild.value.toUpperCase() !== row[3] && htmlRows[row[0]].cells[row[1]].firstChild.value !==""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='red';
                }
                else if(row[2]===5 && htmlRows[row[0]].cells[row[1]].firstChild.value ===""){
                    htmlRows[row[0]].cells[row[1]].firstChild.style.backgroundColor='white';
                }
            })
        }
        btnProv.addEventListener('click',checkAllInputs)  
       
      });
  