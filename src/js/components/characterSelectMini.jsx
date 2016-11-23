import 'babel-polyfill';

import React from 'react';

import resource_leftFighter from '../../resource/fighter-left.png';
import resource_rightFighter from '../../resource/fighter-right.png';

class TfCharacterSelectMini extends React.Component {

    render(){

        return <section className="tf-character-select-mini">
            <h2>
                Choisissez un univers
            </h2>
            <div className="tf-character-select-selector">
                <div className="tf-character-left">
                    <a href="#" className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Moderne</h3>
                            <img className="tf-fighter" src={resource_leftFighter} alt=""/>
                        </div>
                    </a>
                </div>
                <div className="tf-character-right">
                    <a href="#"  className="tf-character-select-link">
                        <div className="tf-character-inner">
                            <h3 className="tf-character-select-title"><span className="tf-character-title-small">Japon</span>Traditionnel</h3>
                            <img className="tf-fighter" src={resource_rightFighter} alt=""/>
                        </div>
                    </a>
                </div>
            </div>
        </section>;
    }

}

module.exports = TfCharacterSelectMini;