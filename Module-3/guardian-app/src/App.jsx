import React, { Component } from 'react';
import './App.css';
import ArticleList from './ArticleList/ArticleList';
import ErrorPage from './ErrorPage/ErrorPage';
import PageMenu from './PageMenu/PageMenu';
import Button from './Button/Button';

class App extends Component {

  state = {
    articles: [],
    error: false,
    currentPage: 1,
    totalPages: null,
    articleText: '',
    articleLink: '',
  }
  
  fetchData = () => {
    const endPoint = 'https://content.guardianapis.com/search?';
    const key = 'api-key=test';
    fetch(endPoint+key+`&page=${this.state.currentPage}`)
      .then(res => res.json())
      .then(data => this.setState({
        articles: data.response.results,
        totalPages: data.response.pages,
      }))
      .catch(err => this.setState({
        error: true,
      }))
  }
  
  componentDidMount() {
    this.fetchData();
  }

  prevPage = () => {
    const previousPage = Number(this.state.currentPage) > 1 ? Number(this.state.currentPage) - 1 : Number(this.state.currentPage);
    this.setState({
      currentPage: previousPage,
    },() => this.fetchData())
  }

  nextPage = async () => {
    const nextPage = Number(this.state.currentPage) < this.state.totalPages ? Number(this.state.currentPage) + 1 : Number(this.state.currentPage);
    await this.setState({
      currentPage: nextPage,
    })

    this.fetchData();
  }

  findPage = (e) => {
    e.preventDefault();

    this.fetchData();
  }

  updateCurrentPage = ({target}) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  refreshPage = async () => {
    await this.setState({
      currentPage: 1,
    })

    this.fetchData();
  }

  getArticleBody = ({target}) => {
    const endPoint = 'https://content.guardianapis.com/';
    const articleId = target.dataset.id;
    const key = '&api-key=test';
    fetch(endPoint+articleId+'?show-blocks=body'+key)
      .then(res => res.json())
      .then(data => this.setState(prev => ({
        articleText: data.response.content.blocks.body[0].bodyTextSummary,
        articleLink: data.response.content.webUrl,
      })))
      .then(() => {
        this.setState(prev => ({
        articles: prev.articles.map(el => el.id === articleId ? {...el, isHosted: !el.isHosted} : {...el, isHosted: false})
      }))})
      .catch(err => this.setState({
        error: true,
      }))
  }


  render() {
    const {articles, error, currentPage, totalPages, articleText, articleLink} = this.state;
    return (
      <div className="App">
        <h1 className="App__title">The guardian News</h1>
        <Button action={this.refreshPage} className="btn btn-refresh" value="Refresh" />
        {error 
          ? <ErrorPage /> 
          : <ArticleList 
            articles={articles} 
            getArticleBody={this.getArticleBody} 
            articleText={articleText}
            articleLink={articleLink} />}

        <PageMenu 
          currentPage={currentPage} 
          totalPages={totalPages} 
          prevPage={this.prevPage} 
          nextPage={this.nextPage} 
          updateCurrentPage={this.updateCurrentPage} 
          findPage={this.findPage} />
      </div>
    );
  }
}

export default App;
