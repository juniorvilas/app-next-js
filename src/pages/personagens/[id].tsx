import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Person } from "../../types/global";

export default function PersonagemId() {
    const router = useRouter();
    const {
        query: { id },
    } = router;
    const [person, setPerson] = useState<Person>();
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => setPerson(data))
    }, [id])

    return (
        <div style={{
            gap: '5px',
            margin: '40px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <p>Id: {id}</p>
            <p>Nome: {person?.name}</p>
            <p>Nome: {person?.status}</p>
            <p>Nome: {person?.species}</p>
            <img src={person?.image} alt={person?.name} />


        </div>
    )
}