const ADD_SUBJECT = 'ADD_SUBJECT';

export const addSubjectAction = (subject) => {
    return {
        type: ADD_SUBJECT,
        payload: {
            subject
        }

    }
}