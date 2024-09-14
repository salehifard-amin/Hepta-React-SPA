import { Fragment } from "react";
import "./style.css"

export default function PageHero( { title , link , image } ) {
  return (
    <Fragment>
      <div className="page-hero  flex justify-center align-center" style={ { backgroundImage: `${image}`} }  >
        <div className="content text-center pos-relative">
          <div className="container">
            <h1 className="heading"> { title } </h1>
            <p>A free template by {link}. Download and share!</p>  
             
          </div>
        </div>
      </div>
    </Fragment>
  );
}
