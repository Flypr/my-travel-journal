import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <img src="./images/earth-icon.svg" alt="logo" />
            </div>
            <h1 className="header__text">my travel journal</h1>
        </header>
    );
}

export default Header;