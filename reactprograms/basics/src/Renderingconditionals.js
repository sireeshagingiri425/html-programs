import React from 'react'

const Renderingconditionals = () => {
  
  //   let age=19;
  //   if(age>=18){
  //      return(
  //  <div> 
  //      <h2>Eligible for voting</h2>
  //      <h2>All the best</h2>
  //  </div>
  //  // why i use div here is the return statement must be in the single parent
  //      );
  //     }
  //    else{
  //      return <h2>Not eligible for voting</h2>
       
  //    } 
     
  //  method :2

  let age=17;
  return((age>=18)?(<h1>Eligible for voting</h1>):(<h2>Not eligible for votiong</h2>));
  
   };
   

export default Renderingconditionals;




