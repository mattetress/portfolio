import "./portfolioCard.scss";

const PortfolioCard = ({ project }) => {
    return (
        <div className="portfolioCard">
            <img src={project.splashImage} alt={project.title + " thumbnail"} />
            <h3>{project.title}</h3>
        </div>
    );
};

export default PortfolioCard;
