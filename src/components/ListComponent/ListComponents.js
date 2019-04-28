import React from 'react';
import './list.css';
class ListComponents extends React.Component {
    constructor(props){
        super(props)
        this.state  = {
            name: "hosen",
            age: 24,
            todo: "",
            id: 4,
            todos: [
                {id: 1,text: "work", complete: false },
                {id: 2,text: "play", complete: false },
                {id: 3,text: "sleep", complete: false }
            ]
         }
    }
    handleClick = (id) => {
        const todos = this.state.todos.map(todo => todo.id == id ? {...todo, complete: !todo.complete} : todo)
        this.setState({ todos })
    }
    btnClick = () => {
        if (this.state.todo != "") {

        //console.log();
        const todos = [...this.state.todos, {id: this.state.id++,text: this.state.todo, complete: false }]
        this.setState({ todos: todos , todo: "" })
        
        } 
    }
    removeClick = (id) => {
        var todos =  this.state.todos
        todos = todos.filter(item =>  id !== item.id);
        this.setState({todos})
    }
    render () {
        return (
            <div className="container d-flex flex-column ">
                 <h3 style= {{ textAlign: 'center'}}> List to do</h3>

                 <h6 style= {{ textAlign: 'center'}}> 
                  <div className="d-flex justify-content-center mt-5 mb-5">
                  <input  className="form-control  w-50" onChange= {e => this.setState({todo: e.target.value})} value= {this.state.todo} type="text" name="name" placeholder= "Add to do"/>
                  <button onClick= {this.btnClick} style= {{ marginLeft: '10px'}} type="button" className="btn btn-primary">Add</button>
                  </div>
                 </h6>
                    <div className= "list">
                    <ul className="list-group"> 
                    {
                        this.state.todos.map((item, i) => {
                            return <li className="list-group-item " key={i}>
                                <div style={{flexDirection: 'column'}}>
                                    <div class="row">
                                        <div className="col-11">
                                        <input type="checkbox" className="mr-2" value= {item.complete} onChange={(e) => this.handleClick(item.id)}/>   
                                            <span className={item.complete ? 'line-through' : ''}>
                                            {item.text} 
                                            </span>
                                        </div>
                                        <div className="col-1">
                                          <button onClick= {(e) => this.removeClick(item.id)}  style= {{ alignSelf: 'right'}} type="button" className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                        </div>   
                                    
                                    </div>
                         
                                </div>
                            </li>
                          })
                    }
                    </ul>
                    </div>

            </div>
        );
    }
}

export default ListComponents;

