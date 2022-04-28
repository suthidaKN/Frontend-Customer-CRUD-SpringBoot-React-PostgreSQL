import React, { Component } from "react";
import CustomerService from "../server/CustomerService";

class CreateCustomerComponent extends Component{
    constructor(props){
        super(props)

        this.state = {
            name:'',
            id:''
        }
        this.changIdHandler = this.changIdHandler.bind(this);
        this.changNameHandler = this.changNameHandler.bind(this);
    }

    changNameHandler=(event) =>{
        this.setState({name : event.target.value});
    }

    changIdHandler=(event)=>{
        this.setState({id : event.target.value});
    }

    saveCustomer = (e) =>{
        e.preventDefault();

        let customer = {name :this.state.name,id:this.state.id};
        // console.log('customer => '+JSON.stringify(customer));

        CustomerService.createCustomer(customer).then((res) => {
            this.props.history.push('/cus');
        });

    }
    cancel(){
        this.props.history.push('/cus')
    }
    render(){
        return(
            <div>
                <div className="container" style={{height:'650px'}}>
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{marginTop:'50px',padding:'50px'}}>
                            <h3 className="text-center">Add Customer</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label style={{marginTop:'10px'}}> ID </label>
                                        <input placeholder="ID..." name="id" className="form-control" value={this.state.id} onChange={this.changIdHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label style={{marginTop:'20px'}}> Name </label>
                                        <input placeholder="Name..." name="name" className="form-control" value={this.state.name} onChange={this.changNameHandler}/>
                                    </div>
                                    <div style={{marginTop:'15px'}}>
                                        <button className="btn btn-success" onClick={this.saveCustomer.bind(this)}> save </button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}> cancel </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCustomerComponent;