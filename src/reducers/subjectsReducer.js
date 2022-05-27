import { handle } from 'redux-pack';

const notas = [
    {
        id:1,
        title:'Tp Integrador 1', 
        number: 1
    },
    {
        id:2,
        title:'Tp Integrador 2', 
        number: 2
    },
    {
        id:3,
        title:'Tp Integrador 3', 
        number: 3
    },
    {
        id:4,
        title:'Tp Integrador 4', 
        number: 4
    }]
const defaultState = [
    // {
    //     nombre:"Matematica", periodoDeCursada:"Anual", añoDeCursada:"1998", cursando:"false", nota:"10", id:"1", notas: notas
    // }
]

const subjects = (state = defaultState, action) => {
    console.log("esta accion entra al reducer:", action)

    console.log(action.payload)

    switch (action.type) {

        case 'ADD_SUBJECT':
            return  handle(state, action, {
                failure: _ => state,
                success: _ => [
                    ...state,
                    action.payload
                ]
            });
        case 'GET_SUBJECTS':
            return  handle(state, action, {
                failure: _ => state,
                success: _ => action.payload
            });
        case 'LOGIN':
            return  handle(state, action, {
                failure: _ => state,
                success: _ => action.payload.materias
            });

        default:
        return state
    }
}

export default subjects