import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {val: 0}
        this.update = this.update.bind(this)
    }
    update() {
        this.setState({val: this.state.val + 1 })
    }
    componentWillMount(){
        console.log('ComponentWillMount')
        this.setState({m: 2})
    }
    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val * this.state.m}</button>
    }

    componentDidMount(){
        console.log('ComponentDidMount');
        this.inc = setInterval(this.update, 500)
    }

    componentWillUnMount(){
        console.log('ComponentWillUnmount')
        clearInterval(this.inc)
    }
}

class Wrapper extends React.Component {
    mount() {
        ReactDom.render(<App/>, document.getElementById('a'))
    }
    unmount() {
        ReactDom.unmountComponentAtNode(document.getElementById('a'))
    }
    render(){
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>UnMount</button>
                <div id="a"></div>
            </div>
        )
    }
}

export default Wrapper