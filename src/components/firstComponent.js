import React,{Component} from 'react';
import SecondComponent from './secondComponent';

export default class FirstComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            data:"Wasssup dude!"
        }
    }
    render(){
        return(
            <div>
                <div>
                    <h1> First react component </h1>
                    <p>{this.state.data}</p>
                </div>
                <div>
                    <SecondComponent/>
                </div>
                </div>
        );
    }
}