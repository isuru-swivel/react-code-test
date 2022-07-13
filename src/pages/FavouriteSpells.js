import React from "react";
import SpellCard from "../components/SpellCard";
import {useStateValue} from "../context/stateProvider";
import {Link} from "react-router-dom";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";

const FavouriteSpells = () => {
    const [{favouriteSpells}, dispatch] = useStateValue();

    return (
        <div className="container">
            <div className="my-3">
                <Link to={"/"}>
                    <BsFillArrowLeftCircleFill size={30}/>
                </Link>
                <h4 className="text-center">Favourite Spells</h4>
            </div>
            {
                favouriteSpells.length > 0 ?
                    (favouriteSpells.map(spell => <SpellCard key={spell.index} spell={spell} isFavourite={true}/>))
                    : <div className="text-center">
                        No favourite spells
                    </div>
            }
        </div>
    )
}

export default FavouriteSpells;