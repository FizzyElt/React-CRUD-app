import React from 'react';
import '../scss/_animation.scss'

import Header from '../components/Header.jsx'
import Container from '../components/Container.jsx'
import ArticleList from '../components/ArticleList.jsx'
import { CSSTransition } from 'react-transition-group'
const Home = () => {
    return (
        <div>
            <Header />
            <Container>
                <ArticleList />
            </Container>

        </div>)
}

export default Home;
