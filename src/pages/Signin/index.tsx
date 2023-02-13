import React, { useState } from 'react'
import { Logo, Card, Input } from 'components'
import styles from './styles.module.sass'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { isEmailValid } from 'utils'

const Signin = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [errorMessages, seterrorMessages] = useState({
        email: '',
        password: '',
    })

    const validateInputs = () => {
        let emailError = ''
        let passwordError = ''
        if (!email) {
            emailError = 'Esse campo é obrigatório'
        }
        if (email && !isEmailValid(email)) {
            emailError = 'O e-mail deve ser válido'
        }
        if (!password) {
            passwordError = 'Esse campo é obrigatório'
        }
        seterrorMessages({
            email: emailError,
            password: passwordError,
        })
        if (email && password && isEmailValid(email)) return true
        else return false
    }

    const handleSubmit = () => {
        const isValid = validateInputs()
        if (isValid) alert('Login Successful!')
    }

    return (
        <div className={styles.container}>
            <Logo width="166px" height="48px" />
            <p className={styles.heading}>Entrar na sua conta</p>
            <p className={styles.subtitle}>
                Ou&nbsp;
                <Link to="/signup" className="link">
                    fazer cadastro
                </Link>
            </p>
            <Card>
                <>
                    <Input
                        name="email"
                        label="E-mail"
                        type="email"
                        onChange={setemail}
                        error={errorMessages.email}
                        validateInput={validateInputs}
                        value={email}
                    />
                    <Input
                        name="password"
                        label="Senha"
                        type="password"
                        value={password}
                        error={errorMessages.password}
                        onChange={setpassword}
                        validateInput={validateInputs}
                    />
                    <p>
                        <Link to="" className={cn('link', styles.link)}>
                            Esqueceu a senha?
                        </Link>
                    </p>
                    <button
                        onClick={handleSubmit}
                        className={cn('button', styles.button)}
                    >
                        Entrar
                    </button>
                </>
            </Card>
        </div>
    )
}

export default Signin
