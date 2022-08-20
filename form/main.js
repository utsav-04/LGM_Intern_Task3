var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];
var list6 = [];

var n=1;
var x=0;

function AddRow(){
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list2[x] = document.getElementById("name").value;
    list3[x] = document.getElementById("fathname").value;
    list4[x] = document.getElementById("gen").value;
    list5[x] = document.getElementById("ema").value;
    list6[x] = document.getElementById("mob").value;
    list1[x] = document.getElementById('output').value;

    

    var cel2 = NewRow.insertCell(0);
    var cel3 = NewRow.insertCell(1);
    var cel4 = NewRow.insertCell(2);
    var cel5 = NewRow.insertCell(3);
    var cel6 = NewRow.insertCell(4);
    var cel1 = NewRow.insertCell(5);
    

    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];
    cel6.innerHTML = list6[x];
    cel1.innerHTML = list1[x];
    

    n++;
    x++;
}

