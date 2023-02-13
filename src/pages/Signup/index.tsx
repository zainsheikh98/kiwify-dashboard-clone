import React, { useState } from 'react'
import { Logo, Card, Input } from 'components'
import styles from './styles.module.sass'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import { isEmailValid } from 'utils'

const SignUp = () => {
    const [email, setemail] = useState('')
    const [confirmEmail, setconfirmEmail] = useState('')
    const [termsAccepted, setTermsAccepted] = useState(false)
    const [password, setpassword] = useState('')
    const [errorMessages, seterrorMessages] = useState({
        email: '',
        password: '',
        confirmEmail: '',
        termsError: '',
    })

    const validateInputs = () => {
        let emailError = ''
        let confirmEmailError = ''
        let passwordError = ''
        let termsError = ''
        if (!email) {
            emailError = 'Esse campo é obrigatório'
        }
        if (email && !isEmailValid(email)) {
            emailError = 'O e-mail deve ser válido'
        }
        if (!confirmEmail) {
            confirmEmailError = 'Esse campo é obrigatório'
        }
        if (confirmEmail && !isEmailValid(confirmEmail)) {
            confirmEmailError = 'Os dois e-mails devem ser iguais.'
        }
        if (email !== confirmEmail) {
            confirmEmailError = 'Os dois e-mails devem ser iguais.'
        }
        if (!password) {
            passwordError = 'Esse campo é obrigatório'
        }
        if (!termsAccepted) {
            termsError = '(Esse campo é obrigatório)'
        }
        seterrorMessages({
            email: emailError,
            confirmEmail: confirmEmailError,
            password: passwordError,
            termsError: termsError,
        })
        if (
            email &&
            confirmEmail &&
            password &&
            termsAccepted &&
            isEmailValid(email) &&
            isEmailValid(confirmEmail)
        )
            return true
        else return false
    }

    const handleSubmit = () => {
        const isValid = validateInputs()
        if (isValid) alert('SignUp Successful!')
    }

    return (
        <div className={styles.container}>
            <Logo width="166px" height="48px" />
            <p className={styles.heading}>Criar nova conta</p>
            <p className={styles.subtitle}>
                Ou&nbsp;
                <Link to="/signin" className="link">
                    entrar na sua conta existente
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
                        name="confirmEmail"
                        label="Repetir e-mail"
                        type="email"
                        onChange={setconfirmEmail}
                        error={errorMessages.confirmEmail}
                        validateInput={validateInputs}
                        value={confirmEmail}
                    />
                    <Input
                        name="password"
                        label="Senha"
                        type="password"
                        error={errorMessages.password}
                        onChange={setpassword}
                        validateInput={validateInputs}
                        value={password}
                    />
                    <p className={styles.terms}>
                        <input
                            type="checkbox"
                            checked={termsAccepted}
                            className={cn(styles.checkbox, {
                                [styles.termsError]: !errorMessages.termsError,
                            })}
                            onChange={(e) => {
                                setTermsAccepted(e.target.checked)
                                seterrorMessages({
                                    ...errorMessages,
                                    termsError: '',
                                })
                            }}
                        />
                        <p className={styles.text}>
                            &nbsp;Eu li e aceito os &nbsp;
                            <Link className={styles.termsLink} to="">
                                termos de uso,
                            </Link>
                            &nbsp;
                            <Link className={styles.termsLink} to="">
                                termos de licença de uso de software,
                            </Link>
                            &nbsp;
                            <Link className={styles.termsLink} to="">
                                política de conteúdo da Kiwify
                            </Link>
                            {errorMessages?.termsError && (
                                <p className={styles.error}>
                                    {errorMessages?.termsError}
                                </p>
                            )}
                        </p>
                    </p>
                    <button
                        onClick={handleSubmit}
                        className={cn('button', styles.button)}
                    >
                        Criar conta
                    </button>
                </>
            </Card>
        </div>
    )
}

export default SignUp
