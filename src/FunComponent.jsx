import  FunctionComponent from "./FunComponent";
const FunComponent =(props) => {
    console.log(props);
    let newDate=new Date()
    let date=newDate.getDate();
    console.log(date);
    var dateNumber=parseInt(date);
    var rand=Math.floor(Math.random()*101)
return(
    dateNumber%2==0
    ? <p>Proizvoljan tekst</p>
    : <p>{rand}</p>
  )
    
    
}

export default FunComponent;
