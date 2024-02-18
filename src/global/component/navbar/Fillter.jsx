import React, { useState } from 'react'
import "./navbar.scss"
import {Tab} from "./navbarstyled.js"
const Fillter =() =>{
 const tempData =[ 'WallPaper','nature','3D Render','travel','photo'];
 const [isslected , setIsslected] = useState("");
 return(
  <>
    <div className='filltercontainer'>

      <Tab onClick={()=>setIsslected('editer')}
      isslected ={ isslected.toLowerCase().match('editer'.toLowerCase())} >
        
        editer
      
      </Tab>

      <Tab  onClick={()=>setIsslected('fellowing')}
      isslected ={ isslected.toLowerCase().match('fellowing'.toLowerCase())}
      
      >fellowing</Tab>
<hr/>

{

tempData.map((item,index)=>{


return(
<Tab
key={index}
onClick={()=>setIsslected(item)}
isslected ={ isslected.toLowerCase().match(item.toLowerCase())}

>
  {item}
</Tab>
)






})

}

    </div>
 
    </>
  );
}

export default Fillter
 