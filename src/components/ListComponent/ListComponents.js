import React from 'react';
import './list.css';
class ListComponents extends React.Component {
    constructor(props){
        super(props)
        this.state  = {
            name: "hosen",
            age: 24
            }
    }
    render () {
        console.log(this.props)
        return (
            <div class="d-flex flex-column ">
                 <h3 style= {{ textAlign: 'center'}}> List to do</h3>
            
                    <div className= "List">
                        
                        <ul id="myUL">
                        
                                <li>Hit the gym</li>
                                <li class="checked">Pay bills</li>
                                <li>Meet George</li>
                                <li>Buy eggs</li>
                                <li>Read a book</li>
                                <li>Organize office</li>
                        </ul>
                    </div>

            </div>
        );
    }
}

export default ListComponents;
