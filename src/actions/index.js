const ADD_SUBJECT = 'ADD_SUBJECT';
let nextId = 6

export const addSubjectAction = (subject) => {
    return {
        type: ADD_SUBJECT,
        payload: subject,
        nextId: nextId++
    }
}