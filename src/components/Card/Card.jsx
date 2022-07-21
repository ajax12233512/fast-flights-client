import React from 'react'
import './Card.css'
function Card({ children }) {

    /* .property-image
{
  height:6em;
  width:14em;
  padding:1em 2em;
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  background-image:url('https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg');
  background-size:cover;
  background-repeat:no-repeat;
} */


    const projectImageStyle = {
        height: 6,
        width: 14,
        padding: '1em 2em',
        position: 'Absolute',
        top: '0px',
        transition: 'all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)',
        backgroundImage: `url(${children.owner.logo_symbol_url})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="center">
            <div className="property-card">
                <a href="/">
                    <div className="property-image" style={projectImageStyle}>
                        <div className="property-image-title">

                        </div>
                    </div></a>
                <div className="property-description">
                    <h5>{children.owner.name}</h5>
                    <p>{children.owner.iata_code}</p>
                </div>
                <a href="/">
                    <div className="property-social-icons">
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Card