import PropTypes from "prop-types";
import { useContext } from "react";
import { CountContext } from "../context/CountContext";

const ButtonComp = ({ text }) => {
    const { setCount } = useContext(CountContext);

    const handleClick = () => {
        setCount((prev) => prev + 1);
    };

    return <button onClick={handleClick}>{text}</button>;
};

ButtonComp.propTypes = {
    text: PropTypes.string.isRequired,
};

export default ButtonComp;
