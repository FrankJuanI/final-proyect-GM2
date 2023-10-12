import "./IncorrectCredenttials.css";

export function IncorrectCredenttials({ status }) {
  switch (status) {
    case (status = "incorrect"): {
      return (
        <div className="error-container">
          <p>Incorrect Credenttials</p>
        </div>
      );
    }
    case (status = "empty"): {
      return (
        <div className="error-container">
          <p>Please, complete credenttials</p>
        </div>
      );
    }
  }
}
