import { connect } from 'react-redux';
import {useEffect} from 'react';
import SubjectList from '../../components/SubjectsList/SubjectsList';
import {getSubjects} from '../../actions/index'

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects
  }
}

const SubjectsListContainer = ({subjects}) => {
    useEffect(() => {
      //getSubjects();
    },[])
    return <SubjectList subjects={subjects} />
}

export default connect(
  mapStateToProps,
  null
)(SubjectsListContainer);