import axios from 'axios';

export const GET_ANIMALS = 'GET_ANIMALS';
export const GET_COW_ROUND_UP = 'GET_COW_ROUND_UP';
export const GET_COW_ROUND_UP_BY_ID = 'GET_COW_ROUND_UP_BY_ID';
export const GET_RACE = 'GET_RACE';
export const GET_RACE_BY_ID = 'GET_RACE_BY_ID';
export const POST_RACE = 'POST_RACE';
export const DELETE_RACE = 'DELETE_RACE';


export function getAnimals(){
    return async function (dispatch){
        const json = await axios.get('/animal');

        return dispatch({
            type: GET_ANIMALS,
            payload: json.data
        })
    }
}

export function getCowRoundUp(){
    return async function (dispatch){
        const json = await axios.get('/cowRoundUp');

        return dispatch({
            type: GET_COW_ROUND_UP,
            payload: json.data
        })
    }

}

export function getCowRoundUpById(id){
    return async function (dispatch){
        const json = await axios.get(`/cowRoundUp/${id}`);

        return dispatch({
            type: GET_COW_ROUND_UP_BY_ID,
            payload: json.data
        })
    }

}

export function getRace(){
    return async function (dispatch){
        const json = await axios.get('/race');

        return dispatch({
            type: GET_RACE,
            payload: json.data
        })
    }

}

export function getRaceById(id){
    return async function (dispatch){
        const json = await axios.get(`/race/${id}`);

        return dispatch({
            type: GET_RACE_BY_ID,
            payload: json.data
        })
    }

}

export const postRace = (newRace) => async (dispatch) => {

    const res = await axios.post(`/race`, newRace);
    dispatch({
        type: POST_RACE,
        payload: res.data
    })
}

export function deleteRace(id){
    return async function (dispatch){
        const json = await axios.delete(`/race/${id}/delete`);
        
        dispatch({
            type: DELETE_RACE,
            payload: json.data
        })
    }
    
}
   