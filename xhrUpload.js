
    //function renders ajax response data
    function renderImage(response){
        debugger
        //convert ajax response into array of objects
        let record = JSON.parse(response)

        //create pointer record-table element
        const cityDetailEl = document.getElementById('image-div')         

        //insert string into table
        cityDetailEl.innerHTML = `<img src="${record.image}" alt="img.jpg">`

    }

    //create pointer to upload-btn element
    const uploadBtnEl = document.getElementById('upload-btn')

    //create pointer to upload-clr-btn element
    const uploadClrBtnEl = document.getElementById('upload-clr-btn')    
    
    //create pointer to image form element
    const imgFormEl = document.getElementById('imageform')  
    
 

    //add event listner to img-form element
    imgFormEl.addEventListener('submit',function(e){

        debugger;
        e.preventDefault()

        //create pointer to image file
       var ajaximg = document.getElementById('ajaximg')

        //Retrive image file
       var file = ajaximg.files[0]

       //create form data
       var fdata = new FormData()

       //append image file
       fdata.append('image',file)

       //specify request url
       url = `./uploadImage.php`

       //specify request method
       method = 'POST'

        try {          

            //create ajax request object
            const xhr = new XMLHttpRequest()

            //specify callback function for onload event
            xhr.onload = function(){
                if(this.status === 200){
                    renderImage(xhr.response)
                }
            }

            //specify callback function for error event
            xhr.onerror = function(error){
                   console.log(`Error: ${error}`) 
            }  

            //create connection with server
            xhr.open(method,url,true)

            //set request headers
            xhr.setRequestHeader('Accept','application/json')
            // xhr.setRequestHeader('Content-Type','multipart/form-data')

            //send ajax request
            xhr.send(fdata)
        
        } catch (error) {
            console.log(`Error: ${error}`)                
        }

    })

    //add event listner to records-btn element
    uploadClrBtnEl.addEventListener('click',function(e){

        e.preventDefault()

        //create pointer record-table element
        const imageDivEl = document.getElementById('image-div')               
        imageDivEl.innerHTML = ""
    })        