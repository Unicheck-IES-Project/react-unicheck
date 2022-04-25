import Api from '../Api';

const ADD_SUBJECT = 'ADD_SUBJECT';
const GET_SUBJECTS = 'GET_SUBJECTS';
let nextId = 6

export const addSubjectAction = (subject) => {
    return {
        type: ADD_SUBJECT,
        payload: subject,
        nextId: nextId++
    }
}

export const  getSubjects = () => {
    const api = new Api();
    return {
      type: GET_SUBJECTS,
      promise: api.get('api/v1/subjects')
    }
  }