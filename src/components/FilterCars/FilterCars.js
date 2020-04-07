import React, { useContext } from "react";
// import { Table, Pagination, Form, Button, Input } from "semantic-ui-react";
import {
  Div,
  Car,
  Image,
  Detail,
  H2,
  BrandYearColor,
  Brand,
  Year,
  Color,
  EmailBio,
} from "./style";
import { Context } from "../../Context/ContextProvider";
const pic = "../../../Annotation.png";

const Filtered = ({ cars }) => {
  const { loading } = useContext(Context);
  if (loading) return <div style={{ textAlign: "center" }}>Loading</div>;
  return (
    <Div>
      <h1>Filtered Cars Owners</h1>
      {cars === undefined ? (
        <div className='found'>Filtered Not Found</div>
      ) : (
        cars !== null &&
        cars.map((car) => {
          return (
            <Car>
              <Image>
                <img src={pic} alt='car picture' width='100%' height='100%' />
              </Image>
              <Detail>
                <H2>
                  {car.first_name} {car.last_name}
                </H2>
                <BrandYearColor>
                  <Brand>
                    <p>Brand</p>
                    <p>{car.car_model}</p>
                  </Brand>
                  <div className='divide1'></div>
                  <Year>
                    <p>Year</p>
                    <p>{car.car_model_year}</p>
                  </Year>
                  <div className='divide2'></div>
                  <Color color={car.car_color}>
                    <p>Color</p>
                    <p></p>
                  </Color>
                </BrandYearColor>

                <BrandYearColor>
                  <Brand paddingRight='1.5em'>
                    <p>Country</p>
                    <p>{car.country}</p>
                  </Brand>
                  <Year paddingRight='1.5em'>
                    <p>Gender</p>
                    <p>{car.gender}</p>
                  </Year>
                  <Color paddingRight='1.5em'>
                    <p>Job</p>
                    <span>{car.job_title}</span>
                  </Color>
                </BrandYearColor>

                <EmailBio>
                  <p>
                    <span>Email: </span>
                    <span>{car.email}</span>
                  </p>
                  <p>
                    <span>Bio: </span>
                    <span>
                      {car.bio.length > 100
                        ? car.bio.slice(0, 100) + "..."
                        : car.bio}
                    </span>
                  </p>
                </EmailBio>
              </Detail>
            </Car>
          );
        })
      )}
    </Div>
  );
};

export default Filtered;
