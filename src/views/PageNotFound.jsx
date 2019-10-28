import React from 'react';
import Container from '../components/Container.jsx'
import Header from '../components/Header.jsx'
const PageNotFound = ({match}) => (
    <div>
        <Header />
        <Container>
            <div>404 content not found</div>
        </Container>
    </div>
)

export default PageNotFound;
