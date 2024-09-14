
import './App.css';//direct import
import CssStyle from './CssStyle';//named import
import PropsExample from './PropsExample';
import VirtualDom  from './VirtualDom';//named import
import VirtualDomtwo from './VirtualDomtwo';//named import
import Keyslists from './Keyslists';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Renderingconditionals from './Renderingconditionals';
import Validations from './Validations';
function App() {
//   let userArray = [1, 2, 3];
//   let Person={
//     name:"siri",
//     age:25,
//     gender:"female"
//  }
  return (
    
    <div  className='demo'>
      
      {/* <VirtualDomtwo/>
       <p>hello every one</p> 
       <VirtualDom/>
      <VirtualDomtwo/> 
      <CssStyle/> */}

      {/* This is for "PROPS " examples */}
   
      {/* <PropsExample arrayValue={userArray} objperson={Person}/> */}
{/* <Keyslists/> */}
{/* <Renderingconditionals/> */}
<Validations/>
    </div>
  );
}

export default App;
