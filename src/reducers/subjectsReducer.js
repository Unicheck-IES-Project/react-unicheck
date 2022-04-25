import { handle } from 'redux-pack';

/*const defaultState = [
    {
        subjectName:"Matematica", enrollmentPeriod:"Anual", yearOfSubject:"1998", isAttended:"Cursada", finalGrade:"10", id:"1"
    },
    {
        subjectName:"Matematica", enrollmentPeriod:"Anual", yearOfSubject:"1998", isAttended:"Cursada", finalGrade:"10", id:"2"
    },
    {
        subjectName:"Matematica", enrollmentPeriod:"Anual", yearOfSubject:"1998", isAttended:"Cursada", finalGrade:"10", id:"3"
    },
    {
        subjectName:"Matematica", enrollmentPeriod:"Anual", yearOfSubject:"1998", isAttended:"Cursada", finalGrade:"10", id:"4"
    },
    {
        subjectName:"Matematica", enrollmentPeriod:"Anual", yearOfSubject:"1998", isAttended:"Cursada", finalGrade:"10", id:"5"
    }
]*/

const subjects = (state = [], action) => {
    console.log(action)
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

        default:
        return state
    }
}

export default subjects