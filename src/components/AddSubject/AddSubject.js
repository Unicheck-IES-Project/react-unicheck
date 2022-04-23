import './AddSubject.scss'
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const AddSubject = () => {
    return (
        <div className='AddSubject'>
            <div className='dashboard'>
                <div className='dashboard-title-row'>
                    <h1>Nueva materia</h1>
                    <button>X</button>
                </div>

                <div>
                <label>Nombre de materia</label>
                <input className='large-input' type='text'/>
                </div>
                <div>
                    <label>Año</label>
                    <input className='short-input' type='number'/>
                    <label>Cursando</label>
                    <input className='checkbox-input' type='checkbox'/>
                </div>
                <div>
                <label>Periodo</label>
                    <select name="period" id="periods">
                        <option value="volvo">Primer cuatrimestre</option>
                        <option value="saab">Segundo cuatrimestre</option>
                        <option value="mercedes">Anual</option>
                    </select>
                </div>
                <div>
                <label>Nota final</label>
                <input className='short-input' type='number'/>
                </div>

                <PrimaryButton handleClick={()=>{}}>Crear</PrimaryButton>
            </div>
        </div>


    )
}

export default AddSubject