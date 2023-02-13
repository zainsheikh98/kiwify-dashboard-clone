import React from 'react'
import styles from './styles.module.sass'

interface CardProps {
    children: React.ReactElement
}

const Card = ({ children }: CardProps) => {
    return <div className={styles.card}>{children}</div>
}

export default Card
