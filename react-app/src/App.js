import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {increasing: false}
    }
    update(){
        ReactDom.render{
            <App val={this.props.val+1}/>, document.getElementById('root'))
        }
        componentWillReceiveProps(nextProps){
            this.setState({increasing: nextProps.val > this.props.val})
        }
    }
    render(){
        console.loh(this.state.increasing)
        return(
            <button onClick={this.update.bind(this)}>
                {this.props.val}
                </button>
        )
    }
}

App.defaultProps = {val: 0}

export default Wrapper