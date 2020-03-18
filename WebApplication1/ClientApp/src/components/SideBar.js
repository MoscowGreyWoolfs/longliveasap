import React from "react";
import Sidebar from "react-sidebar";

export class SideBar extends React.Component{
    static displayName = SideBar.name;

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        
    }

  

    render() {
        return (
            <Sidebar
                sidebar={<b>Sidebar content</b>}
                docked={true}
                dimmed={false}
                open={true}
                pullRight={true}
                shadow={false}
                touch={false}
                
                styles={{ sidebar: { background: "white" } }}
            >
                
            </Sidebar>
        );
    }
}


