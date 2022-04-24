import { connect } from 'react-redux';
import SubjectList from '../../components/SubjectsList/SubjectsList';

const mapStateToProps = (state) => {
  return {
    subjects: state.subjects
  }
}


const SubjectsListContainer = connect(
  mapStateToProps,
  null
)(SubjectList)

export default SubjectsListContainer;