import logo from './logo.svg';
import './App.css';
import react from 'react';

class App extends react.Component {
  constructor(props){
    super(props);

    this.state = {
      counter: 0,
      "id":"1",
      "jobTitleName":"Developer",
      "firstName":"Ahmed",
      "lastName":"Ali",
      "preferredFullName":"Ahmed Ali",
      "employeeCode":"E1",
      "region":"CA",
      "phoneNumber":"408-1234567",
      "emailAddress":"ahmed.ali@gmail.com"

    }

  }

  increaseCounter(){
    this.setState( (prevState)=>{
      return {
        counter: prevState.counter + 1 
      }
    })
  }

   render(){
     const { counter , id, jobTitleName, firstName, lastName, preferredFullName, employeeCode, region, phoneNumber, emailAddress} = this.state
    return (
      <div className="App">
        <h1 style={{"display": "inline-block"}}> {counter} </h1> <button onClick={()=>{this.increaseCounter()}}>increase counter</button>
        <div style={{ "display": "flex", "flex-wrap": "wrap", "justify-content": "space-evenly"}}>
          <h1>{id}</h1>         
          <h1>{jobTitleName}</h1>         
          <h1>{firstName}</h1>         
          <h1>{lastName}</h1>         
          <h1>{preferredFullName}</h1>         
          <h1>{employeeCode}</h1>         
          <h1>{region}</h1>         
          <h1>{phoneNumber}</h1>         
          <h1>{emailAddress}</h1>         
        </div>
      </div>
    );


  }
}

export default App;
