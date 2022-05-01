import { connect } from 'react-redux';
import {useEffect} from 'react';
import SubjectList from '../../components/SubjectsList/SubjectsList';
import {getSubjects} from '../../actions/index'

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
    useEffect(() => {
        getSubjects();
    },[])
    return <SubjectList subjects={subjects} />
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubjectsListContainer);