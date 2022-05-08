import { connect } from 'react-redux';
import {useEffect} from 'react';
import SubjectList from '../../components/SubjectsList/SubjectsList';
import {getSubjects} from '../../actions/index';
import Api from '../../Api';

const mapStateToProps = (state) => {
    return {
        subjects: state.subjects
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getSubjects: () => {
            dispatch(getSubjects())
        }
    }
}

const SubjectsListContainer = ({subjects, getSubjects}) => {
    
    const guardarMateriaClick = (id, data) => {
        const api = new Api;
        api.put(`api/v1/${api.getStudentId()}/subjects/${id}`, data).then(() => {getSubjects()})
    }
    const eliminarMateriaClick = (id) => {
        const api = new Api;
        api.delete(`api/v1/${api.getStudentId()}/subjects/${id}`).then(() => {getSubjects()})
    }

    useEffect(() => {
        getSubjects();
    },[])
    return <SubjectList subjects={subjects} guardarMateriaClick={guardarMateriaClick} eliminarMateriaClick={eliminarMateriaClick} />
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubjectsListContainer);