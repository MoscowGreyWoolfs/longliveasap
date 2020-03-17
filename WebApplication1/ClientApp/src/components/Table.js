
import React, { Component } from 'react';

export class DataTable extends Component {
    static displayName = DataTable.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.DataTable();
    }

    static renderDataTable(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Posts</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.id}>
                            <td>{forecast.id}</td>
                            <td>{forecast.name}</td>
                            <td>{forecast.age}</td>
                            <td>{forecast.gender}</td>
                            <td>{forecast.posts}</td>
                            <td>{forecast.comments}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : DataTable.renderDataTable(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Data</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async DataTable() {
        const response = await fetch('DataTable');
        const data = await response.json();
        this.setState({ forecasts: data, loading: false });
    }
}
