import Api from '../Api';

const ADD_SUBJECT = 'ADD_SUBJECT';
const GET_SUBJECTS = 'GET_SUBJECTS';

export const addSubjectAction = (subject) => {
    const api = new Api();
    return {
        type: ADD_SUBJECT,
        promise: api.post('api/v1/subjects', subject)
    }
}

export const  getSubjects = () => {
    const api = new Api();
    return {
      type: GET_SUBJECTS,
      promise: api.get('api/v1/subjects')
    }
  }



