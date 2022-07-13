import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
import {BsFillArrowLeftCircleFill} from "react-icons/bs";
import {httpService} from "../services/HttpService";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

const SpellDetails = () => {
    const [spellDetails, setSpellDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const {index} = useParams();

    useEffect(() => {
        if (index) {
            getSpellDetails();
        }
    }, [])

    const getSpellDetails = async () => {
        try {
            setLoading(true);
            const response = await httpService.getSpellByIndex(index);
            setSpellDetails(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            toast.error("Something went wrong")
        }
    }

    return (
        <div className="container">
            {
                loading ? <Spinner/> :
                    <>
                        <div className="my-3">
                            <Link to={"/"}>
                                <BsFillArrowLeftCircleFill size={30}/>
                            </Link>
                            <h2 className="text-center">{spellDetails?.name}</h2>
                        </div>
                        <p>{spellDetails?.desc}</p>
                        <p><b>Highest Level: </b>{spellDetails?.higher_level}</p>
                        <p><b>Range: </b>{spellDetails?.range}</p>
                        <p><b>Components: </b>{spellDetails?.components?.join(", ") || "-"}</p>
                        <p><b>Material: </b>{spellDetails?.material}</p>
                        <p><b>Ritual: </b>{spellDetails?.ritual ? "Yes" : "No"}</p>
                        <p><b>Duration: </b>{spellDetails?.duration}</p>
                        <p><b>Concentration: </b>{spellDetails?.concentration ? "Yes" : "No"}</p>
                        <p><b>Casting Time: </b>{spellDetails?.casting_time}</p>
                        <p><b>Level: </b>{spellDetails?.level}</p>
                        <p><b>Attack Type: </b>{spellDetails?.attack_type}</p>
                        <p><b>Damage Type: </b>{spellDetails?.damage?.damage_type?.name}</p>
                        <p><b>School: </b>{spellDetails?.school?.name}</p>
                        <p><b>Classes: </b>{spellDetails?.classes?.map(clas => clas.name).join(", ") || "-"}</p>
                        <p><b>Sub
                            Classes: </b>{spellDetails?.subclasses?.map(subClass => subClass.name).join(", ") || "-"}
                        </p>
                    </>
            }
        </div>
    )
}

export default SpellDetails;