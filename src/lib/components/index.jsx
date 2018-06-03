import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 42
    }
    asyncFunction = () => {
        return Promise.resolve(37);
    }
    async componentDidMount() {
        this.setState({
            answer: await this.asyncFunction()
        });
    }
    render() {
        return (
          <h2>Hello react Component -- {this.state.answer}</h2>  
        );
    }
}


ReactDOM.render( 
    <App /> ,
    document.getElementById('root')
)