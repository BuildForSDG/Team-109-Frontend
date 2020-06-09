import React, { Component } from 'react';

    
class Donor extends Component {
    render() {
        
        return (
           <div>
                <div className="container-fluid bg-warning">
               <div className ="row pa4" >
              <h3  className ="col-sm-8 text-white center ma4">Join 100,000+ people raising money for personal causes <br/> on BSDG crowdfunfing</h3>
               <div className="center ma4">
                   <a href="/donor" className="bg-white text-warning pa3 pointer">Become a Donor </a>
               </div>
               </div>
                
            </div>
           </div>
        )
    }
}

export default Donor;
