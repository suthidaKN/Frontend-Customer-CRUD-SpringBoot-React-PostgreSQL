import React, { Component } from "react";

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
           
        }
    }
    render(){
        return(
            <div>
                <header>
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a class="navbar-brand" href="https://docs.konghq.com/gateway/2.7.x/install-and-run/centos/" style={{marginLeft:'20px'}}> ไปติดตั้ง kong ก่อนนน!!</a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;