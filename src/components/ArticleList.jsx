import React, { useEffect, useState } from 'react';
import Loader from '../views/Loader.jsx'
import { fetchGet, fetchDetele } from '../utils/getJSON.js'
import { Link } from 'react-router-dom'
import ArticleTitle from '../components/ArticleTitle.jsx'
import DateFormat from './DateFormat.jsx'
import '../scss/_animation.scss'
import './ArticleList.scss'
import { CSSTransition } from 'react-transition-group'

const ArticleList = () => {

    const [data, setData] = useState([]);

    const [gettingData, setGettingData] = useState(true);

    useEffect(() => {
        fetchGet('articles')
            .then(res => {
                const data = res.data.sort((a, b) => {
                    const timeA = new Date(a.date)
                    const timeB = new Date(b.date)
                    return timeA < timeB ? 1 : -1
                })
                setData(data)
                setGettingData(false)
            })
            .catch(console.log)
    }, [])
    const handleDetele = (id) => {
        fetchDetele('articles', id)
            .then(res => {
                console.log('success')
                const newList = data.filter(d => d.id !== id)
                setData(newList)
            })
            .catch(console.log)
    }
    const populateArticle = (d) => {
        const preword = d.content.split('\n')[0] //只取文章第一段顯示
        return (
            <li key={d.id}>
                <div className="flex-box">
                    <Link to={`article/${d.id}`}>
                        <ArticleTitle title={d.title} />
                    </Link>
                    <div>
                        <Link className="btn btn--primary small-btn" to={`update/${d.id}`}>Edit</Link>
                        <button
                            className="btn btn--primary small-btn"
                            onClick={(e) => handleDetele(d.id, e)}>
                            Delete
                        </button>
                    </div>

                </div>
                <DateFormat date={d.date} />
                <p className="artile-preword">{preword}</p>
            </li>
        )
    }
    if (!data.length && gettingData) return (<Loader />)
    if (!data.length && !gettingData) return (<p>No article...</p>)
    return (
        <CSSTransition
            appear
            in
            timeout={1000}
            classNames="fade">
            <ul className="article-list">
                {
                    data.map(populateArticle)
                }
            </ul>
        </CSSTransition>


    )
}

export default ArticleList;
