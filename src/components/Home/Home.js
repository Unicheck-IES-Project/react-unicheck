import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectsListContainer from '../../containers/SubjectsListContainer/SubjectsListContainer';
import AddSubject from '../AddSubject/AddSubject';
import {useState} from 'react'

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
            <AddSubject onCancelClick={onCancelClick}/>:
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