import React, { Component } from "react";

class FooterComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
          
        }
    }
    render(){
        return(
            <div>
                <footer className="footer">
                    <span style={{color:'yellow'}}>test footer</span>
                </footer>

            </div>
        );
    }
}

export default FooterComponent;