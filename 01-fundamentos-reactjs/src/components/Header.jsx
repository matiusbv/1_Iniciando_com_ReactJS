import styles from './Header.module.css'
import ingniteLogo from '../assets/Ignite simbol.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ingniteLogo} alt="LogoTipo de Ignite" />
        </header>
    )
}