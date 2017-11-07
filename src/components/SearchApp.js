import React,{Component} from 'react';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import Youtube from 'youtube-api-search';
import Imdb from 'imdb-api';

export default class SearchApp extends Component{
    constructor(props){
        super(props);
        this.state = {
            videoResults: []
        }
    }
    render(){
        return (
            <div>
                <SearchInput onSearchTextChange={this.search} />
                <SearchResults results={this.state.videoResults} />
            </div>
        )
    }

    // getImdbResults(searchInput){
    //     const imdb = require('imdb-api');
    //     //imdb.get(searchInput, {apiKey: '9ddea8cd', timeout: 30000}).then(console.log).catch(console.log);      
    //     imdb.search({
    //         title: 'searchInput'
    //       }, {
    //         apiKey: '9ddea8cd'
    //       }).then(console.log).catch(console.log);  
    // }

    search=(searchInput)=>{
        console.log('searchInput received in app is: ' + searchInput);
        debugger;
        Youtube({key: 'AIzaSyD0CQs-IDQPbMQUJFpANleQKaCDFIw2vUA', term:searchInput}, (searchResponse)=>{
            this.setState({videoResults: searchResponse})
        })
        //getImdbResults(searchInput);
    }
    
    componentDidMount() {
        console.log('componentdidmount for input invoked')
    }
    
    componentDidUpdate(){
        console.log('componentdidupdate for app invoked')
    }
    
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate for app invoked')
        return true;
    }
    
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps for app invoked')
    }
    
    componentWillMount(){
        console.log('componentWillMount for app invoked')
    }
    
    componentWillUpdate(){
        console.log('componentWillUpdate for app invoked')
    }
}

