var selectedRow = null
var	count = 0;
function onFormSubmit()
{   
    count += 1
    var formData = readFormData();
    if(selectedRow == null)
    {
        insertNewRecord(formData);
    }
    else
    {
        updateRecord(formData);
    }
    resetForm();
}
function readFormData()
{
	
    var formData = {};
    formData['addressName'] = document.getElementById('addressName').value;
   
    return formData;
}
function insertNewRecord(data)
{
	
	var xy=document.getElementById('addressName').value;
	
	if(xy==""){
		selectedRow == null;
		alert("please insert new addrss");
		return false;
		
	}
	else{
	
	var add="Address#"
    var table = document.getElementById('address-list').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
	cell1 = newRow.insertCell(0);
    cell1.innerHTML = count;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = add+count+": " +  data.addressName;
   
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a onClick="onEdit(this)" style="background:#1DA097;" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none"></i></a>`;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
	}
}
function resetForm()
{
    document.getElementById('addressName').value = '';
   
    selectedRow = null;
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById('addressName').value = selectedRow.cells[1].innerHTML;
    
}
function updateRecord(formData)
{
    selectedRow.cells[1].innerHTML = formData.addressName;
   
}
function onDelete(td)
{
	
    row = td.parentElement.parentElement;
    document.getElementById('address-list').deleteRow(row.rowIndex);
    resetForm();
	
}
