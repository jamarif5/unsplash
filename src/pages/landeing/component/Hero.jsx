import React, { useEffect, useState } from 'react';
import {Main} from "../../../global/style/globalstyled"
import api from '../../../global/utils/api';
import "./Hero.scss"
function Hero() {
  const[background, setBackground]=useState('');

  useEffect(()=>{
api.get('/photos/random').then((res)=>{
setBackground(res.data.links.download)

})
.catch((res)=>{
console.log(res);

});
;

  },[]);
  return (
<Main className='maincontainer' style={{
  backgroundImage:`Url(${background})`
}}>
<div> <h1>Unsplash</h1>
<span>The internet’  source for visuals.
<br/>Powered by creators everywhere.</span>
</div>
</Main>
  )
}

export default Hero