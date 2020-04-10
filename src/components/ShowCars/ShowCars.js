import React, { useContext, useEffect, useState, useRef } from "react";
import { Button } from "semantic-ui-react";
import { useIntersection } from "react-use";
import Loader from "react-loader-spinner";
import {
  Container,
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
import FilterCars from "../FilterCars/FilterCars";
const pic = "../../../Annotation.png";

const ShowCars = () => {
  const { cars, fetchCars, filter, loading } = useContext(Context);
  let [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [load, setload] = useState(false);
  // const containerRef = useRef();
  // const bottomRef = useRef();
  console.log(limit);
  const containerRef = useRef();
  const bottomRef = useRef();
  console.log(limit);
  const intersection = useIntersection(containerRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });
  useEffect(() => {
    fetchCars(limit);
    // setTimeout(() => {
    //   setload(false);
    // }, 3000);
    // setLimit((c) => page * c);
  }, []);
  // console.log(bottomRef.current);
  if (intersection && intersection.intersectionRatio < 1) {
    // console.log(bottomRef.current);
    // console.log(intersection);
    // setload(true);
  }
  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10% 0" }}
      >
        <Loader
          type='Puff'
          color='#00BFFF'
          height={300}
          width={300}
          timeout={3000} //3 secs
        />
      </div>
    );

  return (
    <Container>
      {filter ? (
        <FilterCars />
      ) : (
        (cars !== null || load) &&
        cars.slice(0, limit).map((car) => {
          return (
            <div ref={containerRef}>
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
                    <p>
                      <span>Car No.: </span>
                      <span>{car.id}</span>
                    </p>
                  </EmailBio>
                </Detail>
              </Car>
            </div>
          );
        })
      )}
      <div ref={bottomRef}>loading...</div>
      {load && <div>Loading...</div>}
      <Button
        onClick={() => {
          setLimit((c) => c + 10);
          setPage((c) => c + 1);
          setload(false);
        }}
      >
        Load More
      </Button>
    </Container>
  );
};

export default ShowCars;
