import React, { Component }from "react";
import './style.css';

export default class Book extends Component {
    render(){
        return (
            <div className="book">  
                <h4>Book Name</h4>
                <h5>Description:</h5>
                <p>
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos eveniet distinctio veritatis laborum itaque!
                </p>
            </div>
        )
    }
}
