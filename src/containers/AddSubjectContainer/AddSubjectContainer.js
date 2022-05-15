import { connect } from 'react-redux';
import AddSubject from '../../components/AddSubject/AddSubject';
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
      if(hayErrorAño() && hayErrorNota()){
        setShowNotaError(true)
        setShowAñoError(true);
      }
      if(hayErrorNota()){
        setShowNotaError(true);
      }else if(hayErrorAño()){
        setShowAñoError(true);
      }else {
        onSaveChangesClick(data)
        onCancelClick()
      }
    }
    const hayErrorNota = () => {
      if(data.cursando === "true") {return false;}
      return (data.nota <= 0 || data.nota > 10);
    }
  
    const hayErrorAño = () => {
      return (data.añoDeCursada <= 1990 || data.añoDeCursada >= 2023);
    }
  
    const [showNotaError, setShowNotaError] = useState(false);
    const [showAñoError, setShowAñoError] = useState(false);
    
    return <AddSubject 
                onCancelClick={onCancelClick} 
                onSaveClick={onSaveChangeSubject} 
                data={data} 
                changeInputData={changeData}
                showNotaError={showNotaError}
                showAñoError={showAñoError}
            />
                
}

export default connect(
    null,
    mapDispatchToProps
  )(AddSubjectContainer);