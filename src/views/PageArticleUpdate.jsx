import React, { useReducer, useState,useEffect } from 'react';
import Container from '../components/Container.jsx'
import Header from '../components/Header.jsx'
import { Redirect } from 'react-router-dom'
import {fetchGet,fetchPatch} from '../utils/getJSON.js'
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
const PageArticleUpdate = ({match}) => {

    const [txtState, dispatch] = useReducer(reducer, initState)

    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        fetchGet(`articles/${match.params.id}`)
        .then(res=>{
            const data=res.data;
            dispatch({type:'UPDATE_TITLE',paylode:data.title})
            dispatch({type:'UPDATE_CONTENT',paylode:data.content})
        }).catch(console.log)
    },[])

    const inputOnChange = (value, type = '') => {
        dispatch({ type, paylode: value })
    }
    const handlePatch=(e)=>{
        e.preventDefault()
        if(!txtState.title||!txtState.content){
            return alert('please fill all fields')
        }
        fetchPatch(`articles`,match.params.id,txtState)
        .then(res=>{
            console.log('success')
            setRedirect(true)
        })
        .catch()
    }
    return (
        <div>
            <Header hideCreateBtn />
            <Container>
                <form className="block" onSubmit={handlePatch}>
                    <fieldset>
                        <legend className="block-half">Update article</legend>

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
                        <button className="btn btn--block btn--primary">Update</button>
                    </fieldset>
                </form>
                {
                    redirect && (<Redirect to="/" />)
                }
            </Container>
        </div>
    );
}

export default PageArticleUpdate;
