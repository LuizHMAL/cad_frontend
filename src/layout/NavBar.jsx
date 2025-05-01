import React from "react";

export default function Navbar(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-success color-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Cad Springboot and React</a>
                    <button 
                        className="navbar-toggler"
                        type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <button 
                        className="btn bt-outline-light"
                    >
                    New User</button>


                </div>
            </nav>
        </div>
  


   );
};