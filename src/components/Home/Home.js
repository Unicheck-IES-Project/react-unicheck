import './Home.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import SubjectsListContainer from '../../containers/SubjectsListContainer/SubjectsListContainer';

const Home = (props) => {

    return (
        <>
            <div className="Home">
                <div className="popup"></div>
                <div className="dashboard">
                    <div className="dashboard-title-button">
                        <h1>Materias</h1>
                        <PrimaryButton handleClick={()=>{}}>Agregar Materia</PrimaryButton>
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
            </div>
        </>
    );
}

export default Home;