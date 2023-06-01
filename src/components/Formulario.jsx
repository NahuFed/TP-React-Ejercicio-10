import { Button, Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import GrillaCards from "./GrillaCards";

const Formulario = () => {
  let objetosDelLocalStorage = JSON.parse(localStorage.getItem("grillaCards"))||[];
  const [arrayObjetos, setArrayObjetos] = useState(objetosDelLocalStorage);

useEffect(()=>{
  localStorage.setItem("grillaCards", JSON.stringify(arrayObjetos))
},[arrayObjetos])

const borrarObjeto = (indiceObjetoABorrar) =>{
  let copiaArrayObjetos = arrayObjetos.filter((objeto, indice)=> indice != indiceObjetoABorrar)
  setArrayObjetos(copiaArrayObjetos)
}
  const {
    register,
    formState: { errors },    
    handleSubmit,
  } = useForm();

 

  const onSubmit = (data) => {
    // data.preventDefault()    
    setArrayObjetos([...arrayObjetos, data]);
    console.log(arrayObjetos);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>

        <InputGroup className="mb-3">
          <InputGroup.Text>Nombre pelicula</InputGroup.Text>
          <Form.Control
            placeholder="El planeta de los monkeys"
            aria-label="nombre"
            aria-describedby="nombre"
            {...register("nombre", {
              required: true,
              maxLength: 75,
            })}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>Género</InputGroup.Text>
          <Form.Select aria-label="Default select example" {...register("genero",{required: true})}>
            <option value="">Selecciona el genero</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Infantil">Infantil</option>
            
    </Form.Select>
        </InputGroup>


        <InputGroup className="mb-3">
          <InputGroup.Text id="descripcion">Descripcion</InputGroup.Text>
          <Form.Control
            placeholder="descripcion..."
            aria-label="descripcion"
            aria-describedby="descripcion"
            as="textarea"
            
            {...register("descripcion", {
              required: true,
            })}
          />
        </InputGroup>        

        <div className="d-flex justify-content-end">
          <Button type="submit">Enviar</Button>
        </div>

        {errors.nombre?.type === "required" && (
          <p className="error">El campo nombre de pelicula es requerido</p>
        )}

        {errors.descripcion?.type === "required" && (
          <p className="error">El campo descripcion de pelicula es requerido</p>
        )}

        {errors.genero?.type === "required" && (
          <p className="error">El campo genero de pelicula es requerido</p>
        )}

      </Form>
      <GrillaCards arrayObjetos={arrayObjetos} borrarObjeto={borrarObjeto}/>
    </>
    
  );
};

export default Formulario;
