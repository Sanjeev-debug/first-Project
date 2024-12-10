import "./App.css"
// import Title from "./Title";
import { Title } from "./Title";
import { Sanjeev } from "./Title.jsx";  // "./Title" and   "./Title"  we an use both syntax




function app(){
  return (
  <>  //  this is the react-fragment
     <Title/>
     <Sanjeev/>
 
  </>
  
  );
}

export default app;
// we can not use  --- Class --- attributes   because this is the pre-define keyword in JAVASCRIPT then we can use className attributes