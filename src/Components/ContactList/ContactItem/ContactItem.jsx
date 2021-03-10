import propTypes from 'prop-types';
import s from './ContactItem.module.css';



export default function ContactItem({ name, number="", onClickRemove, id}) { 
    return (
            <li className={s.contactContainer}>
                {name}: {number}
                <button
                    type="button"
                    className={s.deleteBtn}
                    onClick={() => onClickRemove(id)}>
                    Delete
                </button>
            </li>
    )
}


ContactItem.propTypes = {
    name: propTypes.string.isRequired,
    number: propTypes.string,
    onClickRemove: propTypes.func.isRequired,
    id: propTypes.number,
}




