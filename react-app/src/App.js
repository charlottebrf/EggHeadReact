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
    }
    render(){
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }

    componentDidMount(){
        console.log('ComponentDidMount')
    }

    componentWillUnMount(){
        console.log('ComponentWillUnmount')
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