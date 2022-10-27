import Image from 'next/image'
import * as S from './styles'

export function Header() {
    return (
        <>
            <S.Header>
                <h1>Header</h1>
                <Image
                    src="/logo.png"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />

            </S.Header>

        </>
    )
}