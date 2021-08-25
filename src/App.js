import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  //hooks
  // const [count,setCount]=useState(0)
  // let increment = () =>{
  //   setCount(count + 1)

  // }
  let change = (id) =>{
    // alert(id)
    let listIndex = list.findIndex(obj => obj.id == id);
    list[listIndex].isDone = !list[listIndex].isDone;             //functionality to slash and unslash without refreshing or reloading
    setList([...list])

  }
  const [list,setList] = useState([
        {
          id :1,
          taskName :"Go to hell",
          isDone : false
        },
        {
          id :2,
          taskName :"Go to heaven",
          isDone : false
        },
        {
          id :3,
          taskName :"Just Live!",
          isDone : false
        }
  ])

  return (

    <div>
      <ul>
        {
          list.map((data)=>{
            return <li style={{textDecoration : data.isDone ? '' : 'line-through'}}>{data.taskName} - <button onClick={() => change(data.id)}>Done</button></li>
          })
        }
      </ul>
      {/* <button onClick={increment}>Increase</button> */}
    </div>
    
  );
}

export default App;
