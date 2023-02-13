import React from 'react'
import styles from './styles.module.sass'
import cn from 'classnames'

interface InputProps {
    label: string
    type: string
    error: string
    name: string
    onChange: React.Dispatch<React.SetStateAction<string>>
    validateInput: () => void
    value: string
}

const Input = ({
    label,
    type,
    onChange,
    error,
    name,
    validateInput,
    value,
}: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            <p className={styles.label}>{label}</p>
            <input
                onBlur={() => validateInput()}
                className={cn(styles.input, {
                    [styles.inputError]: !!error,
                })}
                type={type}
                name={name}
                onChange={(e) => {
                    onChange(e.target.value)
                    validateInput()
                }}
                value={value}
            />
            {error && <p className={styles.error}>{error}</p>}
        </div>
    )
}

export default Input
