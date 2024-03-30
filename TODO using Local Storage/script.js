const itemArray= localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[]

document.querySelector("#enter").addEventListener("click", ()=>{
  const item= document.querySelector("#item");
  if(item.value!="")
  {addItems(item)
  }
  else{
    alert("Please Enter Any Task First")
  }
})
function addItems (item){
  itemArray.push(item.value)
  localStorage.setItem('items',JSON.stringify(itemArray))
  location.reload()
}

function displayItems(){
  let items=""
  for(let i=0 ; i < itemArray.length; i++){
    items+=`<div class="item">
                  <div class="input-controller">
                    <textarea disabled>${itemArray[i]}</textarea>
                    <div class="edit-controller">
                      <i class="fa-solid fa-check deleteBtn ebtn"></i>
                      <i class="fa-solid fa-pen-to-square editBtn ebtn"></i>
                    </div>  

                  </div>
                  <div class="update-controller">
                      <button class="saveBtn update-btns">Save</button>
                      <button class="cancelBtn update-btns">Cancel</button>
                  </div>

                </div>`
  }

  document.querySelector('.to-do-list').innerHTML =items
  activateDeleteListener()
  activateEditListener()
  activateSaveListener()
  activateCancelListener()
}

function activateDeleteListener()
{
  let deleteBtn= document.querySelectorAll('.deleteBtn')
  deleteBtn.forEach((db,i)=>{
    db.addEventListener("click",()=>deleteItem(i) )
                             }
                   )
}

function deleteItem(i)
{
  itemArray.splice(i,1);
  localStorage.setItem('items',JSON.stringify(itemArray))
  location.reload()
}

function activateEditListener()
{
  const editBtn=document.querySelectorAll(".editBtn")
  const updateController= document.querySelectorAll('.update-controller')
  const inputs= document.querySelectorAll(".input-controller textarea")

  editBtn.forEach((eb,i)=>{
    eb.addEventListener('click', ()=>{
    updateController[i].style.display='block' 
    inputs[i].disabled=false
                                 }
                      )
                         }

  )
}



function  activateSaveListener(){
  const saveBtn=document.querySelectorAll(".saveBtn")
  
  const inputs= document.querySelectorAll(".input-controller textarea")

  saveBtn.forEach((sb,i)=>{
    sb.addEventListener('click',()=>
    {
      if(inputs[i].value!="")
      {
        updateItem(inputs[i].value,i)
      }
      else{
        alert("Enter Any Value to Update")
        location.reload()
      }
    })
  } )
}

function updateItem(text,i)
{
  itemArray[i]=text
  localStorage.setItem('items',JSON.stringify(itemArray))
  location.reload()
}


function  activateCancelListener(){
  const cancelBtn= document.querySelectorAll(".cancelBtn")
  const updateController= document.querySelectorAll(".update-controller")
  const inputs= document.querySelectorAll('.input-controller textarea')
  
  cancelBtn.forEach((cb,i)=>{
    cb.addEventListener('click',()=>{
      updateController[i].style.display="none"
      inputs[i].disabled=true
      location.reload()
    })
  })

}





function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  document.querySelector('#date').innerHTML= date[1]+ " " + date[2]+ " " + date[3]

}
window.onload=()=>{
  displayDate()
  displayItems()
}