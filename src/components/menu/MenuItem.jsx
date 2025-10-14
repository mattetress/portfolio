const MenuItem = ({ label, target, menuActive, setMenuActive }) => {
    return (
        <li onClick={() => setMenuActive(!menuActive)}>
            <a href={target}>{label}</a>
        </li>
    );
};

export default MenuItem;
