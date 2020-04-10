import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
// import { carsArray } from "../utils/cars";

export const Context = createContext();

const FETCH = "FETCH";
const FILTER = "FILTER";
const FILL = "FILL";
const ERROR = "ERROR";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        cars: action.payload,
      };
    case FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case FILL:
      return {
        ...state,
        fill: action.payload,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const initialState = {
  cars: null,
  filter: null,
  fill: null,
  error: null,
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const uri = `http://localhost:5500/api/cars`;
  //   const uri = `https://ven-task-api.herokuapp.com/api/cars`;

  const fetchCars = async (l) => {
    setPage(l);
    console.log({ lim: l });
    try {
      setLoading(true);
      const response = await axios.get(`${uri}`);
      setLoading(false);
      dispatch({ type: FETCH, payload: response.data.cars });
    } catch (error) {
      setLoading(false);
      dispatch({ type: ERROR, payload: error.response });
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);

  const filterCars = async (data, p) => {
    console.log(p);
    const query = {
      start_year: data !== undefined && parseInt(data.start),
      end_year: data !== undefined && parseInt(data.end),
      gender: data !== undefined && data.gender,
      countries: data !== undefined && data.count,
      colors: data !== undefined && data.col,
    };
    try {
      setLoading(true);
      const response = await axios.post(`${uri}/query`, query, {
        headers: {
          "Content-type": "application/json",
        },
      });
      setLoading(false);
      dispatch({ type: FILTER, payload: response.data.car });
    } catch (error) {
      setLoading(false);
      dispatch({ type: ERROR, payload: error.response });
    }
  };
  const getPage = (p) => {
    return p;
  };
  const fil = async (filled) => {
    dispatch({ type: FILL, payload: filled });
  };

  return (
    <Context.Provider
      value={{
        cars: state.cars,
        error: state.error,
        filter: state.filter,
        fill: state.fill,
        loading,
        fetchCars,
        filterCars,
        fil,
        getPage,
      }}
    >
      {children}
    </Context.Provider>
  );
};
