import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchbar } from "../actions/actions";
import { Link } from "react-router-dom";

export default function Searchbar(){
const [search, setSearch]= useState("")
const characters = useSelector(state=> state.searchChar)
const dispatch = useDispatch()

function handleChange(e){
    setSearch(e.target.value)
}

function handleSubmit(e){
    e.preventDefault()
    
    dispatch(searchbar(search))
    setSearch("")
}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={handleChange} />
                <button type="submit">Busca tu personaje!</button>
            </form>
            {characters && characters.map(char=>
                (
                    <div key={char.id}>
                        <img src={char.image} alt={char.name} />
                        <Link to={"/detail/"+ char.id }>  <p>{char.name}</p></Link>
                    </div>
                ))}
        </div>
    )
}