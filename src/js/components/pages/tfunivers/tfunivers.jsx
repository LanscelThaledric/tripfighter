import 'babel-polyfill';
// React
import React from 'react';
// Additional librairies
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
import TfPage from './../../layouts/tfpage/tfpage.jsx';
import TfSeparator from './../../widgets/tfseparator/tfseparator.jsx';
import TfThemeSelectMini from './../../widgets/tfthemeSelect/tfthemeSelectMini.jsx';
import TfPageTitle from './../../sections/tfpagetitle/tfpagetitle.jsx';
import TfAllArticles from './../../sections/tfarticleGrid/tfallArticles.jsx';
// Style
import style from './tfunivers_style.scss';

class TfUnivers extends React.Component {

    render(){

        return <TfPage {...this.props}>
            <TfPageTitle>Univers {this.props.universName}</TfPageTitle>
            <TfThemeSelectMini universSlug={this.props.universSlug}/>
            <TfAllArticles title={null} description={null}
                           tags={[this.props.universName]}/>
        </TfPage>;
    }

}

TfUnivers.defaultProps = {
    universName: '<UniversName>',
    universSlug: ''
};

module.exports = TfUnivers;