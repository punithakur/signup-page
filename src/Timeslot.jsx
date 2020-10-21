import $ from 'jquery'
import React, { useEffect, useState } from 'react'

const Timeslot = (props)=>{
   //let [date,setDate] = useState()
   //let [slot, setSlot] = useState()
   const HtmlSelectTag = (s1)=>{
       var option = document.createElement("option");
       option.innerHTML = s1;
       var atr = document.createAttribute("value");
       atr.value = s1;
       document.getElementById("select1").appendChild(option);
   } 

   let TimeConver =(slot)=>{
     let sl = new Date(slot).toLocaleTimeString();
     //let h = new Date().getHours()+4
     let h = 14;
     let s1 = sl.split(" ");
     let s2 = sl.split(":");
     s2 = Number(s2[0]);
     var x;
     
       console.log("this is same date")
       if (h > 12 ? (x = 1) : (x = 0))

       if (h > 12 && s1[1] === "PM" && h - 12 < s2 && s2 !== 12) {
           HtmlSelectTag(s1);
         }

       if ((h < s2 || s1[1] === "PM") && x === 0) {
         HtmlSelectTag(s1);
       }
     

   }
    const dataFilter = ()=>{
      for(var i of props.data)
      {
        if(i.course_name===props.course)
        {
          for (var j of i.slots)
          {
            TimeConver(Number(j.slot));  
          }
        }
      }
    }
    //console.log("hey")
    const  listUpdate = ()=>{
      $("#select1").empty();
      $("#select1").append("<option> Select Any Time-Slot </option>");
        
    }
    //setDate(props.date)
    useEffect(()=>{
    //console.log('useEffect')
    listUpdate()
    dataFilter()
    },[props.course])
    
    const passVal = ()=>{
      let val = document.getElementById("select1").value
      
      props.getTime(val)
    }
  
    return (
      <>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Course</label>
          <div className="col-sm-10">
            <select className="form-control" id="select1" onClick={passVal}>
              <option >abs</option>
            </select>
          </div>
        </div>
      </>
    );
}

export default Timeslot