import React, { useEffect, useState } from 'react'
import Time from './Time'

const ApiData =(props)=>{
  const [d,setD] = useState([])
  const [Cname,setCname] = useState("")
  const [dte,setDate] = useState()
  const getdata = async ()=>{
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzJ8Nn2ytbGO8QOkGU1kfU9q50RjDHje4Ysphyesyh-osS76wep/exec"
      );
      var data = await response.json()
      setD(data)
  }
  useEffect(()=>{
      getdata()
      date()
      
  },[Cname])
  //console.log(d)

  const fun =(e)=>{
    setCname(e.target.value)
    console.log(Cname)
  }
  const date = ()=>{
      var d = new Date()
       let month = d.getMonth()
       let day = d.getDate()
       let year = d.getFullYear()
    //console.log(year + "-" + (month + 1) + "-" + day);
    document.getElementById("datepicker").max=year+"-"+(month+1)+"-"+(day+7)
    document.getElementById("datepicker").min=year+"-"+(month+1)+"-"+day
  }
  const getTimeslot = (val)=>{
    //console.log("...")
    
    props.getTime(val)
  }
  const calenderDate = ()=>{
     setDate(document.getElementById("datepicker").value)
     //console.log(dte +"  "+"this is from calender")
  }
  return (
    <>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">Course</label>
        <div className="col-sm-10">
          <select className="form-control" onClick={fun}>
            {d.map((val) => {
              return <option value={val.course_name}>{val.course_name}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label">
          Sutable Date for class
        </label>
        <div className="col-sm-10">
          <input
            type="date"
            selected='2020/10/4'
            className="form-control"
            id="datepicker"
            name="date"
            min= '2020-10-4'
            onChange={calenderDate}
          />
        </div>
      </div>
      <Time 
        data={d}
        course={Cname}
        date= {dte}
        getTime = {getTimeslot}
      />
    </>
  );
}

export default ApiData