import React, { Component } from 'react';


export class VKFriends extends Component {
    static displayName = VKFriends.name;

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true };

    }



    componentDidMount() {
        this.VKFriends();

      
    }

    static renderVKFriends(items) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>first_name</th>
                        <th>last_name</th>                  
                        <th>domain</th>
                        <th>city</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(x =>
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>                       
                            <td>{x.domain}</td>
                            <td>{x.city.title}</td>
                 
                       
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
           //<td>{(f => { var t = (x.city != null) ? x.city.title : 0; })}</td>
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : VKFriends.renderVKFriends(this.state.items);

        return (
            <div>
                <h1 id="tabelLabel" >Freinds list</h1>
                {contents}

            </div>
        );
    }

    async VKFriends() {
        const responseb = await fetch('vk');
        const data = await responseb.json();
        this.setState({ items: data, loading: false });
    }
}
