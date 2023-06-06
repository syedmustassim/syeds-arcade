import { useReducer, useState } from "react"
import { addressInitialState, addressReducer } from "../Reducer/addressReducer"
import './AddressForm.css'

export const AddressForm = ({details}) => {
    const [detailsInput, setDetailsInput] = useState({
        id: details.id,
        name: details.name,
        phone: details.phone,
        city: details.city,
        pin: details.pin,
        profileState: details.profileState,
        addressText: details.addressText
    })

    const [state, dispatch] = useReducer(addressReducer, addressInitialState)

    const handleFormInput = (e, fieldName) => {
        setDetailsInput((prevData) => ({
          ...prevData,
          [fieldName]: e.target.value,
        }));
      };
    
      const handleUpdateButtonClick = () => {
        dispatch({
          type: "UPDATE_TO_ADDRESS",
          payload: detailsInput,
        });
      };
    
      const handleAddButtonClick = () => {
        dispatch({
          type: "ADD_TO_ADDRESS",
          payload: detailsInput,
        });
      };
    
      const handleCancelButtonClick = () => {
        dispatch({ type: "ADDRESS_CANCEL_BUTTON_CLICKED" });
      };
    
      const inputResetHandler = () => {
        setDetailsInput({
          id: details.id,
          name: "",
          phone: "",
          city: "",
          pin: "",
          profileState: "",
          addressText: "",
        });
      };
    
      const handleRandomData = () => {
        const randomIndex = Math.floor(Math.random() * state.demoAddress.length);
        const randomAddress = state.demoAddress[randomIndex];
    
        setDetailsInput({
          ...detailsInput,
          name: randomAddress.name,
          phone: randomAddress.phone,
          city: randomAddress.city,
          pin: randomAddress.pin,
          profileState: randomAddress.profileState,
          addressText: randomAddress.addressText,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (state.isAdded) {
          handleAddButtonClick();
        } else {
          handleUpdateButtonClick();
        }
      };

    return(
    <form className="form-input" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-column">
          <input
            type="text"
            value={detailsInput.name}
            placeholder="Name"
            onChange={(e) => handleFormInput(e, "name")}
            className="form-input-field"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <input
            type="text"
            value={detailsInput.phone}
            placeholder="Mobile No."
            onChange={(e) => handleFormInput(e, "phone")}
            className="form-input-field"
            required
          />
        </div>
        <div className="form-column">
          <input
            type="text"
            value={detailsInput.city}
            placeholder="City"
            onChange={(e) => handleFormInput(e, "city")}
            className="form-input-field"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <input
            type="text"
            value={detailsInput.pin}
            placeholder="Pin"
            onChange={(e) => handleFormInput(e, "pin")}
            className="form-input-field"
            required
          />
        </div>
        <div className="form-column">
          <input
            type="text"
            value={detailsInput.profileState}
            placeholder="State"
            onChange={(e) => handleFormInput(e, "profileState")}
            className="form-input-field"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <textarea
            className="form-input-field text-area"
            name=""
            id=""
            cols="30"
            rows="10"
            value={detailsInput.addressText}
            placeholder="Address"
            onChange={(e) => handleFormInput(e, "addressText")}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-column">
          <button type="submit">{state.isAdded ? "Add" : "Update"}</button>
        </div>
        <div className="form-column">
          <button type="button" onClick={inputResetHandler}>
            Reset
          </button>
        </div>
        <div className="form-column">
          <button type="button" onClick={handleRandomData}>
            Random Data
          </button>
        </div>
        <div className="form-column">
          <button type="button" onClick={handleCancelButtonClick}>
            Cancel
          </button>
        </div>
      </div>
    </form>
    )
}