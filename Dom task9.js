var form = document.getElementById('addForm');
var itemsList = document.getElementById('items');
var itDiscription = document.getElementById('discription');
var filter = document.getElementById("filter");


// For submit event
form.addEventListener('submit',addItems);
// delete Event
itemsList.addEventListener('click',removeItems);
//filter Event
filter.addEventListener('keyup',filterItems);
//
function addItems(e){
   e.preventDefault();
   //get input value
   var newItem = document.getElementById('item').value;
   //console.log(newItem);
   //get input dicription
   var itemDiscription = document.getElementById('discription').value;
   //console.log(itemDiscription);
   // Create New li element 
   var li = document.createElement('li');
   // add class
   li.className = 'list-group-item';
   // add text node with input 
   li.appendChild(document.createTextNode(newItem));
   li.appendChild(document.createTextNode(itemDiscription));
   // create del button element button
   var deletebtn = document.createElement('button');
   // add classes to deletebtn
   deletebtn.className = 'btn btn-danger btn-sm float-right delete';
   //append text node
   deletebtn.appendChild(document.createTextNode('X'));
   //
   //
   var editBtn = document.createElement('button');
   // add calsses to edit button
   editBtn.className = 'btn btn-danger btn-sm float-right';
   // add text telemt to edit button 
   editBtn.appendChild(document.createTextNode('Edit'));
   //
   //
   // append delrte btn to list
   li.append(deletebtn);
   // apeemd edit button to list
   li.append(editBtn);
   // append li to list
   itemsList.appendChild(li);
   //console.log(li);
}
//remove items

function removeItems(e){
   if (e.target.classList.contains('delete')){
       if(confirm('Are you sure?')){
           var li = e.target.parentElement;
           itemsList.removeChild(li);  
       }
   }
}

function filterItems(e){
    // convert text to lowerCase
    var text = e.target.value.toLowerCase();
    //console.log(text)
    var items = itemsList.getElementsByTagName('li');
    //console.log(items);
    var iDiscription = itemsList.getElementsByTagName('li');
    //console.log(iDiscription);
    // convert to array 
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        var iDiscription = item.childNodes[1].textContent;
        //console.log(itemName);
        //console.log(iDiscription);

        if (itemName.toLowerCase().indexOf(text) != -1 || iDiscription.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
        
        //console.log(itemName);
    })
}

