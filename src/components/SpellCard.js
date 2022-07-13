import React from "react";
import {Link} from "react-router-dom";
import toast from 'react-hot-toast';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useStateValue} from "../context/stateProvider";
import {actionTypes} from "../context/reducer";

const SpellCard = ({spell: {name, index}, isFavourite}) => {
    const [{}, dispatch] = useStateValue();

    const handleAddRemoveFavourite = () => {
        if (isFavourite) {
            dispatch({
                type: actionTypes.REMOVE_FROM_FAVOURITE,
                index,
            })
            toast.success("Removed from favourite list");
        } else {
            dispatch({
                type: actionTypes.ADD_TO_FAVOURITE,
                spell: {
                    index,
                    name
                }
            })
            toast.success("Added to the favourite list");
        }
    }

    return (
        <div className="card mb-3">
            <div className="card-body row">
                <div className="col">
                    {name}
                </div>
                <div className="col text-end">
                    <Link to={`/spells/${index}`}>
                        <span className="me-3">More details</span>
                    </Link>
                    <span onClick={handleAddRemoveFavourite}>{isFavourite ?
                        <AiFillHeart size={24} className="favourite-icon cursor-pointer"/> :
                        <AiOutlineHeart size={24} className="cursor-pointer"/>}</span>
                </div>
            </div>
        </div>
    )
}

export default SpellCard;