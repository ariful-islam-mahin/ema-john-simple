import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import "./Shipment.css"
import { UserContext } from '../../App';

const Shipment = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your name"/>
      {errors.name && <span className="error">This name is required</span>}

      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email"/>
      {errors.email && <span className="error">This email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder="Your address"/>
      {errors.address && <span className="error">This address is required</span>}

      <input name="phone" ref={register({ required: true })} placeholder="Your phone"/>
      {errors.phone && <span className="error">This phone is required</span>}

      
      <input type="submit" />
    </form>
  );
};

export default Shipment;