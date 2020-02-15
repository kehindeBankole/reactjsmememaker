import React, { useState } from 'react';
import './App.css';
import first from './1.png'
import second from './2.jpg'
import third from './3.jpg'
import fourth from './4.jpg'
import fifth from './5.jpg'
import sixth from './6.jpg'

const App = () => {
  const [bg,setbg] = useState();
  const[bottomtext , setbottomtext] = useState();
  const[toptext , settoptext] = useState();
  const[showinput , setshowinput] = useState(false)
  const[currentimage , setcurrentimage]=useState()
  const[modal , showmodal] = useState(false)
  const imgs=[first , second , third , fourth , fifth , sixth]
  const style1 = {
    backgroundImage: `url(${bg})`,
    height: "500px" , 
    width : "100%",
    backgroundSize:"cover",
    backgroundRepeat : "no-repeat",
    backgroundPosition:"center",
    position:"relative"
  }
  const textbottom={
    position:"absolute",
    bottom:"20%",
    left:"50%",
    color:"black",
    fontSize : "25px",
    fontWeight:"900",
    maxWidth : "200px"
  }
  const texttop={
    position:"absolute",
    top:"20%",
    left:"50%",
    color:"black",
    fontSize : "25px",
    fontWeight:"900",
    maxWidth : "200px"
  }
  const inputstyle={
    height:"80px",
    width:"400px",
    fontSize:"25px"
  }

const handlebottomtext=(e)=>{
setbottomtext(e.target.value)
}
const handletoptext=(e)=>{
  settoptext(e.target.value)
  }
  return (
    <div className="w3-container">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <div className="w3-row">
      {
         imgs.map((label)=>{
             return (
               <div className="w3-col s12 m4" onClick={()=>{
                setbg(label)
                setshowinput(true)
                showmodal(true)
               setcurrentimage(label)
               }}>
                 <img src={label} width="500" className="" style={{width:"100%" , height:"500px"}}alt="logo" />
               </div>
             )
         })
       }
      </div>
     

      <div id="id01" className="w3-modal" style={{display:modal?"block":"none"}}>
  <div className="w3-modal-content">
    <div className="w3-container">
      <span onClick={()=>showmodal(false)} className="w3-display-topright w3-button w3-red">close</span>
     
     <div className="w3-row w3-padding-64">
       <div className="w3-col s6">

      <div style={{}}>
        <div style={{display:showinput?"block":"none" , bottom:"0" , position:"absolute"}}>
          
            <label>bottom text</label>
            <input type="text" onChange={handlebottomtext} className="w3-input" style={inputstyle}/>
        </div>
        <div style={{display:showinput?"block":"none" , top:"0"}}>
            <label>top text</label>
            <input type="text" onChange={handletoptext} className="w3-input" style={inputstyle}/>
        </div>
      </div>
     
      </div>
     
<div className="w3-col s6">
<div>
  <div style={{position:"relative"}}>
<img src={currentimage} width="500" className="w3-image w3-margin-right mos" height="500" alt="logo" />
</div>
      <div style={textbottom}>
        {bottomtext}
      </div>
      <div style={texttop}>
        {toptext}
      </div>
      </div>
</div>
      
     </div>


    </div>
  </div>
</div>

    </div>
  );
}

export default App;
