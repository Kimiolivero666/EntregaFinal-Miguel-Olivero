import { Container } from "react-bootstrap"
import '../stylesheets/Contacto.css'
import { useForm } from "react-hook-form"




const Contacto = () => {

    const { register, handleSubmit } = useForm()

    const enviar = (data) => {
        console.log(data)
    }
    return (
        <>
            <Container>
                <h1>Contacto</h1>

                <div className="form-div mb-5">
                    <form className="form" onSubmit={handleSubmit(enviar)} >

                        <p className="name">
                            <input  type="text" className="validate feedback-input" placeholder="Nombre y Apellido"  {...register('name')} />
                        </p>

                        <p className="email">
                            <input  type="text" className="validate feedback-input"  placeholder="Email" {...register('email')} />
                        </p>

                        <p className="text">
                            <textarea  className="validate feedback-input"  placeholder="Comentario" {...register('comment')}></textarea>
                        </p>


                        <div className="submit">
                            <input type="submit" value="ENVIAR" id="button-blue" />
                            <div className="ease"></div>
                        </div>
                    </form>
                </div>

            </Container>
        </>
    )
}

export default Contacto