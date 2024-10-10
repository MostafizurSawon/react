import { useSelector, useDispatch } from "react-redux";
import { removeCar } from '../store';


function CarList(){
  const dispatch = useDispatch();
  // const cars = useSelector(({ cars : { data, searchTerm }}) =>{
  //   return data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
  // });
  const { cars, name } = useSelector(({ form, cars : { data, searchTerm }}) =>{
    const filteredCars = data.filter((car)=>car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return {
      cars: filteredCars,
      name: form.name
    }
  });

  // console.log(cars);
  const handleCarDelete = (car) => {
    // console.log("we")
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) =>{
    // Decide if this car should be bold
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return(
      <div key={car.id} className={`panel p-3 is-flex is-align-items-center is-justify-content-space-between ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button className="button is-danger" onClick={() => handleCarDelete(car)}>
          Delete
        </button>
      </div>
    )
  })

  return <div className="car-list panel p-3">
  {renderedCars}
  </div>;
}

export default CarList;