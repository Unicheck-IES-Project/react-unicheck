import { handle } from 'redux-pack';

const img = "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"


const notas = [
    {
        id:1,
        titulo:'Tp Integrador 1', 
        nota: 1,
        images: [{id:1, picture: img},
            {id:1, picture: img}]
    },
    {
        id:2,
        titulo:'Tp Integrador 2', 
        nota: 2,
        images: [{id:2, picture: img}]
    },
    {
        id:3,
        titulo:'Tp Integrador 3', 
        nota: 3,
        images: [{id:3, picture: img}]
    },
    {
        id:4,
        titulo:'Tp Integrador 4', 
        nota: 4,
        images: [{id:4, picture: img}]
    }]
const defaultState = [
    {
        nombre:"Matematica", periodoDeCursada:"Anual", añoDeCursada:"1998", cursando:"false", notaFinal:"10", id:"1", notas: notas
    }
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