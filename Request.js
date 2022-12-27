let url = "https://reqres.in/api/users?page=1";
let ulEl = document.getElementById("listContainer");
let buttonEl = document.getElementById("letsClick");

function createElementsOf(dataEl){
    let {data} = dataEl;
    for (let each of data){
        let {id,email,first_name,last_name,avatar} = each;
        console.log(id);
        console.log(email);
        console.log(first_name);
        console.log(last_name);
        console.log(avatar);
        
        let idEl = document.createElement("div");
        idEl.classList.add("data-con");
        
        let iEl = document.createElement("span");
        iEl.textContent = id;
        idEl.appendChild(iEl);
        
        let emEl = document.createElement("span");
        emEl.textContent = " " + email;
        idEl.appendChild(emEl);
        
        let brEl = document.createElement("br");
        idEl.appendChild(brEl);
        
        let fnEl = document.createElement("h3");
        fnEl.textContent = first_name;
        idEl.appendChild(fnEl);
        
        let lnEl = document.createElement("h3");
        lnEl.textContent = last_name;
        idEl.appendChild(lnEl);
        
        idEl.appendChild(brEl);
        
        let avEl = document.createElement("h5");
        avEl.textContent = avatar;
        idEl.appendChild(avEl);
        
        ulEl.appendChild(idEl);
    }
    
    
}

buttonEl.onclick = function(){
    let options = {
        method:"GET"
    }
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        let dataEl = jsonData;
        createElementsOf(dataEl);
    })
}