import React,{useState,useEffect} from 'react';
import ArticleTitle from './ArticleTitle.jsx'
import DateFormat from './DateFormat.jsx'
import {fetchGet} from '../utils/getJSON'
import Loader from '../views/Loader.jsx'
const ArticleDetail = ({id}) => {

    const [data, setData] = useState(null);

    useEffect(()=>{
        fetchGet(`articles/${id}`)
        .then(res=>setData(res.data))
        .catch(console.log)
    },[id])


    
    if(!data){
        return <Loader/>
    }
    return (
        <div>
            <ArticleTitle title={data.title}/>
            <DateFormat date={data.date}/>
            {
                data.content.split('\n').map((c,i)=>{
                    return <p key={i}>{c}</p>
                })
            }
        </div>
    );
}

export default ArticleDetail;

