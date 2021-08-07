import React from 'react';
import DonutChart from './Graph/DonutChart';
import { PrintPage } from "./PDF/Print";

const data = {"a":"ABHI,Srikanth,Chandani,abc,dsc","b":"ROJA","C":"CHITRA"}

const App = () => {
  const [firstData,setFirstData] = React.useState("");
 const [count, setcount] = React.useState()

React.useEffect(() => {
 console.log("data",data);
  let str = data?.a
  var words = str.split(',');
  setFirstData(words[0]);
  let arr = []
  for(var i = 1; i < words.length; i++){
    arr.push(words[i]);
  }
  console.log("Arr",arr.length)
  setcount(arr.length)
 
},[])

 

  return (
    <div>
      <div>{firstData}+{count}</div>
       <PrintPage /> 
       <DonutChart />
    </div>
  )
}

export default App


  