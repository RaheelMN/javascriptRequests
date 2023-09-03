    //function renders ajax response data
    function renderCityDetail(response){
        debugger
        //convert ajax response into array of objects
        let record = JSON.parse(response)

        //create pointer record-table element
        const cityDetailEl = document.getElementById('city-detail')         

        //insert string into table
        cityDetailEl.innerHTML = `
                                    <h3>City Detail</h3>
                                    <div>City id: ${record.id}</div>
                                    <div>City Name: ${record.cname} </div>
                                 `

    }

    //create pointer to records-btn element
    const recordBtnEl = document.getElementById('record-btn')

    //create pointer to records-clr-btn element
    const recordClrBtnEl = document.getElementById('record-clr-btn')        

    //add event listner to records-btn element
    recordBtnEl.addEventListener('click',function(e){
        debugger;
        e.preventDefault()

        //Retrive city name from input field
       const cityName = document.getElementById('city-name').value

       const obj = {
            cname:cityName
       }

       const jsonObj = JSON.stringify(obj)

       //specify request url
       const url = `./getRecordAPI.php`

       //specify request method
       const method = 'POST'


        try {          

            //create ajax request object
            const xhr = new XMLHttpRequest()

            //specify callback function for onload event
            xhr.onload = function(){
                if(this.status === 200){
                    renderCityDetail(xhr.response)
                }
            }

            //specify callback function for error event
            xhr.onerror = function(error){
                   console.log(`Error: ${error}`) 
            }  

            //create connection with server
            xhr.open(method,url,true)

            //browser expects json data
            xhr.setRequestHeader('Accept', 'application/json')


            //content type of request
            xhr.setRequestHeader('Content-type', 'application/json')

            //send ajax request
            xhr.send(jsonObj)
         
        } catch (error) {
            console.log(`Error: ${error}`)                
        }

    })

    //add event listner to records-btn element
    recordClrBtnEl.addEventListener('click',function(e){

        e.preventDefault()

        //create pointer record-table element
        const cityDetailEl = document.getElementById('city-detail')               
        cityDetailEl.innerHTML = ""
        })  