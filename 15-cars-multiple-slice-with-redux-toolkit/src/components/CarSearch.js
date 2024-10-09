import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch(){
  const dispatch = useDispatch();

  const searchTerm = useSelector((state)=>{
    return state.cars.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  }

  return <div className="list-header my-4 grid ">
    <h3 className="title is-3">My Cars</h3>
    <div className="search field is-horizontal is-align-items-center is-justify-content-space-between">
      <label className="label mr-4">Search</label> 
      <input className="input" type="text" placeholder="Search" value={searchTerm} onChange={handleSearchTermChange} />
    </div>
  </div>;
}

export default CarSearch;