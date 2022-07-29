import React from 'react'
// import './Card.css'
import './CardTemplateStyle.css'
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
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
            <figure className="effect-ming tm-video-item">
                <img src={children.owner.logo_symbol_url} alt="Logo of selected airline" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                    <h2>{children.owner.name}</h2>
                    <a href="photo-detail.html">{children.owner.iata_code}</a>
                </figcaption>
            </figure>
            <div className="d-flex justify-content-between tm-text-gray">
                <span className="tm-text-gray-light">18 Oct 2020</span>
                <span>9,906 views</span>
            </div>
        </div>
    )
}

export default Card