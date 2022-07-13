import React from "react";
import SpellCard from "../components/SpellCard";
import {useStateValue} from "../context/stateProvider";

const FavouriteSpells = () => {
    const [{favouriteSpells}, dispatch] = useStateValue();

    return (
        <div className="container">
            <h4 className="my-3 text-center">Favourite Spells</h4>
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