import './PopUp.scss';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const PopUp = ({eliminar, volver}) => {

    return <div className="PopUp">
                <div className="background"></div>

                <div className="content">
                    <p>Estas seguro que desea eliminar la materia?</p>
                    <PrimaryButton handleClick={eliminar}>Si</PrimaryButton>
                    <PrimaryButton handleClick={volver}>No</PrimaryButton>
                </div>

            </div>
}
export default PopUp;