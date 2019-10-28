import React from 'react';
import Container from './Container.jsx'
import { Link } from 'react-router-dom'
import './Header.scss'
const Header = ({ title, hideCreateBtn }) => {


    return (
        <header className="app-header">
            <Container>
                <div>
                    <Link to="/">{title || 'Welcome to my blog'}</Link>
                    {
                        (hideCreateBtn === undefined) && 
                        (<Link className="btn btn--primary" to="/new">New article</Link>)
                    }
                </div>
            </Container>
        </header>
    );
}

export default Header;
