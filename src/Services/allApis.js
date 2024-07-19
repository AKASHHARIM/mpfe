import { base_url } from "./base_url";
import commonApi from "./commonApi";


//addvideo
export const addVideos=async(data)=>{

    return await commonApi("POST",`${base_url}/allvideos`,data)
}

export const getVideos=async()=>{
    return await commonApi("GET",`${base_url}/allvideos`,'')
}

export const deleteVideos=async(id)=>{
    return await commonApi("DELETE",`${base_url}/allvideos/${id}`,{})
}

//category

//history
export const addHistory=async(data)=>{
    return await commonApi("POST",`${base_url}/history`,data)
}
export const getHistory=async()=>{
    return await commonApi("GET",`${base_url}/history`,'')
}

export const deleteHistory=async(id)=>{
    return await commonApi("DELETE",`${base_url}/history/${id}`,{})
}

