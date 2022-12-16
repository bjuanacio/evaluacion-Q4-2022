import Input from "./components/atoms/input/input";
import "./app.scss";
import Button from "./components/atoms/button/button";
import Title from "./components/atoms/title/title";

const App = () => {
  return(
    <>
        <div><Title/></div>
       <div><Input
           value="test"
           name="addInput"
           onChange={()=> console.log("texto agregado")}
           placeholder="Gift URL"/>
        <Button onClick = {() => console.log("Check")}>Agregar</Button>
       </div>
     </>
  );
};
export default App;


