import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({item,fav}) => {

    const {id,title,thumbnail,short_description} = item



    const icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="currentColor"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>




    const favicon = fav ? icon : null

    return (
        <div className="col-md-1 p-2 m-4 game" >
            <Link to={"/game/"+id} className='cleanLink'>
            <img src={thumbnail} alt="" width={300}/>
            <h3>{title}</h3>
            {short_description}
            <div className='faviconCont'>
                <p className='favicon'>{favicon}</p>
            </div>
            </Link>
        </div>
        
    )

}

export default Item;