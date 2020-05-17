import React, { Component } from 'react';
import {Data} from "./Data";

export class Youthproject extends Component {
    constructor(props){
        super(props);
        this.state ={
                search : "",
                amount : 0.00,
        }
        this.onSearchField = this.onSearchField.bind(this)
    }
    onSearchField(e){
       this.setState({[e.target.name]:e.target.value})
    }

    render(    ) {
        
        return (
            <div className="container center mb3">
                <div className="row mt5">
                   <div className="col-sm">
                       <img src={process.env.PUBLIC_URL + '/images/alc_acad.jpg'} alt="alc_acad" />
                        <div className="mt4" ><h5 className="tc">Youth Training Project</h5></div>
                        <div  className="offset-4 mt4">
                            <span  className="border pa2  ">#</span> 
                           <input className="pa1 w-20 " type="text" name ="amount" onChange={this.onSearchField} placeholder="$1.00" />
                        </div>
                        <div className="mt4 w-20">
                            <span className="bg-warning pa2">{this.state.amount}</span>
                            <span className="ma1 pa2 bg-warning">Amount</span>
                        </div>
                        <div  className="offset-4 mt4">
                           <input className="bg-warning pa2" type="submit" value="Donate Now" />
                        </div>
                        <hr/>
                        <em className="ma3">comments </em>
                   </div>
                   <div className="col-sm">
                       <h3>What is Crowd-Funding about?</h3>
                       <p>
                            Crowdfunding is a new type of fundraising where you can raise funds for your own personal cause, 
                            even if you're not a registered charity.
                       </p>
                       <a href="#" className="ml-auto hover-yellow">BE A VOLUNTEER</a>
                       <div className="pa3 w-70 bg-gray">
                           <input className="bg-warning pa2 w-70" type="text" name ="search" onChange={this.onSearchField} placeholder="Search here" />
                       </div>
                       <div>
                          <div>
                            <h5>Categories</h5><hr className="bg-warning"/>
                            <p className="text-muted pa2">No Categories</p>
                          </div>
                           <h5>Upcoming Event</h5><hr className="mb5 bg-warning"/>
                           <div>
                               <h5>Latest Donations</h5><hr className="bg-warning"/>
                               {
                               Data.map(item =>
                                        <div className="row"  key={item.id}>
                                            <img className="col-sm-3 mb3" src={item.imageSrc} alt="cardImage" width='100px' />
                                            <div>
                                                <h6 className="pointer">{item.category}</h6>
                                                <p>₦ 0 Raised / Goal: <span className="text-warning">unlimited</span></p>
                                            </div>
                                        </div>
                                    )}
                           </div>

                           <strong className="">Recent Post</strong><hr className="bg-warning mb4"/>
                       </div>
                   </div>

                </div>
                
            </div>
        )
    }
}

export default Youthproject;