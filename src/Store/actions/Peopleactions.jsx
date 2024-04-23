export {removeperson} from '../reducers/personSlice';
import axios from '../../utlities/axios';
import {loadperson}from '../reducers/personSlice';

export const asyncloadperson =(id)=> async(dispatch ,getstate)=>{
    try {
        const detail =await axios.get(`person/${id}`)
        const externalid =await axios.get(`person/${id}/external_ids`)
        const recommendations =await axios.get(`person/${id}/recommendations`)
        const similar =await axios.get(`person/${id}/similar`)
        const videos =await axios.get(`person/${id}/videos`)
        const watchproviders =await axios.get(`person/${id}/watch/providers`)
        const ud ={
            detail :detail.data,
            externalid:externalid.data,
            recommendations:recommendations.data.results,
            similar :similar.data,
            videos:videos.data.results.find(m=>m.type ==='Trailer'),
            watchproviders:watchproviders.data
        }
        dispatch(loadperson(ud));
    } catch (error) {
        
    }
}