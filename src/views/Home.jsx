import React from 'react';
import Header from '../components/Header.jsx'
import Container from '../components/Container.jsx'
import ArticleList from '../components/ArticleList.jsx'
const Home = () => (
    <div>
        <Header/>
        <Container>
            <ArticleList/>
        </Container>
    </div>
)

export default Home;
