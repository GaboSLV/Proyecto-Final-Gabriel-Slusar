import React, {useState} from 'react';
import '../styles/cartform.scss';
import swal from 'sweetalert';
import {useForm} from 'react-hook-form'

function CartForm({cart, totalCartPrice, createBuyOrder, clearCart}) {
    const [client, setClient] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    },)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        handleBuyOrder();
    }

    const handleChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        setClient({
            ...client,
            [field]: value,
        })
    }

    function handleBuyOrder() {
        const orderData = {
          client,
          items: cart,
          total: totalCartPrice(),
        };

        createBuyOrder(orderData).then((createOrderData) => {
            clearCart();
            console.log("Tu orden fue creada correctamente: " + createOrderData)
            swal("Orden completada.", "Tu orden fue creada.", "success");
        });
    }

    return (
        <div className="form-wrapper">
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <h3 className='form__title'>Completa tu órden</h3>
                <div className="form__input">
                    <label htmlFor="clientname">Nombre</label>
                    <input onChange={handleChange} name="name" maxLength={32} {...register("name", {required: "Este dato es obligatorio.", minLength: {value: 8, message:  "Por favor, utiliza minimo 8 caracteres"}, maxLength: {value: 31, message: "Numero de caracteres superado."}})} />
                    <p className='error-message'>
                        {errors?.name?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="clientemail">Email</label>
                    <input onChange={handleChange} name="email" maxLength={32} {...register("email", {required: "Este dato es obligatorio.", minLength: {value: 8, message: "Por favor, utiliza minimo 8 caracteres"}, maxLength: {value: 31, message: "Numero de caracteres superado."}, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email inválido, debe contener un @."}})} />
                    <p className='error-message'>
                        {errors?.email?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="phone">Número telefónico</label>
                    <input onChange={handleChange} name="phone" type="number" {...register("phone", {required: "Este dato es obligatorio.",minLength: {value: 8, message: "Por favor, utiliza minimo 8 caracteres"}})} />
                    <p className='error-message'>
                        {errors?.phone?.message}
                    </p>
                </div>
                <div className="form__input">
                    <label htmlFor="clientaddress">Dirección</label>
                    <input onChange={handleChange} name="address" {...register("address", {required: "Este dato es obligatorio.", minLength: {value: 8, message: "Por favor, utiliza minimo 8 caracteres"}})} />
                    <p className='error-message'>{errors?.address?.message}</p>
                </div>
                <input type="submit" className='form__button' value={"Completar compra"}/>
            </form>
        </div>
    )
}

export default CartForm;