//function renders ajax response data
function fRenderTable(records){

    //create pointer record-table element
    const recordsTableEl = document.getElementById('f-records-table')   
    
    //create string of innerhtml for table
    let recordsHtml  = `
                                <thead>
                                    <th>S.NO</th>
                                    <th>Name</th>
                                </thead>
                                <tbody>
                                </tbody>
                                `
    //add row of each record to string                           
    records.forEach((value,key,records) => {
        recordsHtml += `
                        <tr>
                            <td>
                                    ${key+1}
                            </td>
                            <td>
                                ${value.ct_name}
                            </td>
                        </tr>
                        `
    });

    //insert string into table
    recordsTableEl.innerHTML =recordsHtml

}

//create pointer to records-btn element
const frecordsBtnEl = document.getElementById('f-records-btn')

//create pointer to records-clr-btn element
const frecordsClrBtnEl = document.getElementById('f-records-clr-btn')        

//add event listner to records-btn element
frecordsBtnEl.addEventListener('click',function(e){
    debugger
    e.preventDefault()

    //specify fetch arguments
    const url = "./getRecords.php"
    const obj = {method: 'GET',
                headers:{'Accept':'application/json'}}

    async function getRecords(){
        debugger
        const response = await fetch(url,obj)
        const data = await response.json()
        if(response.status === 200){
            fRenderTable(data)
        }
        else{
            console.log(data.error.message)
        }
    }
    getRecords()

})

//add event listner to records-btn element
frecordsClrBtnEl.addEventListener('click',function(e){

    e.preventDefault()

    //create pointer record-table element
    const frecordsTableEl = document.getElementById('f-records-table')               
    frecordsTableEl.innerHTML = ""
    })            