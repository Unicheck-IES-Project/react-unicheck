const defaultState = [
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
]

const subjects = (state = defaultState, action) => {

    switch (action.type) {

        case 'ADD_SUBJECT':
            return  [
                    ...state,
                    action.payload
                ]
            ;
        
        default:
        return state
    }
}

export default subjects