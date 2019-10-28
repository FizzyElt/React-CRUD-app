import React, { useState, useReducer } from 'react';
import Container from '../components/Container.jsx'
import Header from '../components/Header.jsx'
import { Redirect } from 'react-router-dom'
import { fetchPost } from '../utils/getJSON.js'
import {CSSTransition} from 'react-transition-group'
import '../scss/_animation.scss'
const initState = {
    title: '',
    content: ''
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TITLE': return {
            ...state,
            title: action.paylode
        }
        case 'UPDATE_CONTENT': return {
            ...state,
            content: action.paylode
        }
        default:
            return state
    }
}
const PageCreateArticle = () => {

    const [redirect, setRedirect] = useState(false);

    const [txtState, dispatch] = useReducer(reducer, initState)


    const handlePost = (e) => {  //上傳
        e.preventDefault()
        if (!txtState.title || !txtState.content) {
            return alert('please fill all fields')
        }
        const body = {
            ...txtState,
            date: (new Date()).toString()
        }
        fetchPost('articles', body).then(res => {
            console.log('post success')
            setRedirect(true)
        }).catch(console.log)

    }

    const inputOnChange = (value, type = '') => {
        dispatch({ type, paylode: value })
    }

    return (
        <div>
            <Header hideCreateBtn />
            <CSSTransition
            appear
            in
            timeout={800}
            classNames="fade2">
            <Container>
                <form className="block" onSubmit={handlePost}>
                    <fieldset>
                        <legend className="block-half">Create new article</legend>

                        <div className="block-half">
                            <input className="form-input"
                                type="text"
                                name="title"
                                placeholder="Title"
                                defaultValue={txtState.title}
                                onChange={(e) => { inputOnChange(e.currentTarget.value, 'UPDATE_TITLE') }}
                            />
                        </div>
                        <div className="block-half">
                            <textarea className="form-input"
                                placeholder="Content"
                                name="content"
                                rows="10"
                                defaultValue={txtState.content}
                                onChange={(e) => { inputOnChange(e.currentTarget.value, 'UPDATE_CONTENT') }}
                            >
                            </textarea>
                        </div>
                        <button className="btn btn--block btn--primary">Save</button>
                    </fieldset>
                </form>
                {
                    redirect && (<Redirect to="/" />)
                }
            </Container>
            </CSSTransition>
        </div>
    );
}

export default PageCreateArticle;
