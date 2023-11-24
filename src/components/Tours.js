import './Tour.css';
import Card from './Card'
function Tours({ id, tours, removeTour0, removeTour1, removeTour2, removeTour3, removeTour4 }) {
    return (
        <div className='container'>
            <div className='heading'>
                <h2 className='Main-title'> Top Courses </h2>
            </div>
            <div className="btns">
                <button className="btn-red" onClick={() => removeTour0(id)}>
                    All
                </button>
                <button className="btn-red1" onClick={() => removeTour1(id)}>
                    Developement
                </button>
                <button className="btn-red" onClick={() => removeTour2(id)}>
                    Business
                </button>
                <button className="btn-red" onClick={() => removeTour3(id)}>
                    Design
                </button>
                <button className="btn-red" onClick={() => removeTour4(id)}>
                    Lifestyle
                </button>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card className='item' key={tour.id} {...tour} removeTour0={removeTour0} removeTour1={removeTour1} removeTour2={removeTour2} removeTour3={removeTour3} removeTour4={removeTour4}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Tours;