import React from 'react';
import Container from '../components/Container.jsx'
import Header from '../components/Header.jsx'
import ArticleDetail from '../components/ArticleDetail.jsx'
const PageArticleDetail = ({ match }) => {
    return (
        <div>
            <Header />
            <Container>
                <ArticleDetail id ={match.params.id}/>
            </Container>
        </div>
    );
}

export default PageArticleDetail;
