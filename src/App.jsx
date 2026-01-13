import CarSection from './components/CarSection';
import carsData from './data/cars';

function App() {
    return (
        <main className="app">
            {carsData.map((car, index) => (
                <CarSection
                    key={car.id}
                    title={car.title}
                    description={car.description}
                    image={car.image}
                    isEven={index % 2 === 0}
                />
            ))}
        </main>
    );
}

export default App;
