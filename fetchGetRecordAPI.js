    //function renders ajax response data
    function frenderCityDetail(record){

        //create pointer record-table element
        const cityDetailEl = document.getElementById('f-city-detail')         

        //insert string into table
        cityDetailEl.innerHTML = `
                                    <h3>City Detail</h3>
                                    <div>City id: ${record.id}</div>
                                    <div>City Name: ${record.cname} </div>
                                 `

    }

    //create pointer to records-btn element
    const frecordBtnEl = document.getElementById('f-record-btn')

    //create pointer to records-clr-btn element
    const frecordClrBtnEl = document.getElementById('f-record-clr-btn')        

    //add event listner to records-btn element
    frecordBtnEl.addEventListener('click',function(e){
        debugger;
        e.preventDefault()

        //Retrive city name from input field
       const cityName = document.getElementById('f-city-name').value

       const formData = new FormData()
       formData.append('cname',cityName)
       //create url
       const url = `./getRecordAPI.php`;
        const obj = {
                    method: 'POST',
                    Headers: {'Accept':'application/json',
                              'Content-Type':'application/json'},
                    // Headers:{'Accept':'application/json'},
                    body:JSON.stringify({cname:cityName})
                    // body:formData
        }
        async function getRecord(){
            const response = await fetch(url,obj)
            const data = await response.json()
            if(response.status === 200){
                frenderCityDetail(data)
            }else{
                console.log(`Error: ${data.error.message}`)
            }
        }
        getRecord()

    })

    //add event listner to records-btn element
    frecordClrBtnEl.addEventListener('click',function(e){

        e.preventDefault()

        //create pointer record-table element
        const cityDetailEl = document.getElementById('f-city-detail')               
        cityDetailEl.innerHTML = ""
})  