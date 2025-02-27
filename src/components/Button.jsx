const Button = ({ text, onClick, Styles }) => {
    return (
        <button className={Styles} onClick={onClick}> {text} </button>
    );
}

export default Button;