window.onload = function(){

var adityatawade = document.getElementById('database');

// adityatawade.onclick = async (e) => {
//         let response = await fetch('http://localhost:3000/database', {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//         })

adityatawade.onclick = async (e) => {
    let response = await fetch('https://iconnectsolutionspvtltd.freshservice.com/api/v2/tickets', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa('06V67kkU0TCe13xxkK:x')
            },
            
    })
    
        let text = await response.text(); // read response body as text
        data = JSON.parse(text);
        document.querySelector("#encoded").innerHTML = text;
    //    document.querySelector("#encoded").innerHTML = `First name = ${data.firstname} <br/> 
    //                                                    Last name = ${data.lastname} <br/>
    //                                                    Age    = ${data.age}`
    };


    
    formElem.onsubmit = async (e) => {
      e.preventDefault();
      var form = document.querySelector("#formElem");
      
     // var form = document.forms[0];

    //  numStatus = form.querySelector('input[name="fresh_status"]').value
    //  numStatus1 = Number(numStatus)

    //  numPriority = form.querySelector('input[name="priority"]').value
    //  numPriority1 = Number(numPriority)

    // console.log(numStatus1)
    
    //     data = {
    //       subject : form.querySelector('input[name="subject"]').value,
    //       description : form.querySelector('input[name="description"]').value,
    //       email : form.querySelector('input[name="email"]').value,
    //       status : numStatus1,
    //       priority: numPriority1
    //     //   Phone_No : form.querySelector('input[name="phone"]').value,
    //     //   Comment : form.querySelector('input[name="comment"]').value,
    //     }

    // numStatus = form.querySelector('input[name="fresh_status"]').value
    //  numStatus1 = Number(numStatus)

    //  numPriority = form.querySelector('input[name="priority"]').value
    //  numPriority1 = Number(numPriority)

    // console.log(numStatus1)
    
        data = {
          subject : form.querySelector('input[name="subject"]').value,
          description : form.querySelector('input[name="description"]').value,
          email : form.querySelector('input[name="email"]').value,
          status : Number(form.querySelector('input[name="fresh_status"]').value),
          priority: Number(form.querySelector('input[name="priority"]').value)
        //   Phone_No : form.querySelector('input[name="phone"]').value,
        //   Comment : form.querySelector('input[name="comment"]').value,
        }

        
    
        // let response = await fetch('http://localhost:3000/database', {
        //         method: 'POST', // or 'PUT'
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),
        // })

        let response = await fetch('https://iconnectsolutionspvtltd.freshservice.com/api/v2/tickets', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic ' + btoa('06V67kkU0TCe13xxkK:x')
                },
                body: JSON.stringify(data),
                
        })

        // alert("Your Data Has Been Updated on our Database");
        // window.location.reload();
        form.reset();
    
        let text = await response.text(); // read response body as text
        document.querySelector("#decoded").innerHTML = text;
    };

//     var status = document.getElementById("status");

//   // Success and Error functions for after the form is submitted

//   function success() {
//     form.reset();
//     status.innerHTML = "Thanks!";
//   }

//   function error() {
//     status.innerHTML = "Oops! There was a problem.";
//   }


}