import React, { Component } from 'react'
import axios from 'axios';



export default class Create extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            emailid: '',
            employee: []
        }
    }



    componentDidMount = () => {
        axios.get(base_url)
            .then(response => {
                this.setState({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    emailid: response.data.emailid
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get(base_url)
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        employee: response.data.map(employee => employee.firstName),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    onChangeEmailid = (e) => {
        this.setState({
            emailid: e.target.value
        })
    }
    onSubmit = (e) => {

        const employees = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailid: this.state.emailid
        }

        console.log(employees);

        axios.post(base_url, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <h1>Create Employee</h1>
                <br />
                <div className="row">
                    <div className="container col-md-8 mx-auto">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col-6">
                                <form onSubmit={this.onSubmit} action="/view">

                                    <div className="form-group">
                                        <label>First Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.firstName}
                                            onChange={this.onChangeFirstName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={this.state.lastName}
                                            onChange={this.onChangeLastName}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email </label>
                                        <input type="text"
                                            required
                                            className="form-control"
                                            value={this.state.emailid}
                                            onChange={this.onChangeEmailid}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Submit" className="btn btn-info" />
                                    </div>
                                </form>

                                <a href="/view"><button className="btn btn-danger" >Cancel</button> </a>

                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div >

            </div >
        )
    }
}
