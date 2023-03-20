var selecteddRow = null
var	countt = 0;
function onFormtSubmit()
{   
    countt += 1
    var formtData = readFormtData();
    if(selecteddRow == null)
    {
        insertNewtRecord(formtData);
    }
    else
    {
        updatetRecord(formtData);
    }
    resettForm();
}
function readFormtData()
{
	
    var formtData = {};
    formtData['forName'] = document.getElementById('forName').value;
   
    return formtData;
}
function insertNewtRecord(data)
{
	
	var xyz=document.getElementById('forName').value;
	
	if(xyz==""){
		selecteddRow == null;
		alert("please insert formation");
		return false;
		
	}
	else{
	
	var addd="Formation#"
    var tablee = document.getElementById('formation-list').getElementsByTagName('tbody')[0];
    var newwRow = tablee.insertRow(tablee.length);
	cell1 = newwRow.insertCell(0);
    cell1.innerHTML = countt;
    cell2 = newwRow.insertCell(1);
    cell2.innerHTML = addd+countt+": " +  data.forName;
   
    cell3 = newwRow.insertCell(2);
    cell3.innerHTML = `<a onClick="ontEdit(this)" style="background:#1DA097;" class="btn btn-success btn-sm edit"><i class="far fa-edit" style="pointer-events: none"></i></a>`;
    cell4 = newwRow.insertCell(3);
    cell4.innerHTML = `<a onClick="ontDelete(this)" class="btn btn-danger btn-sm delete"><i class="far fa-trash-alt" style="pointer-events: none;"></i></a>`;
	}
}
function resettForm()
{
    document.getElementById('forName').value = '';
   
    selecteddRow = null;
}
function ontEdit(td)
{
    selecteddRow = td.parentElement.parentElement;
    document.getElementById('forName').value = selecteddRow.cells[1].innerHTML;
    
}
function updatetRecord(formtData)
{
    selecteddRow.cells[1].innerHTML = formtData.forName;
   
}
function ontDelete(td)
{
	
    roww = td.parentElement.parentElement;
    document.getElementById('formation-list').deleteRow(roww.rowIndex);
    resettForm();
	
}
