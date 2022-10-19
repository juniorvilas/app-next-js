import Link from "next/link";
import { useEffect, useState } from "react";
import { Person } from "../../types/global";

export default function Personagens() {
    const [person, setPerson] = useState<Person[]>();
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => setPerson(data.results))
    }, [])

    return (
        <div
            style={{
                gap: '10px',
                margin: '40px 0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
            {person?.map((person, index) => {
                return (
                    // eslint-disable-next-line react/jsx-key
                    <Link href={`/personagens/${person.id}`} >
                        <a key={index}>{person.name}</a>
                    </Link>

                )
            })}
        </div >
    )
}