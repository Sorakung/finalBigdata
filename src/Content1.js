import React from 'react';
import TableauEmb from './TableauCom/TableauEmb';


function Content1(){
    return(
        <div className="container">
            <div className="section-area">
                <div className="section-text">
                    <h3>Covid-19</h3>
                    <p>Last update :</p>
                </div>
                {/* <div className="section-button">
                    <button type="button" class="btn btn-primary btn-lg">Totalcase :</button>
                    <button type="button" class="btn btn-primary btn-lg">Deathcase :</button>
                    <button type="button" class="btn btn-primary btn-lg">Recoverycase :</button>
                </div> */}
            </div>
            <div className="Services">
                    
                    <TableauEmb/>
            </div>
        </div>
        
    )
}

export default Content1;