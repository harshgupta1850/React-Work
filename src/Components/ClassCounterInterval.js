import React, { Component } from 'react';

class ClassCounterInterval extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    increaseCount = () => {
        this.setState( (prevState) => ({
            count: prevState.count+1
        }), () => {
            console.log(this.state.count)
        })
    }
    componentDidMount(){
        this.interval= setInterval(this.increaseCount, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default ClassCounterInterval;