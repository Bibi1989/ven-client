import React, { useState, useContext } from "react";
import { Label, Button } from "semantic-ui-react";
import { Container, Car, Image, P, SelectDiv } from "./style";
import { Context } from "../../Context/ContextProvider";
import { countries, colors, years } from "../../utils/country_color";

const ShowFilteredCars = () => {
  const { filterCars, fil, fill } = useContext(Context);
  const [filter, setFilter] = useState({
    start: "1990",
    end: "2010",
    gender: "Male",
  });
  const [count, setCount] = useState([]);
  const [col, setCol] = useState([]);
  const [counter, setCounter] = useState(1);
  const [page, setPage] = useState(1);

  const data = {
    ...filter,
    count,
    col,
  };
  const handleFilter = () => {
    setCounter((c) => c + 1);
    filterCars(data, page);
    fil([data]);
  };
//   window.onscroll = () => {
//     console.log(window.scrollY);
//     if (window.scrollY === 2500) {
//       setPage((c) => c + 1);
//     }
//   };
  return (
    <Container>
      <SelectDiv>
        <div>
          <p>Start Year</p>
          <select
            onChange={(e) =>
              setFilter({
                ...filter,
                start: e.target.value,
              })
            }
          >
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div>
          <p>End Year</p>
          <select
            onChange={(e) =>
              setFilter({
                ...filter,
                end: e.target.value,
              })
            }
          >
            {years
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map((year) => (
                <option value={year}>{year}</option>
              ))}
          </select>
        </div>
        <div>
          <p>Gender</p>
          <select
            onChange={(e) =>
              setFilter({
                ...filter,
                gender: e.target.value,
              })
            }
          >
            {["Male", "Female"].map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <p>Countries</p>
          <select
            onChange={(e) => setCount([...count, { country: e.target.value }])}
          >
            {countries.sort().map((country) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
          <p>Colors</p>
          <select
            onChange={(e) => setCol([...col, { car_color: e.target.value }])}
          >
            {colors.sort().map((country) => (
              <option value={country}>{country}</option>
            ))}
          </select>
        </div>
        <div>
          <Button onClick={handleFilter}>Filter</Button>
        </div>
      </SelectDiv>
      {fill !== null &&
        fill.map((api) => {
          return (
            <Car>
              <Image>
                <h1>
                  {api.start} - {api.end}
                </h1>
                <p className='gender'>{api.gender}</p>
                <div className='country'>
                  {api.count.map((c) => (
                    <Label style={{ margin: "0 1em" }}>{c.country}</Label>
                  ))}
                </div>
                <div className='color'>
                  {api.col.map((c) => (
                    <P color={c.car_color}></P>
                  ))}
                </div>
              </Image>
            </Car>
          );
        })}
    </Container>
  );
};

export default ShowFilteredCars;
