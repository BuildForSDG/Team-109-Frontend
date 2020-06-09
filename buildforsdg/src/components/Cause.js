import React, { Component } from 'react';
import { Card} from 'react-bootstrap';
import Donor from "./DonorBtn";
import {Data} from "../utils/Data";

class Cause extends Component {
    render() {
        return (
           <div>
                <div className="container">
                    <div className="row mb3">
                        {
                            Data.map(item =>
                                <Card className="center col-sm-3 mt6" style={{ width: '18rem' }} key={item.id}>
                                    <Card.Img variant="top" src={item.imageSrc} alt="cardImage" width='100px' />
                                    <Card.Body>
                                        <p>₦ 0 Raised / Goal: <span className="text-warning">unlimited</span></p>
                                        <strong className="pointer">{item.category}</strong>
                                    </Card.Body>
                                    <a className="pointer center pa2 mb3 b--light-green bg-warning" href="/youthTraining">DONATE</a>
                                </Card>
                            )}
                    </div>
                </div>
                    <Donor/>
           </div>
        )
    }
}
export default Cause;