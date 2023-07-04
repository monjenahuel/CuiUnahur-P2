import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({item}) => {

    const {id,title,thumbnail,short_description,game_url,genre,platform,publisher,developer,release_date} = item

    return (
        <div className="col-md-1 p-2 mb-4 mt-4 game" >
            <Link to={"/game/"+id} className='card-link'>
            <img src={thumbnail} alt="" width={300}/>
            <h3>{title}</h3>
            {short_description}
            </Link>
        </div>
        
    )

}

export default Item;