import React, {Component} from 'react';
import logo from './me.jpg'

class HomePage extends React.Component{
    render() {
        return(
            <div className="container">
                <div className="title">Lillian McClelland</div>
                <img src={logo} style={{width: 650}} className="picture" />
            </div>
        )
    }
}
export default HomePage;
