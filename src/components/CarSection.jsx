import './CarSection.css';

function CarSection({ title, description, image, isEven }) {
    return (
        <section className={`car-section ${isEven ? 'parallax-fixed' : ''}`}>
            {/* Background image as separate element for better control */}
            <div
                className="car-background"
                style={{
                    backgroundImage: `url(${image})`
                }}
            />
            {/* Dark overlay */}
            <div className="car-overlay" />
            {/* Content */}
            <div className="car-content">
                <h2 className="car-title">{title}</h2>
                <p className="car-description">{description}</p>
            </div>
        </section>
    );
}

export default CarSection;
