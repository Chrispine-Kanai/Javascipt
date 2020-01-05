import React, {Component} from 'react';

 class Application extends Component {

    //Only run when the Application component is instantiated 
    //and not every time it re-renders
    constructor(props){
        super(props);

    }

    componentWillMount(props, state){

    }

    componentDidMount(props, state){
        console.log("Mounted with", props, state);
    }

    componentWillReceiveProps(props){

    }

    componentWillUpdate(props, state){
        if (this.props.name !== props.name) {
            //Do Something
        }
    }

    componentDidUpdate(Props, state){
        
    }

    
    render(){

        let myName = "Chrispine Kanai"
        return (
            <div>
                <h1>Hello, {myName}</h1>
                <span>Yolo</span>
            </div>
        );
    }
 }

 export default Application;