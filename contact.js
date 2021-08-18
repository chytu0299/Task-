var re = /^.+@.+\..{3}$/;
var re1 = /^[a-zA-Z]+$/;
var re2 = /^[0-9]+$/;


var selectedRow = null

function onFormSubmit() {
   
        var person = persondata();
        if (selectedRow == null)
            insert(person);
        else
            update(person);
        
    }

function validate() {
    var name = document.getElementById("name").value,
        email = document.getElementById("email").value,
        age = document.getElementById("age").value,
        phonenumber = document.getElementById("phonenumber").value;
    if (name == "") {
        alert("name should not be empty");
        return false;
    }
    else if (re1.test(name) == false) {
        alert("Invalid format");
        return false;
    }
    else if (email == "") {
        alert("email should not be empty");
        return false;
    }
    else if (re.test(email) == false) {
        alert("enter correct email address");
        return false;
    }
    else if (age == "") {
        alert("age should note be empty");
        return false;
    }
    else if (re2.test(age) == false) {
        alert("enter age in numbers only");
        return false;
    }
    else if(age.toString().length>3)
    {
        alert("enter age correctly");
        return false;
    }
    else if (phonenumber == "") {
        alert("phone number should not be empty");
        return false;
    }
    else if (re2.test(phonenumber) == false) {
        alert("enter phone number in number only");
        return false;
    }
    else if(phonenumber.toString().length<10 || phonenumber.toString().length>10)
    {
        alert("enter phone number in 10 digits only");
        return false;
    }
    else {
        return true;
    }


}
function persondata() {
    var person = {};
    person["name"] = document.getElementById("name").value;
    person["email"] = document.getElementById("email").value;
    person["age"] = document.getElementById("age").value;
    person["phonenumber"] = document.getElementById("phonenumber").value;
    return person;
}


function insert(person) {
    if (validate() == true) {
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0);
            cell2 = newRow.insertCell(1);
            cell3 = newRow.insertCell(2);
            cell4 = newRow.insertCell(3);
            cell5 = newRow.insertCell(4);
            cell1.innerHTML = person.name;
            cell2.innerHTML = person.email;
            cell3.innerHTML = person.age;
            cell4.innerHTML = person.phonenumber;
        
            cell5.innerHTML = `<button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#add" id ="add" onclick="Edit(this)" >Edit</button>
            <button type="button" class="btn btn-primary btn-sm" onclick="Delete(this)">Delete</button>`;
         
        console.log(Object.values(person));
        sessionStorage.setItem("name", person.name);
        sessionStorage.setItem("email",person.email);
        sessionStorage.setItem("age",person.age);
        sessionStorage.setItem("phonenumber",person.phonenumber);
                
        document.getElementById("fm").reset();
    }

}


function Delete(td) {
    if (confirm('Are you sure to delete this record ?')){
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
        document.getElementById("fm").reset();
        }
}

function Edit(td) {
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("email").value=selectedRow.cells[1].innerHTML;
    document.getElementById("age").value=selectedRow.cells[2].innerHTML;
    document.getElementById("phonenumber").value=selectedRow.cells[3].innerHTML;
}

function update(person){
    if (validate() == true) {
    selectedRow.cells[0].innerHTML=person.name;
    selectedRow.cells[1].innerHTML=person.email;
    selectedRow.cells[2].innerHTML=person.age;
    selectedRow.cells[3].innerHTML=person.phonenumber;
    console.log(Object.values(person));
    document.getElementById("fm").reset();
    }
}

