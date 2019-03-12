import React from 'react';
import './ArticleList.css';

import './ArticleList.css';
import ArticleItem from '../ArticleItem/ArticleItem';

const ArticleList = ({articles, getArticleBody, articleText, articleLink}) => {
    return (
        <div className="ArticleList">
            {articles.map(el => (
                <ArticleItem key={el.id} article={el} getArticleBody={getArticleBody} articleText={articleText} articleLink={articleLink} />
            ))}
        </div>
    );
};

export default ArticleList;