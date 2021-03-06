import 'babel-polyfill';
// React
import React from 'react';
// Additional libraries
import {Icon} from 'react-fa';
import Taxonomy from './../../../module/taxonomy.jsx';
// Components
import TfArticleMini from './../../widgets/tfarticleMini/tfarticleMini.jsx';
import TfAButton from './../../widgets/tfabutton/tfabutton.jsx';
// Style
import style from './tfarticleGrid_style.scss';

class TfArticleGrid extends React.Component {

    render(){
        let out_articles = [];
        for(var article of this.props.data){
            let tags = [];
            for(var tagid of article.tags){
                let tagname = Taxonomy.Univers[tagid] ? Taxonomy.Univers[tagid].name : (
                    Taxonomy.Themes[tagid] ? Taxonomy.Themes[tagid].name : 'Undefined'
                )
                tags.push(<div className="tf-tag-little" key={tagid}>{tagname}</div>);
            }

            out_articles.push(<TfArticleMini article={article} key={article.id}>
                <h3>{article.title}</h3><hr/>
                <p>{article.description}</p>
                <div className="tf-tag-list">{tags}</div>
            </TfArticleMini>);
        }

        return <div className="tf-article-grid">
            {out_articles}
        </div>;
    }

}

TfArticleGrid.propTypes = {
    data: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        description: React.PropTypes.string,
        tags: React.PropTypes.arrayOf(React.PropTypes.string),
        image: React.PropTypes.string
    }))
};

TfArticleGrid.defaultProps = {
    data: []
};

module.exports = TfArticleGrid;