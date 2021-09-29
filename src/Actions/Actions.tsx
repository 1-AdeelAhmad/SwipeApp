import {
     LOAD_IMAGES_FAIL,
     LOAD_IMAGES_PENDING,
     LOAD_IMAGES_SUCCESS,
     UPDATE_HIRED_WORKERS,
     REMOVE_WORKER
  } from "../Constants/Actions";
import axios from "axios";
import { Dispatch } from "redux";


export interface WorkersIndividual {
     name: string,
     image: string,
}

export interface Workers{
     workers: WorkersIndividual,
     error: string
   }


// Had this logic in place for a side project I am currently working on, So left it in here rather than using mock data.

export const getImages = () => (dispatch: Dispatch) => {
     const words = [ 'face' ]
     const apiKey = "563492ad6f9170000100000138bfb0c81cc0430a8f1491f55451a0f6"; 
     // NOTE: Would Normally Place This KEY in the Back End and surface that api url endppoint here

     let allWorkers = [] as any
     dispatch({ type: LOAD_IMAGES_PENDING });
    
     let reqs = words.map( word => {
          return new Promise ((resolve, reject) => {
               const url = `https://api.pexels.com/v1/search?query=${word}`
               axios(url, {
               method: 'GET',
               headers: { 'Authorization' : apiKey }
               })
               .then(res => {
                    resolve(res.data.photos)
                    res.data.photos.map ( (photo: {photographer: string, src: {large: string}}, index: number) => {
                         let workerIndividualData = {} as WorkersIndividual
                         workerIndividualData.name = photo.photographer
                         workerIndividualData.image = photo.src.large
                         return allWorkers.push(workerIndividualData)
                    })
                         })
               .catch(err => {
                    reject(err)
                    console.log(err)
               })
          })
     })

     Promise.all(reqs).then(() => {
          dispatch({
               type: LOAD_IMAGES_SUCCESS,
               payload: allWorkers,
            });
     })
     .catch((err) => {
          console.log(err)
          dispatch({
               type: LOAD_IMAGES_FAIL,
               payload: "Unable To Retrieve Images",
            });
     })
  };

  export const updateHiredWorkers = (workerName: string) => (dispatch: Dispatch) => {
     dispatch({
          type: UPDATE_HIRED_WORKERS,
          payload: workerName
     })
  }
  export const removeWorker = (workerName: string) => (dispatch: Dispatch) => {
     dispatch({
          type: REMOVE_WORKER,
          payload: workerName
     })
  }
