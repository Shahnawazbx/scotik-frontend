import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="container">
             <a className="navbar-brand navbar-logo" to="/" style={{color:"white",fontSize:"36px",fontWeight:600,fontStyle:"italic"}}> 
          {/*  <img src="images/logo.png" alt="logo" className="logo-1" /> */} Scotik.com </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item"> <a className="nav-link" href="" data-scroll-nav="0">Home</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="1">Cources</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="2">Test Series</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="3">Tutors</a> </li>
                <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="6">Sign Ip</a> </li>
            </ul>
            </div>
        </div>
    </nav>
);

export default Navbar;