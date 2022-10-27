import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Person } from '../types/global'

const Home: NextPage = () => {
  const [person, setPerson] = useState<Person[]>();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(data => setPerson(data.results))
  }, [])

  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Characters Rick and Morty
        </h1>
        <div>
          {person?.map((person, index) => {
            return (
              <p key={index}>{person.name}</p>
            )
          })}
        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div >
  )
}

export default Home
