import React, {useState, useEffect} from "react";
import {httpService} from "../services/HttpService";
import SpellCard from "../components/SpellCard";
import Spinner from "../components/Spinner";
import {useStateValue} from "../context/stateProvider";
import toast from "react-hot-toast";

const ListSpells = () => {
    const [spellList, setSpellList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [{favouriteSpells}, dispatch] = useStateValue();

    useEffect(() => {
        getSpellList();
    }, []);

    const getSpellList = async () => {
        try {
            setLoading(true);
            const response = await httpService.getSpellList();
            setSpellList(response.data.results);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("Something went wrong");
        }
    }

    const checkIsFavourite = (index) => {
        const isExist = favouriteSpells.find(spell => spell.index === index);
        return !!isExist;
    }

    return (
        <div className="container">
            <div className="mt-4">
                {loading ? <Spinner/> : spellList?.map(spell => (
                    <SpellCard key={spell?.index} spell={spell} isFavourite={checkIsFavourite(spell?.index)}/>))}
            </div>
        </div>
    )
}

export default ListSpells;