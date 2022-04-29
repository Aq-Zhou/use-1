import React, {useEffect, useState} from "react";
import useUpdate from "./useUpdate";


const App = (props) => {
  const [n,setN] = useState(0);

  // useUpdate(()=> {
  //   console.log('change')
  // })

  useEffect(()=> {
    console.log('点击');
  })

  return(
    <div>
      {n}
      <button onClick={() => {setN(n + 1)}}>
        +1
      </button>
    </div>
  )

}



export default App;
