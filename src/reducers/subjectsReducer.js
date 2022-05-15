import { handle } from 'redux-pack';

const defaultState = [
    // {
    //     nombre:"Matematica", periodoDeCursada:"Anual", añoDeCursada:"1998", cursando:"false", nota:"10", id:"1"
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