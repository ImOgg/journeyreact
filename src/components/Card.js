import React from 'react'

const Card = ({img,name,dollar}) => {
    return (
        <div>
            <div className="swiper-slide">
                <div className="imgcontainer">
                    <img src={img} alt={name} />
                </div>
                <div className="info">
                    <h3>{name}</h3>
                    <p>TWD<span>{dollar}</span>起</p>
                </div>
            </div>
        </div>
    )
}

export default Card