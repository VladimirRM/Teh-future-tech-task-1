import React,{useState} from 'react';
import axios from 'axios'
import './App.css'


import './App.css';

function App() {

  const [booksData,setBooksData]= useState([])
React.useEffect(()=>{
    getData()
},[])


async function   getData (){
  await axios.get('./types/books.json')
  .then(response =>{
    setBooksData(response.data)
    })
      .catch(err=>{
        console.log(err);
        
      })

}
console.log(booksData);



  return (
    <div className="wrapper">
    <div className="app">
      <div className="app__body">

      </div>


    </div>
    </div>
  );
}

export default App;
