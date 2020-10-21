import React, { useState } from 'react';
import './App.css';
import axios from 'axios'
import ApiData from './ApiData'


function App() {
  const [val, setVal] = useState({ pname: "" },{ email: "" }, {cname:""},{age:0},{time:""});

  const handler = (event)=>{
    const {name,value} = event.target
    setVal((pre)=>{
      return { ...pre,[name]:value};
    })
    console.log(val)
  }
  const connect = async (e)=>{
    
    e.preventDefault()
    const id = await axios.post("http://localhost:3005/from",val);

  }
  const getTime = (val)=>{
    setVal((pre)=>{
      return (
        {
          ...pre , time:val
        }
      )
    })
  }
  const verify =async ()=>{
    const v = await axios.get("http://localhost:3005/from");
    
      if(v){
        const h1 = document.createElement("h4")
        h1.innerHTML=v.data
        document.getElementById("verify").appendChild(h1)
      }
    
  }
  return (
    <><div id="verify">

    </div>
      <div className="main-container">
        <form method="post" onSubmit={connect}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Parent's Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={handler}
                id="staticEmail"
                name="pname"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Parent's Contact Number
            </label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                onChange={handler}
                id="staticEmail"
                name="mob"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Parent's Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                onChange={handler}
                id="staticEmail"
                name="email"
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Child's Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={handler}
                id="staticEmail"
                name="cname"
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Child Age</label>
            <div className="col-sm-10">
              <input
                type="number"
                className="form-control"
                onChange={handler}
                id="staticEmail"
                name="age"
              />
            </div>
          </div>
          <ApiData  
            getTime = {getTime}
          />
          <input type="submit" value="Submit" onClick={verify}/>
        </form>
      </div>
    </>
  );
}

export default App;
