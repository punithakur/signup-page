import React, { useEffect } from 'react'
import $ from 'jquery'

const Time = (props)=>{
  
    useEffect(()=>{
        listUpdate()
        dataFilter()
    },[props.course] )

    const HtmlSelectTag = (s1)=>{
       var option = document.createElement("option");
       option.innerHTML = s1;
       var atr = document.createAttribute("value");
       atr.value = s1;
       document.getElementById("select1").appendChild(option);
   }
   const  listUpdate = ()=>{
      $("#select1").empty();
      $("#select1").append("<option> Select Any Time-Slot </option>");
        
    }
   const TimeConvert = (slot)=>
   {   
       let slt = new Date(slot).toLocaleTimeString()
       //let h = new Date().getHours()+4
       let h =11
       let s1 = slt.split(" ")
       let s2 = slt.split(":")
       s2 = Number(s2[0])
       var x;
       console.log(slt);
       console.log("this is same date")
       if (h > 12 ? (x = 1) : (x = 0))
        console.log(x);
       if (h > 12 && s1[1] === "PM" && (h - 12) < s2 && s2 !== 12) {
           console.log(slt)
           HtmlSelectTag(slt);
         }

       if ((h < s2 || s1[1] === "PM") && x === 0) {
           
         HtmlSelectTag(slt);
       }

   }

   const dataFilter = ()=>{
       
       for ( var i of props.data)
       {
           if(i.course_name===props.course)
           {

               for ( var j of i.slots)
               {
                   
                   TimeConvert(Number(j.slot));
               }
           }
       }
   }
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
)
}

export default Time