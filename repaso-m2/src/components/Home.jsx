import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCharacters } from "../actions/actions";
import { Link } from "react-router-dom";



export default function Home() {
const dispatch= useDispatch();
const characters= useSelector(state=> state.allCharacters)

useEffect(()=>{
dispatch(getAllCharacters())
},[])

console.log(characters)
    return (
        <div>
            <hr/>
            { characters && characters.map(char=>
                (
                    <div key={char.id}>
                        <img src={char.image} alt={char.name} />
                      <Link to={"/detail/"+ char.id }>  <p>{char.name}</p></Link>
                    </div>
                )
            )}
        </div>
            )
}