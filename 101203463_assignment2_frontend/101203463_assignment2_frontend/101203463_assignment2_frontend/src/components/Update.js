import React, { Component } from 'react'
import axios from 'axios';


export default class Update extends Component {

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
        axios.get(base_url + this.props.match.params.id)
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

        axios.put(base_url + this.props.match.params.id, employees)
            .then(res => console.log(res.data));

    }

    render() {
        return (
            <div>
                <br /><br /><br />
                <h1>Update Employee</h1>
                <br />
                <div >
                    <div>
                        <div>
                            <div>
                            </div>
                            <div>
                                <form onSubmit={this.onSubmit} action="/view">

                                    <div>
                                        <label>First Name </label>
                                        <input
                                            type="text"
                                            value={this.state.firstName}
                                            onChange={this.onChangeFirstName}
                                        />
                                    </div>

                                    <div>
                                        <label>Last Name </label>
                                        <input
                                            type="text"
                                            value={this.state.lastName}
                                            onChange={this.onChangeLastName}
                                        />
                                    </div>

                                    <div>
                                        <label>Email </label>
                                        <input type="text"
                                            required
                                            value={this.state.emailid}
                                            onChange={this.onChangeEmailid}
                                        />
                                    </div>

                                    <div>
                                        <input type="submit" value="Submit" />
                                    </div>
                                </form>
                                <a href="/view"><button>Cancel</button> </a>

                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
