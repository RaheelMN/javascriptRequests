// document.addEventListener('DOMContentLoaded',function(){

    //ajax response callback function for onload event
    function loadCallback(){
        if(this.status === 200){
            renderTable(this.response)
        }
    }    

    //function renders ajax response data
    function renderTable(response){

        //convert ajax response into array of objects
        let records = JSON.parse(response)

        //create pointer record-table element
        const recordsTableEl = document.getElementById('records-table')   
        
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

    //ajax response callback function for onerror event
    function errorCallBack(error){
        console.log(`Error: ${error}`)
    }

    //create pointer to records-btn element
    const recordsBtnEl = document.getElementById('records-btn')

    //create pointer to records-clr-btn element
    const recordsClrBtnEl = document.getElementById('records-clr-btn')        

    //add event listner to records-btn element
    recordsBtnEl.addEventListener('click',function(e){

        e.preventDefault()
        try {                
            //create ajax request object
            const xhr = new XMLHttpRequest()
            //specify request url
            const url = "./getRecords.php"
            //specify request method
            const method = 'GET'
            //specify callback function for onload event
            xhr.onload = loadCallback
            //specify callback function for status code not captured 
            xhr.onloadend = function (){
                                if(this.status === 404){
                                    console.log('Error: Page not found')
                                }
                            }  
            //specify callback function for error event
            xhr.onerror = errorCallBack 

            //create connection with server
            xhr.open(method,url,true)

            //Send the proper header information along with the request
            xhr.setRequestHeader('Accept', 'application/json')

            //send ajax request
            xhr.send(null)
        } catch (error) {
            console.log(`Error: ${error}`)                
        }

    })

    //add event listner to records-btn element
    recordsClrBtnEl.addEventListener('click',function(e){

        e.preventDefault()

        //create pointer record-table element
        const recordsTableEl = document.getElementById('records-table')               
        recordsTableEl.innerHTML = ""
        })        
    // })