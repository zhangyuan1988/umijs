import React, { useEffect, useState } from 'react'
import { useHistory } from 'umi'

export default function Login(props: any) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    useEffect(() => {
        fetch('/users').then(res => res.json())
            .then((res) => {
                console.log(res);


            })

        return () => {

        }
    }, [])

    return (
        <div>
            <input onChange={
                (e) => {
                    setUsername(e.target.value)
                }
            } />
            <input type="password" onChange={
                (e) => {
                    setPassword(e.target.value)
                }
            } />
            {username}--{password}
            <button onClick={() => {
                fetch('/users/login', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                }).then(res => res.json())
                    .then((res) => {
                        console.log(res);
                        localStorage.setItem('token','fff')
                        history.push('/center')
                    })

            }}>login</button>
        </div>
    )
}
