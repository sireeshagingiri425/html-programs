import React from 'react'

 const Validations = () => {

    const handelchange=(i)=>{
      console.log(i.target.value);
        
    }
     const handleSubmit=(i)=>{
        i.preventDefault();

        console.log("Form submited successfully.......!");
        
     }
  return (
    
    <div>
        <h1>Form validayion</h1>
<div className='container'></div>
<div className='row'></div>
<div className='col-md-4' ></div>
<div className='col-md-4'></div>

        <form  onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your  first name" className= 'form-control mt-4 w-25 ms-5' onChange={handelchange} />
            <input type="text" placeholder="enter your last name" className= 'form-control mt-4 w-25 ms-5' onChange={handelchange}/>
            <input type="email" placeholder="enter your email" className= 'form-control mt-4 w-25 ms-5' onChange={handelchange}/>
            <input type="password" placeholder="enter your password"  className= 'form-control mt-4 w-25 ms-5'onChange={handelchange}/>
            <button className='btn btn-primary ms-5 mt-4'>Submit</button>
        </form>
        
    </div>
  )
}
export default Validations;

