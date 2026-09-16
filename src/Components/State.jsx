import {useState} from 'react'

function State() {
    const[count, setCount] = useState(0);
     function increaseButton(){
        setCount(prevCount => prevCount + 1);
     }
     function decreaseButton(){
        setCount(prevCount => prevCount - 1);
     }
  return (
    <div className = "flex flex-col p-4 p-8 items-center justify-center gap-4">
      <h1 className = "text-5xl text-center font-bold">{count}</h1>
      <div className="flex gap-4">
      <button onClick = {increaseButton} 
      className = "w-40 h-[60px] bg-gray-400 rounded-md">increase</button>
      <button onClick = {decreaseButton}
       className = "w-40 h-[60px] bg-gray-400 rounded-md">
      decrease</button>
      
    </div>
    </div>
  );
}

export default State


