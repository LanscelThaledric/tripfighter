import 'babel-polyfill';

import React from 'react';

import {Icon} from 'react-fa';
import ClassNames from 'classnames';

import TfCharacterSelectMini from './characterSelectMini.jsx';

class TfMenu extends React.Component {

    render(){
        let className = ClassNames('tf-menu', {active:this.props.active, displayed:this.props.displayed});

        return <div id="tf-menu" className={className}>
            <div className="tf-transiter" onTransitionEnd={this.props.onTransitionEnd}/>
            <div className="tf-menu-content">
                <TfCharacterSelectMini/>
                <p>You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is lethal but it doesn't hold a candle to man. </p>

                <p>Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an infant named Jeb. </p>
            </div>
        </div>;
    }

}

module.exports = TfMenu;