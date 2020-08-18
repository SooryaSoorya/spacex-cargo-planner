import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import "./CargoInfo.scss";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        value: action.val,
        validity: validate(action.val),
        selectedCargo: action.selectedCargo,
      };
    case "UPDATE":
      return {
        ...state,
        value: action.val,
        validity: validate(action.val),
      };
    case "NO-DATA":
      return {
        ...state,
        selectedCargo: null,
      };
    case "TOUCH":
      return {
        ...state,
        touched: true,
      };
    default:
      return state;
  }
};

const validate = (value) => {
  if (value) {
    const valuesForTesting = value.trim().split(",");
    const matchNumber = new RegExp(/^\s*-?\d+(\.\d{1,2})?\s*$/);
    let validity = true;
    let units = 0;
    for (const val in valuesForTesting) {
      validity = validity && matchNumber.test(valuesForTesting[val]);
      if (validity) {
        units += Number(valuesForTesting[val]);
      }
    }
    return { valid: validity, cargoBays: Math.ceil(units / 10) };
  } else {
    return { valid: false, cargoBays: 0 };
  }
};

const CargoInfo = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    selectedCargo: [],
    validity: { valid: false, cargoBays: 0 },
    touched: false,
  });
  const { cargoId } = useParams();
  const { data } = props;

  useEffect(() => {
    if (data && data.length !== 0) {
      const selected = data.filter((item) => {
        return item.id === cargoId;
      });

      if (selected.length !== 0) {
        dispatch({
          type: "INITIAL",
          val: selected[0].boxes ? selected[0].boxes : 0,
          selectedCargo: selected[0],
        });
      }
    } else {
      dispatch({
        type: "NO-DATA",
      });
    }
  }, [data, cargoId]);

  const renderCargoInfo = () => {
    if (!inputState.selectedCargo || inputState.selectedCargo.length === 0) {
      return (
        <h1 style={{ alignSelf: "center", margin: "0 20px" }}>
          Please select company from the list
        </h1>
      );
    } else {
      return (
        <div className="cargo-info">
          <div className="cargo-info-card">
            <div className="header">
              <h1>{inputState.selectedCargo.name}</h1>
              <p>{inputState.selectedCargo.email}</p>
            </div>
            <div className="content">
              <h2>Number of required cargo bays</h2>
              <h3>{inputState.validity.cargoBays}</h3>
            </div>
          </div>

          <form>
            <label>Cargo boxes</label>
            <input
              id="cargo-detail"
              type="text"
              className={!inputState.validity.valid ? "error" : ""}
              placeholder="Boxes"
              value={inputState.value}
              onChange={(e) => {
                dispatch({ type: "UPDATE", val: e.target.value });
              }}
              onBlur={(e) => {
                dispatch({ type: "TOUCH", val: e.target.value });
              }}
            />
            <button
              className="primary"
              type="submit"
              disabled={!inputState.validity.valid}
              onClick={(e) => {
                e.preventDefault();
                props.saveHandler(
                  inputState.selectedCargo.id,
                  inputState.value
                );
              }}
            >
              SAVE
            </button>
          </form>
        </div>
      );
    }
  };
  return renderCargoInfo();
};

export default CargoInfo;
