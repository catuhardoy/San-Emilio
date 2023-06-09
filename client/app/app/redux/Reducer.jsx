
const initialState = {
    animal: [],
    cowRoundUp: [],
    race: [],
    transaction: [], // ESTO ES UN OBJETO O UN ARRAY?
    vaccine: [],
    caravan: [],

}

const reducer = (state = initialState, action) => {
    
    switch(action.type){

//traigo todos los animales
        case GET_ANIMALS:
            return {
              ...state,
                animal: action.payload
            };
// hace falta un DELETE en ANIMALS para las muertes y ventas
// hace falta un POST en ANIMALS para las compras y nacimientos

//traigo todos los rodeos
        case GET_COW_ROUND_UP:
            return {
              ...state,
                cowRoundUp: action.payload
            };
//traigo los rodeos por ID
        case GET_COW_ROUND_UP_BY_ID:
            return {
                ...state,
                cowRoundUp: action.payload
            };
//creo un rodeo nuevo            
        case POST_COW_ROUND_UP:
            return{
                ...state,
                cowRoundUp: action.payload
            };    
// hace falta un put para los rodeos? 


//traigo las razas
        case GET_RACE:
            return {
             ...state,
                race: action.payload
            };
//traigo razas por id        
        case GET_RACE_BY_ID:
            return {
                ...state,
                race: action.payload
                        };
//posteo una nueva raza                        
        case POST_RACE:
            return{
                ...state,
                race: action.payload
               };    
//elimino una raza
        case DELETE_RACE:
            return{
                ...state,
                race: action.payload
                };    
        
                //este no estoy segura        

        case GET_TRANSACTION:
            return {
                ...state,
                transaction: action.payload
                }
            
        



    }

}