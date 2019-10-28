import axios from 'axios'
const baseUrl='http://localhost:3002/'
export const getJSON = (url) => new Promise((resolve, reject) => {
    fetch(url).then(res => res.json()).then(resolve).catch(reject)
})
export const fetchGet=(url)=>new Promise((resolve,reject) => {
    axios.get(baseUrl+url).then(resolve).catch(reject)
})
export const fetchPost=(url,paylode)=>new Promise((resolve,reject) => {
    axios.post(baseUrl+url,paylode).then(resolve).catch(reject)
})
export const fetchDetele=(url,id)=>new Promise((resolve,reject)=>{
    axios.delete(baseUrl+url+'/'+id).then(resolve).catch(reject)
})
export const fetchPatch=(url,id,paylode)=>new Promise((resolve,reject)=>{
    axios.patch(baseUrl+url+'/'+id,paylode).then(resolve).catch(reject)
})


