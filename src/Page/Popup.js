import React from 'react';
import PopUp from '../components/PopUp';
import { useState } from 'react';
const CartPage = () => {
  const [ButtonPop,setButtonPop] = useState(false);
  return (
    <div>
       <h1>React Popops</h1>
          <br />
          <button onClick={()=> setButtonPop(true)}>Open Popup</button>
          <PopUp trigger={ButtonPop} setButtonPop={setButtonPop}/>
    </div>
  )
}

export default CartPage