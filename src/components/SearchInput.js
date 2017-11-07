import React,{Component} from 'react';

export default class SearchInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchText: ""
        }
    }
    render(){
        return (
            <div>
                <label htmlFor="searchText">
                    Search searchText
                </label>
                <input id="SearchText" //value={this.state.searchText} 
                onChange={e=>this.onInputChange(e)} />
            </div>
        )
    }
    onInputChange(e){
        this.setState({searchText: e.target.value})
        this.props.onSearchTextChange(e.target.value);
    }
    
    componentDidMount(){
        console.log('componentdidmount for input invoked')
    }
    
    componentDidUpdate(){
        console.log('componentdidupdate for input invoked')
    }
    
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate for input invoked')
        return true;
    }
    
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps for input invoked')
    }
    
    componentWillMount(){
        console.log('componentWillMount for input invoked')
    }
    
    componentWillUpdate(){
        console.log('componentWillUpdate for input invoked')
    }
}

