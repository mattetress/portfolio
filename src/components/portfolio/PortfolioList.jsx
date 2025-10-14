import "./portfolioList.scss";

const PortfolioList = ({ type, active, setSelected }) => {
    return (
        <li
            className={active ? "portfolioList active" : "portfolioList"}
            onClick={() => setSelected(type)}
        >
            {type}
        </li>
    );
};

export default PortfolioList;
