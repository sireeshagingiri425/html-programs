// function CssStyle(){
//     return(
//         <button>SIREESHA</button>
//     )
// }
// export default CssStyle;//this is  how we create  normal function

// Creating function by using arrow function,this is the recomended one to create function
// 1.INLINE STYLE
// const CssStyle=()=>{
// return <button style={{color:"white",backgroundColor:"green"}}>SIREESHA GINGIRI</button>
// }
// export default CssStyle;

// 2.INTERNAL CSS
// const CssStyleInternal=()=>{
    // creating obj for the styles
//     const StyleProperty={
//         btnStyle:{
// color:"black",
// backgroundColor:"yellow",
// padding:"10px"
// },
// btntwostyle:{
// borderRadius:"5px",
// border:"2px solid gray",
// backgroundColor:"green",
// color:"white"
// }
//     };
//   return(
//     <div>
//       <button style={StyleProperty.btnStyle}>Sireesha</button>
//       <button style={StyleProperty.btntwostyle}>GINGIRI</button>
//     </div>
    
//   ) ;
// }
// export default CssStyleInternal;


// 3.EXTERNAL CSS
// import "./Pstyle.css"//Direct import
//  const Pstyle=()=>{
//   return(
//     <p className="Paragraph">Hello every one iam sireesha</p>
//   )
//  }
//  export default Pstyle;

// 4.MODULE CSS
//module css the file extention should be always "filename.module.css"
// When it comes to module css  it's a named 
import  xyz from"./ButtonStyle.module.css"

 const ButtonStyle=()=>{

  return(
    <button className={xyz.button}>RAMA</button>
    
  );
 }
 export default ButtonStyle;