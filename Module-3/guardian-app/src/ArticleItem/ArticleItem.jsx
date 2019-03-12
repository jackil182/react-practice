import React from 'react';
import './ArticleItem.css';

const ArticleItem = ({article, getArticleBody, articleText, articleLink}) => {
    return (
        <div className="ArticleItem">
            <h3 className="article__title" data-id={article.id} onClick={getArticleBody}>{article.webTitle}</h3>
            <span className={article.isHosted ? "article--open": "article--close"} data-id={article.id} onClick={getArticleBody}></span>
            {article.isHosted 
                ? (<div className="article__text">
                    <p className="article__par">{articleText}</p>
                    <a className="article__link" href={articleLink}>Read the full article here</a>
                </div>) 
                : null}
        </div>
    );
};

export default ArticleItem;