import './CarSection.css';

function CarSection({ title, description, image, isEven }) {
    return (
        <section
            className={`car-section ${isEven ? 'parallax-fixed' : ''}`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url(${image})`
            }}
        >
            <div className="car-content">
                <h2 className="car-title">{title}</h2>
                <p className="car-description">{description}</p>
            </div>
        </section>
    );
}

export default CarSection;
