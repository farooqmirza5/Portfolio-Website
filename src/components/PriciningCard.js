import { Link } from "react-router-dom";
import "./PriciningCardStyles.css";

import React from 'react'

const PriciningCard = () => {
  return (
    <div className="pricing">
    <div className="card-container">
    <div className="card">
        <h3>- Basic -</h3>
        <span className="bar"></span>
        <p className="btc">$10</p>
        <p>- 3 Days -</p>
        <p>- 3 Pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Design -</p>
        <Link to="/contact" className="btn">
            PURCHASE NOW
        </Link>
    </div>

    <div className="card">
        <h3>- Premium -</h3>
        <span className="bar"></span>
        <p className="btc">$20</p>
        <p>- 2 Days -</p>
        <p>- 5 Pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Design -</p>
        <Link to="/contact" className="btn">
            PURCHASE NOW
        </Link>
    </div>

    <div className="card">
        <h3>- Bussiness -</h3>
        <span className="bar"></span>
        <p className="btc">$30</p>
        <p>- 5 Days -</p>
        <p>- 8 Pages -</p>
        <p>- Featured -</p>
        <p>- Responsive Design -</p>
        <Link to="/contact" className="btn">
            PURCHASE NOW
        </Link>
    </div>

    </div>
    </div>
  )
}

export default PriciningCard;