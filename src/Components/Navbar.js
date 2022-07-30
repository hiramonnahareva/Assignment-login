import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
    
      <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid px-5 py-2">
        <a className="navbar-brand logo  px-5" href="#">Vouch Digital</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"></a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled"></a>
            </li>
          </ul>
          <div className=" my-2 my-lg-0  px-5 mx-5">
      <button className="trial-btn mx-4" type="submit">Start Free Trial</button> 
       <button className=" login-btn my-2 my-sm-0" type="submit">Login</button> 
   </div>
        </div>
      </div>
    </nav>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand mx-5" href="#">Navbar</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent mx-5">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Link</a>
//       </li>
//       <li className="nav-item dropdown">
//         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//           Dropdown
//         </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//           <a className="dropdown-item" href="#">Action</a>
//           <a className="dropdown-item" href="#">Another action</a>
//           <div className="dropdown-divider"></div>
//           <a className="dropdown-item" href="#">Something else here</a>
//         </div>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link disabled" href="#">Disabled</a>
//       </li>
//     </ul>
//     <div className=" my-2 my-lg-0">
//       <button className="trial-btn mx-4" type="submit">Start Free Trial</button> 
//       <button className=" login-btn my-2 my-sm-0" type="submit">Login</button> 
//     </div>
//   </div>
// </nav>
    );
};

export default Navbar;