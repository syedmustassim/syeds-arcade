import { v4 as uuid } from "uuid";

export const addressInitialState = {
    isAdded: false,
    editAddressId: null,
    selectedAddressId: null,

    addresses:[
        {
            id: uuid(),
            name: "Syed Mustassim",
            phone: "99447453",
            city: "Bengaluru",
            pin: "560046",
            profileState: "Karnataka",
            addressText: "Syed Manor, Benson Town",
        }
    ],

    demoAddress:[
        {
            id: uuid(),
            name: "Amar",
            phone: "77885544",
            city: "Pune",
            pin: "441323",
            addressText: "123 Main St",
            profileState: "Maharashtra",
          },
          {
            id: uuid(),
            name: "Akbar",
            phone: "55332211",
            city: "Amritsar",
            pin: "659221",
            addressText: "123 Park Ave",
            profileState: "Punjab",
          },
          {
            id: uuid(),
            name: "Anthony",
            phone: "99882211",
            city: "Albany",
            pin: "78910",
            addressText: "789 Rue de la Paix",
            profileState: "New York",
          },
    ]
}


export const addressReducer = (state,action) => {
    switch(action.type){

    case "ADDRESS_EDIT_BUTTON":
      return {
        ...state,
        editAddressId: action.payload,
      };

    case "ADD_ADDRESS_BUTTON_CLICKED":
      return {
        ...state,
        isAdded: true,
      };

    case "ADDRESS_CANCEL_BUTTON_CLICKED": 

      return {
        ...state,
        editAddressId: null,
        isAdded: false,
      };
    

    case "UPDATE_TO_ADDRESS": 

      const updateAddress = state.addresses.map((address) => {
        if (address.id === action.payload.id) {
          return {
            ...address,
            name: action.payload.name,
            phone: action.payload.phone,
            city: action.payload.city,
            pin: action.payload.pin,
            profileState: action.payload.profileState,
            addressText: action.payload.addressText,
          };
        }
        return address;
      });
      console.log(updateAddress, "pinfoienoie fien")
      return {
        ...state,
        editAddressId: null,
        addresses: updateAddress,
      };
    

    case "ADD_TO_ADDRESS": 

      return {
        ...state,
        isAdded: false,
        addresses: [...state.addresses, action.payload],
      };
    

    case "ADDRESS_DELETE_BUTTON": 
      const filteredAddresses = state.addresses.filter(
        (address) => address.id !== action.payload
      );
      return {
        ...state,
        addresses: filteredAddresses,
      };
    

    case "SELECT_ADDRESS": 
      return { ...state, selectedAddressId: action.payload };
    

        default: 
            return state;
    }
}