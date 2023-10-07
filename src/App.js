import React ,{ useEffect, useState} from 'react';
import "./Style.css"
import { Plus ,Trash2 } from 'lucide-react';


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


const OnUpdate = (e) => {
  setInputText(e.target.value);
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
    <>
    <center>
      <h1 className='too'> ToDo</h1>
    </center>
      <center>
        <div className="maindiv">
         <div  className='inputarea' > 
         <textarea onChange={OnUpdate} value={InputText} className='textin' type="text" />
         <button onClick={AddData} className="addB" title='Add Item'>
         <Plus/>
         </button>
         </div>
         
           {
            ItemData.map((elem , ind)=> {
             return(
              <div className='itemsDiv' key={ind}>
              <p className='ItemName'>
            {elem}</p> 
            <button className='Del' title='Delete Item' onClick={()=> DelTem(ind)}><Trash2/></button>
              </div>
             )
            })
           }
         

        </div>
       
      </center>
    </>
  );
}

export default App;
