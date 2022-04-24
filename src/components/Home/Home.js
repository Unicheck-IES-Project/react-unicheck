import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectList from '../SubjectsList/SubjectsList';
import {useState} from "react";
import AddSubject from "../AddSubject/AddSubject";

const Home = (props) => {

    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = (boolean) => {
        setShowPopup(boolean)
    }

    return (
        <>
            <div className="Home">
                {showPopup ? <AddSubject show={togglePopup}/> : null}
                <div className="dashboard">
                    <div className="dashboard-title-button">
                        <h1>Materias</h1>
                        <PrimaryButton handleClick={()=>togglePopup(true)}>Agregar Materia</PrimaryButton>
                    </div>
                    <div className="contacts-grid">
                        <div className="columns-names">
                            <p>Nombre</p>
                            <p>Periodo</p>
                            <p>Año</p>
                            <p>Estado</p>
                            <p>Nota</p>
                        </div>
                        <SubjectList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;