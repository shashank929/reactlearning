import React from 'react';

const SearchResultItem=(props)=>{

   return (

    <div className="video-list media">
        <div className="media-left">
            <img className="media-object"
                src={props.item.snippet.thumbnails.default.url}/>
        </div>
        <div className="media-body">
            <div className="media-heading">
                {props.item.snippet.title}
            </div>
        </div>
    </div>
   )


}

export default SearchResultItem;