import {useRouter} from 'next/router'

export default function ActiveLink({children,prop}){
    const router = useRouter()
    const isActive = router.asPath === prop ? true : false 

    const handleClick = (e) => {
        e.preventDefault()
        router.push(prop)
    }

    return (
        isActive ? <a onClick={handleClick} className="nav-link active" aria-current="page" href={prop}>{children}</a>
        : <a onClick={handleClick} className="nav-link" aria-current="page" href={prop}>{children}</a>
    )
}