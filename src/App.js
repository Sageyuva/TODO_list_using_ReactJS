import React ,{ useEffect, useState} from 'react';
import "./Style.css"
import { Sun , Moon} from 'lucide-react';


const getLocalItems = () => {
  let list = localStorage.getItem("todo")

  if(list){
    return JSON.parse(localStorage.getItem("todo"));
  }else{
    return [];
  }
}


function App() {
  const [InputText, setInputText] = useState("")
  const [ItemData, setItemData] = useState(getLocalItems)

  const [Theme, setTheme] = useState(true);
  

 const changeTheme = () => {
  setTheme(!Theme)
 }


 const AddData = () => {
  if(!InputText)(
    alert("Cannot Add empty space")
  )
else{
 setItemData([ ...ItemData ,InputText])
 setInputText("")
}
}

const DelTem = (id) => {

   const UpdatedData = ItemData.filter((elem, ind)=>{
    return ind !== id;
   })
   setItemData(UpdatedData)
   
}

useEffect(() => {
  localStorage.setItem("todo" , JSON.stringify(ItemData))
}, [ItemData])


  return (
   <div className={Theme?"maindiv":"maindiv1"}>
   <center><div className="heading">
    <h1 className={Theme?"HeadingNameD":"HeadingNameL"}>ToDo List</h1>
    <button onClick={changeTheme} className={Theme?"BtnL":"BtnD"}>{Theme?<Sun/> :<Moon/>} <p className="themename">{Theme?"Light":"Dark"}</p> </button>
   </div></center>
   <center>
   <div className={Theme?"allingL":"allingD"}>
    <div className="inputAdd">
      <input className={Theme?"InputD":"InputL"} value={InputText}  onChange={(e)=> {setInputText(e.target.value)}}/>
      <button className='AddItem' onClick={AddData}> Add </button>
    </div>


 {
  ItemData.map((elem,ind)=> {
    return(
      <div className="ItemDisplay">
      <div className="itemData">
        {elem}
      </div>
      <button className='RemoveItem' onClick={()=> DelTem(ind)}> Remove</button>
    </div>
    )
  })
 }


   </div>
   </center>
   </div>
  );
}

export default App;
