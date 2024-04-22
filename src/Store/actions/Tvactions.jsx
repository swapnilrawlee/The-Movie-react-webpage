export {removetv} from '../reducers/tvSlice';
import axios from '../../utlities/axios';
import {loadtv}from '../reducers/tvSlice';

export const asyncloadmovie =(id)=> async(dispatch ,getstate)=>{
    try {
        const detail =await axios.get(`tv/${id}`)
        const externalid =await axios.get(`tv/${id}/external_ids`)
        const recommendations =await axios.get(`tv/${id}/recommendations`)
        const similar =await axios.get(`tv/${id}/similar`)
        const videos =await axios.get(`tv/${id}/videos`)
        const watchproviders =await axios.get(`tv/${id}/watch/providers`)
        const ud ={
            detail :detail.data,
            // externalid:externalid.data,
            // recommendations:recommendations.data.results,
            // similar :similar.data,
            // videos:videos.data.results.find(m=>m.type ==='Trailer'),
            // watchproviders:watchproviders.data
        }
        dispatch(loadtv(ud));
        console.log(ud);
    } catch (error) {
        
    }
}