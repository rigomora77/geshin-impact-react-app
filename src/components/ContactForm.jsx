import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Wrap, WrapItem } from '@chakra-ui/react';

const ContactForm = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
  return (
    <>
      <Wrap justify='center' h='100%'>
        <WrapItem>
        <Formik
          initialValues={{
            nombre: '',
            correo: '',
            mensaje: '',
          }}
          validate={(valores) => {
            let errores = {};

            // validación nombre
            if (!valores.nombre) {
              errores.nombre = 'Por favor ingresa un nombre';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre =
                'El nombre solo puede contener letras y espacios';
            }

            // validación correo electrónico
            if (!valores.correo) {
              errores.correo = 'Por favor ingresa un correo electrónico';
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo =
                'El correo electrónico solamente puede contener letras, números, puntos, guiones y guión bajo.';
            }

            if (!valores.mensaje) {
              errores.mensaje = 'Por favor ingresa tu mensaje';
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            console.log('Formulario enviado');
            cambiarFormularioEnviado(true);
            setTimeout(() => cambiarFormularioEnviado(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className='formulario'>
              <div>
                <label htmlFor='nombre'>Nombre</label>
                <Field
                  type='text'
                  id='nombre'
                  name='nombre'
                  placeholder='Nombre y Apellidos'
                />
                <ErrorMessage
                  name='nombre'
                  component={() => <div className='error'>{errors.nombre}</div>}
                />
              </div>

              <div>
                <label htmlFor='correo'>Correo</label>
                <Field
                  type='email'
                  id='correo'
                  name='correo'
                  placeholder='correo@correo.com'
                />
                <ErrorMessage
                  name='correo'
                  component={() => <div className='error'>{errors.correo}</div>}
                />
              </div>

              <div>
                <label htmlFor='mensaje'>Mensaje</label>
                <Field
                  name='mensaje'
                  as='textarea'
                  placeholder='Agrega tu mensaje aquí'
                />
                <ErrorMessage
                  name='mensaje'
                  component={() => (
                    <div className='error'>{errors.mensaje}</div>
                  )}
                />
              </div>

              <button type='submit'>Enviar</button>

              {formularioEnviado && (
                <p className='exito'>Formulario enviado con éxito</p>
              )}
            </Form>
          )}
        </Formik>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default ContactForm;
