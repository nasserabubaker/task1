var students = [];

document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('success');
});

function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
	}

	if (id == '') {
		alert('Please insert the student id number');
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
	console.log('students array: ', students);

}

function showMessage(event){
    if (event == 'success') {
        alert('Studnet added!')
    }else{
        alert('Faild to add student')
	}
}

////////////////////////////////////////////////////////////////////////


function  display(){

	let out = '';
    for (var i in students) {
        var rec = students[i];
        var row = [];

        for (var field in rec) {
            row.push(field + ': ' + rec[field]);
        }

        out += "<li>" + row.join('<br>') + "</li>";
    }

	document.getElementById("display").innerHTML = "<ol>" + out + "</ol>";
}

// Delete student
function Delete_std() {

	let deleteS = document.getElementById("idDelete").value;
	alert(deleteS);
	for(var i in students) {

		if(students[i].id == deleteS){
		 students.splice(i,1);
		 alert("student deleted");
			return;	
	    }   	
    } 
  alert("student not fiond");
}

// Update student

function Update() {
	let name = document.getElementById('Update_Name');
	let id = document.getElementById('Update_Id');
	let gdpa = document.getElementById('Update_Gdpa');
	let exist = document.getElementById("id_To_Update");
	var index = -1;

	for( var i in students) {
		if(students[i].id == exist.value){ 
			index = i;		
			break;
		}
    }
	

   if(index == -1)
	alert("student is not Found");
   
  else{

    if(name.value != '')
	students[index].name = name.value;

	if(id.value != '')
	students[index].id = id.value;

	if(gdpa.value != '')
	students[index].gdpa = gdpa.value;
    alert("student Update");
   }

  
}
