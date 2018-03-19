import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      list:[],
      toggle:[],
      data:'',
      rem:'',
      show:true,
      currentItem:''
    }
    this.updateData = this.updateData.bind(this);
    this.addData = this.addData.bind(this);
    this.changeData = this.changeData.bind(this);
    this.cancelData = this.cancelData.bind(this);
  
  };

  updateData(e){
    this.setState({
      data:e.target.value
    });
  }
  addData(e){

    if(this.state.data!==''){
    this.setState({

       list: this.state.list.concat(this.state.data),
       toggle:this.state.toggle.concat(false),
       data:''
    })
   }
  }
  deleteData(item,i)
  {
    this.setState({
     rem:this.state.list.splice(i,1)
    })
  }

   editData(item,i)
  {
     
    this.setState({
     data:item,
     show:false,
     currentItem:i,
     rem:this.state.toggle.splice(i,1,true)
    })
  }
  
  changeData()
  {
    var i=this.state.currentItem;
    this.setState({
     rem : this.state.list.splice(i,1,this.state.data),
     rem:this.state.toggle.splice(i,1,false),
     data:'',
     show:true
     })
  }
  cancelData()
  {
     var i=this.state.currentItem;
    this.setState({
     data:'',
     rem:this.state.toggle.splice(i,1,false)
    })
  }
  render() {
    return (
    <div className="jumbotron container">

       <h1 className="center">TODO APP</h1> 
       <p className="center">start keeping your work.. </p> 
       <br/>

    <div className="row">

      <input className="col-sm-8 form-control" type="text" name="data" value={this.state.data} onChange={this.updateData} />
        
        {this.state.show?<button class="btn btn-info col-sm-2" onClick={this.addData}>Add</button>:<button  className="btn btn-success col-sm-2" onClick={this.changeData}>Change</button>}
     
        <button className="btn btn-danger col-sm-2" onClick={this.cancelData}>Cancel</button>

      </div>
      <br/>
        <ul className="list-group">
         {this.state.list.map((item,i) =>
          <li  className="list-group-item list-group-item-danger" key={i}>
            
            {item}
             <button className="btn btn-primary" disabled={this.state.toggle[i]} onClick={this.editData.bind(this,item,i)}>Edit</button>
              <button className="btn btn-warning"  disabled={this.state.toggle[i]} onClick={this.deleteData.bind(this,item,i)}>Delete</button>
          </li>)}
          </ul>
        </div>
    );
  }
}

export default App;
