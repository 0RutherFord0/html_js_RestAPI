encode.onclick = async (e) => {
    let response = await fetch('http://localhost:3000/database', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
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

    data = {
      First_Name : form.querySelector('input[name="firstname"]').value,
      Last_Name : form.querySelector('input[name="lastname"]').value,
      Email_Id : form.querySelector('input[name="email"]').value,
      Phone_No : form.querySelector('input[name="phone"]').value,
    }

    let response = await fetch('http://localhost:3000/database', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
    })

    let text = await response.text(); // read response body as text
    document.querySelector("#decoded").innerHTML = text;
};