import { useState } from "react";
import Switch from '@mui/material/Switch';
import { yellow } from "@mui/material/colors";

function OnChange() {
  const [empName, setEmpName] = useState("guest");
  const [quantity, setQuantity] = useState(0);
  const [switchs, setSwitch] = useState(true);
  const [message, setMessage] = useState("Enabled"); 
  const[payment ,setPaymentMethod] = useState();
  function handleName(nameEvent) {
    setEmpName(nameEvent.target.value);
  }

  function handleQuantity(quantityEvent) {
    setQuantity(quantityEvent.target.value);
  }

  function handleSwitch(event) {
    const isChecked = event.target.checked; 
    setMessage(isChecked ? "Enabled" : "Disabled"); 
    setSwitch(isChecked);
  }

  function handlePaymentOption(paymentEvent){
    setPaymentMethod(paymentEvent.target.value)
  }
   


  return (
    <>
      <div style={{
        border : "2px solid white",
        margin : "5px",
        padding : "1%"
        
      }}>
        <input
          value={quantity}
          onChange={handleQuantity}
          type="number"
          className="form-control mb-2 mr-sm-2"
        /> 
        <p>Quantity: {quantity}</p>
        <input
          value={empName}
          onChange={handleName}
          type="text"
          className="form-control mb-2 mr-sm-2"
          placeholder="Enter Name Here"
        />
        <p>Name: {empName}</p>
   
      <Switch
        checked={switchs} 
        onChange={handleSwitch}
        inputProps={{ "aria-label": "Switch demo" }}
      />
      <h3>{message}</h3>

      <select value={payment} onChange={handlePaymentOption}>
      <option value=" ">Please Select Payment Option </option>
      <option value="Debit/Credit Cards">Debit/Credit Cards</option>
      <option value="Net Banking">Net Banking</option>
      <option value="BHIM UPI">BHIM UPI</option>
      <option value="Cash On Delivery">Cash On Delivery</option>
      </select> 
      <h4>You Selected : {payment}</h4>

      </div>
    </>
  );
}

export default OnChange;

