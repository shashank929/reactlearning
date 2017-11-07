import React,{Component} from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResults=(props)=>{
        const resultItems = props.results.map((result)=>{
            return (
                <SearchResultItem item={result} key={result.etag} />
            )
        });
        return(
            <ul className="col-md-4 list-group">
                {resultItems}
            </ul>
        );
}
export default SearchResults;