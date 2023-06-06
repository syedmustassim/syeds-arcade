import { useReducer } from "react"
import { addressInitialState, addressReducer } from "../Reducer/addressReducer"
import { AddressForm } from "./AddressForm";
import { v4 as uuid } from "uuid";
import './Address.css'

export const Address = () => {
    const [state,dispatch] = useReducer(addressReducer, addressInitialState);

    const editAddress = (id) => {
        dispatch({
            type: "ADDRESS_EDIT_BUTTON",
            payload: id
        })
    }

    const deleteAddress = (id) => {
        dispatch({
            type: "ADDRESS_DELETE_BUTTON",
            payload: id,
        })
    }

    return(
        <div className="address-main-container">
            <div className="address-header">
                {state.addresses.length === 0 && <h2> No address to display</h2>}
            </div>

            <div className="address-container">
                <div className="controller-container">
                    {
                        state.isAdded ? (<AddressForm details={{
                            id: uuid(),
                            name: "",
                            phone: "",
                            city: "",
                            pin: "",
                            profileState: "",
                            addressText: "",}}
                            />) : (
                                <button className="add-address-btn" onClick={() => dispatch({type: "ADD_ADDRESS_BUTTON"})}>Add</button>
                            )
                    }

                    {
                        !state.isAdded && (<p className="add-address-label">Add New Address</p>)
                    }
                </div>

                <ul className="list-stacked address-list">
                    {
                        state.addresses?.map((details) => {
                            const {id, name, phone, city, pin, profileState, addressText} = details;

                            const isEditing = state.editAddressId === id;


                            return(
                                <div className="controller-container">
                                    {isEditing ? (<AddressForm details={details}/>) : (
                                        <div style={{ width: "100%" }}>
                                        <div className="list-stacked-heading">
                                          <h3>{name}</h3>
                                        </div>
                                        <div className="ph-no-city-section">
                                          <p>{phone}</p>
                                          <p>{city}</p>
                                        </div>
                                        <div className="pin-state-section">
                                          <p>
                                            <b>Pin:</b> {pin}
                                          </p>
                                          <p>
                                            <b>State:</b> {profileState}
                                          </p>
                                        </div>
                                        <div className="address-section">
                                          <p>
                                            <b>Address:</b> {addressText}
                                          </p>
                                        </div>
                                        <div className="address-footer">
                                          <button onClick={() => editAddress(id)}>
                                            Edit
                                          </button>
                                          <button onClick={() => deleteAddress(id)}>
                                            Delete
                                          </button>
                                        </div>
                                      </div>
                                    )}
                                </div>
                            )
                        })
                    }

                    
                </ul>
            </div>
        </div>
    )
}