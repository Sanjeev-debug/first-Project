function Title(){
    let name= "sanjeev"
    return <h1>hello i am {name.toUpperCase()} ...   2 * 3  = {2*3}</h1>// {} in curly braces we can write pure javaScript
  }


  function Sanjeev(){
    return <p>Sanjeev is good</p>
  }


//   export default Title;  //-----------We can change component name where we import it 
export {Title,Sanjeev};   //-- We can not change component name.....