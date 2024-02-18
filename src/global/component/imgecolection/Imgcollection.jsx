import React, { useEffect, useRef, useState } from 'react'
import { Main } from '../../style/globalstyled'
import api from '../../utils/api';
import './imgcollection.scss'
function Imgcollection() {
  const loaderDiv = useRef(null)
    const[list, setList] =useState([]);
    const[page , setPage]=useState(1)
    useEffect(()=>{

api.get(`/search/photos?query=office&page=${page}`).then((res)=>{

setList( [...list,...res.data.results])

}).then((err)=>{



});

    },[page ])
   
    useEffect (()=>{

if(list.length>0){

let obs =new IntersectionObserver((entries)=>{
const entry = entries [ 0];
if (entry.isIntersecting) {
  setPage((prev )=> prev + 2)
}

})
obs.observe(loaderDiv.current);
}

    }, [list.length]);


  return (
    <Main className='img-col'>
     {list.map(({links},index)=>{
return(
<img width={'100px'} key={index} src={links?.download} alt="" />
  
  
)
     })}
<div ref={loaderDiv}>

</div>

    </Main>
  )
}

export default Imgcollection