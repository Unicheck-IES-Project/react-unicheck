import { connect } from 'react-redux';
import AddSubject from '../../components/AddSubject/AddSubject';
import SubjectList from '../../components/SubjectsList/SubjectsList';
import {useState, useEffect} from 'react';
import {addSubjectAction} from '../../actions/index'


const mapDispatchToProps = (dispatch) => {
    return {
      onSaveChangesClick: (subject) => {
        dispatch(addSubjectAction(subject))
      }
    }
  }
const AddSubjectContainer = ({onSaveChangesClick, onCancelClick}) => {

    const [data, setData] = useState({
        
        nombre:"",
        periodoDeCursada:"Primer Cuatrimestre",
        añoDeCursada:"",
        cursando:"true",
        nota:""
        
    });
   useEffect(() => {
      if(data.cursando == "true"){
        setData(prevState => ({...prevState, nota: ""}))
      }
   },[data.cursando])

    const changeData = (propName) => (event) =>{
        setData(prevState => ({...prevState, [propName]: event.target.value}))
    }

    const onSaveChangeSubject = () => {
        onSaveChangesClick(data)
        onCancelClick()
      }
    
    
    return <AddSubject onCancelClick={onCancelClick} onSaveClick={onSaveChangeSubject} data={data} changeInputData={changeData}/>
}

export default connect(
    null,
    mapDispatchToProps
  )(AddSubjectContainer);