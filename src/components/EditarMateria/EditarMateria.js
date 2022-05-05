import './EditarMateria.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import Input from '../input/input';
import  {useState} from 'react';

const EditarMateria = ({nombre, periodoDeCursada, añoDeCursada, cursando, nota, id, guardar, volver}) => {
    
    const [data, setData] = useState({
        
        nombre: nombre,
        periodoDeCursada: periodoDeCursada,
        añoDeCursada: añoDeCursada,
        cursando: cursando,
        nota: nota
        
    });

    const changeData = (propName) => (event) =>{
        setData(prevState => ({...prevState, [propName]: event.target.value}))
    }

    return <div className="EditarMateria">

            <div className="content">
                <div className="AddSubject">
                    <div className="dashboard">
                        <h1>Editar Materia</h1>
                        <Input handleChange={changeData("nombre")} value={data.nombre}>Nombre de asignatura</Input>
                        <Input type="number" handleChange={changeData("añoDeCursada")} value={data.añoDeCursada}>Año</Input>
                        <div className="select">
                            <label>Estado de cursada</label>
                            <select value={data.cursando} onChange={changeData("cursando")}> 
                                <option value="true">Cursando</option>
                                <option value="false">Ya fue cursada</option>
                            </select>
                        </div>
                        <div className="select">
                            <label>Periodo de cursada</label>
                            <select value={data.periodoDeCursada} onChange={changeData("periodoDeCursada")}> 
                                <option value="Primer Cuatrimestre">Primer Cuatrimestre</option>
                                <option value="Segundo Cuatrimestre">Segundo Cuatrimestre</option>
                                <option value="Anual">Anual</option>
                            </select>
                        </div>
                        <Input disabled={data.cursando == "true"? true : false} type="number" handleChange={changeData("nota")} value={data.cursando == "true" ? "" : data.nota}>Nota final</Input>
                        <div className="buttons-container">
                            <PrimaryButton handleClick={() => {
                                                                guardar(id, data);
                                                                volver();
                                                              }}>
                                Guardar
                            </ PrimaryButton>
                            <PrimaryButton handleClick={() => volver() }>
                                Cancelar
                            </ PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

</div>
}
export default EditarMateria;