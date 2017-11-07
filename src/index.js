import Customer from "./module1/customer";
import React,{Component} from 'react';

import ReactDOM from 'react-dom';

import FirstComponent from './components/firstComponent';
import SearchApp from './components/SearchApp';

console.log("*****" +new Customer());

//ReactDOM.render(<FirstComponent />, document.querySelector(".container"));
ReactDOM.render(<SearchApp />, 
    document.querySelector(".container"));

