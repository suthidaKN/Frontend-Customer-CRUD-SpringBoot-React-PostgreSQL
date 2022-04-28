import React, { Component } from "react";
import CustomerService from "../server/CustomerService";

class ListCustomerComponent extends Component{

    constructor(props){
        super(props)

        this.state = {
            customer : [],

        }
    }


    componentDidMount(){
        CustomerService.getCustomer().then((res) => {
            this.setState({customer:res.data});
        });
    }

    addCus(){
        this.props.history.push('/add-customer');
    }

    render(){
        return(
            <div >
                <h2 style={{marginTop:'50px'}} className="text-center">Customer</h2>
                <form>
                    <div className="form-group">
                        <button className="btn btn-primary" onClick={this.addCus.bind(this)} style={{margin:"20px",backgroundColor:'#6100aa'}}> Add Customer </button>
                    </div>
                </form>
                <div className="row">
                    <table className="table table-striped table-bordered" >

                        <thead>
                            <tr>
                                <th>Customer ID</th>
                                <th>Customer Name</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.customer.map(
                                    customer =>
                                    <tr key = {customer.id}>
                                        <td> {customer.id}</td>
                                        <td> {customer.name}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>


                </div>
                

            </div>
        );
    }
}

export default ListCustomerComponent