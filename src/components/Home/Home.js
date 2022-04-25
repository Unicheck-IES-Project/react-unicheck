import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectsListContainer from '../../containers/SubjectsListContainer/SubjectsListContainer';
import {useState} from 'react'
import AddSubjectContainer from '../../containers/AddSubjectContainer/AddSubjectContainer';

const Home = () => {
    
    const [showAddSubject, setShowAddSubject] = useState(false)
    const onAddSubjectClick = () => {
        setShowAddSubject(true);
    }
    const onCancelClick = () => {
        setShowAddSubject(false);
    }
    return (
        <>
            {showAddSubject ? 
            <AddSubjectContainer onCancelClick={onCancelClick}/>:
            <div className="Home">
                <div className="popup"></div>
                <div className="dashboard">
                    <div className="dashboard-title-button">
                        <h1>Materias</h1>
                        <PrimaryButton handleClick={onAddSubjectClick}>Agregar Materia</PrimaryButton>
                    </div>
                    <div className="contacts-grid">
                        <div className="columns-names">
                            <p>Nombre</p>
                            <p>Periodo</p>
                            <p>Año</p>
                            <p>Estado</p>
                            <p>Nota</p>
                        </div>
                        <SubjectsListContainer />
                    </div>
                </div>
            </div>}
            
        </>
    );
}

export default Home;