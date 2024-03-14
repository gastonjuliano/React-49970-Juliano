import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

    return (

        <div className="container">
            <h1 className="main-title">Contactanos!</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Nombre" {...register("nombre")} required />
                <input type="email" placeholder="E-Mail" {...register("email")} required/>
                <input type="phone" placeholder="Telefono" {...register("telefono")} required/>

                <button className="enviar" type="submit">Enviar</button>

            </form>
        </div>

    )
}

export default Contacto;