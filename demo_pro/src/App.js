import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      shows:true
    };
    
    this.toggleDiv=this.toggleDiv.bind(this);
 
  }


toggleDiv()
{
    const{shows}=this.state;
    this.setState({shows:!shows});

}


  render() {
    return (
      <div className="App">
        
          <button onClick={this.toggleDiv}>Toggle Button</button>
          <br /> <br />
          {this.state.shows && <Main_div/>}
          <br/>
          <br/>

     

      </div>

    );
  }
}
class Main_div extends Component
{
   constructor()
  {
    super();
    this.state={
      show:true,
      value:''
     };

    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);

  }

  handleSubmit(event)
    {
        const{show}=this.state;
        this.setState({show:!show});
        event.preventDefault();
    }

  handleChange(event)
    {
      this.setState({
          value:event.target.value
        });
        console.log(this.state.value);
    }

  render()
  {
    return(
        <form className="main_div" onSubmit={this.handleSubmit}>
            <label>
         
              <input class="input_style" type="text" value={this.state.value} onChange={this.handleChange} />
             </label>

            <br/>
            <br/>

            <input type="submit" value="Submit" />

            <br/>
            <br/>
            <p>{this.state.value}</p>
          </form>
     
      );
   }
}



export default App;
