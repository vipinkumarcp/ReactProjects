import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


///geting items stored in local storage

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  //if list return value
  if(list){
    //storing list value as json ..so need to parse
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }

}

function App() {
  const [name,setName]=useState('');
  //getting local storage value if there any exist
  const [list,setList] = useState(getLocalStorage());
  const [isEditing,setIsEditing]=useState(false);
  //to reflect which item we are editing
  const [editID,setEditId] = useState(null);
  const [alert,setAlert]=useState({show:false,msg:'',type:''})



  //adding items to list on submit
  const handleSubmit = (e)=>{
    e.preventDefault()
    //if empty string
    if(!name){
      //display alert
      //setAlert({show:true,msg:'please enter value',type:'danger'}) using function to speed up
      showAlert(true,'danger','please enter value')
    }
    else if(name && isEditing){
      //deal with edit
      //map to return new list
      setList(list.map((item)=>{
        
        if(item.id === editID){
          //copy all the values and title equal to name
          return {...item,title:name}

        }

        return item
      })
      )

      setName('');
      setEditId(null);
      setIsEditing(false);
      showAlert(true,'sucess','value changed')

    }else {
      //here items added to list
      //show alert
      showAlert(true,'sucess','item added to the list')
      const newItem = {id: new Date().getTime().toString(),
        title:name
      }
      setList([...list,newItem])
      setName('')

    }
  }

  const showAlert = (show=false,type="",msg="") =>{

    setAlert({show,type,msg})

  }

  //clear list

  const clearList = ()=>{

    showAlert(true,'danger','empty list');
    setList([])
  }
// remove individual items from the list

const removeItem = (id) =>{

showAlert(true,'danger','item removed')
//if item doesnot match with id it is added to new array
setList(list.filter((item)=>item.id !==id))

}

//edit items
const editItems = (id) =>{

  //return specificItem
  const specificItem = list.find((item)=> item.id ===id);
  setIsEditing(true);
  setEditId(id);
  //if editting display which item is editting
  setName(specificItem.title)


}



// if browser refresh every values get deleted ..so storing in local storage 
useEffect(()=>{
   localStorage.setItem('list',JSON.stringify(list))
},[list])



  return (
    <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
    {alert.show && <Alert {...alert}  removeAlert={showAlert} list={list}/>}
    <h3>grocery bud</h3>
    <div className='form-control'>
    <input type="text" className='grocery'
    placeholder='e.g eggs'
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    <button type="submit" className='submit-btn'>
    {isEditing?'edit':'submit'}
    
    </button>
    </div>

  </form>
  {list.length > 0 && ( <div className='grocery-container'>
  <List items={list} removeItem={removeItem} editItem={editItems}/>
  <button className='clear-btn' onClick={clearList}>clear items</button>
  
  </div>)}
 
    
    </section>
  )
}

export default App;
