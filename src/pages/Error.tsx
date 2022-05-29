import React from "react";
import { Link } from "react-router-dom";
import { ErrorWrapper} from "./style";

type ButtonProp = {
  title: string;
  route: string;
};
const style = {
  btn: {
    width: " 90px",
    padding: "15px",
    height: "50px",
    left: " 1153px",
    top: "36px",
    background: " #e8491d",
    borderRadius: " 4px",
    marginRight: "15px",
    outline: "none",
    color: "white",
    border: "none",
    },
 
};

function Button({ title, route }: ButtonProp) {
  return (
      <Link to={route}>
            <button style={style.btn} type="submit">
                {title}
            </button>
    </Link>
  );
}

function PageNotFound() {
  return (
      <>
      <ErrorWrapper>
        <div className="error-message">
          <h1>PAGE NOT FOUND</h1>
          <div className="errorbtn">
            <Button title="Home" route="/" />
          </div>
        </div>
      </ErrorWrapper>
    </>
  );
}

export default PageNotFound;
