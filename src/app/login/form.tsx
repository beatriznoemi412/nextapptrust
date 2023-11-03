/*"use client";

import FieldInput from "@/components/common/fieldInput";
import FieldPassword from "@/components/common/fieldPassword";
import FieldsContainer from "@/components/common/fieldsContainer";
import { emailValidation } from "@/validations";
import { Button, Link, Stack, Text, useToast } from "@chakra-ui/react";
import { Formik, FormikHelpers } from "formik";
import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
 
  const toast = useToast();

  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";

  const onSubmit = async (values:{email: string, password: string},actions:FormikHelpers<{email: string, password: string}>) => {
    try {
      setLoading(true);
      
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      });
      
      if (!res?.error) {
        router.push(callbackUrl);
      } else {
        throw Error("email o password inválido");
      }
    } catch (error: any) {
      setLoading(false);
      toast({
        title: "Error",
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false);
      actions.resetForm()
      actions.setSubmitting(false)
    }
  };

  return (
    <>
      <Formik
        initialValues={{email: "", password: ""}}
        onSubmit={(values, actions) => { onSubmit(values,actions)}}
        validationSchema={emailValidation}
      >
        {(props) => (
          <FieldsContainer>
            <FieldInput name="email" isDisabled={loading} isRequired label="Email" type="email"/>
            <FieldPassword isDisabled={loading} name="password" label="Password" />
            <Stack
                  w='100%'
                  direction={{ base: "column", sm: "row" }}
                  align={"flex-start"}
                  justify={"flex-start"}
                >
                  
              <Link color={"blue.400"} href={"/forgot"}>¿Olvidó el password?</Link>
            </Stack>
            <Button
              mt={4}
              isLoading={props.isSubmitting}
              type='submit'
              w="100%"
            >
              Iniciar Sesión 
            </Button>    

            <Stack pt={6}>
              <Text align={"center"}>
                ¿No tienes usuario?{" "}
                <Link color={"blue.400"} href={"/register" + (props.values.email ? `?email=${props.values.email}` : '') }>
                  Registrate
                </Link>
              </Text>
            </Stack>
          </FieldsContainer>
          
        )}
      </Formik>
    
    </> 
  );
};*/

"use client"

import { signIn } from "next-auth/react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Formik, FormikHelpers } from "formik";
import { Button, Link, Stack, Text, useToast } from "@chakra-ui/react";
import { emailValidation } from "@/validations";
import FieldsContainer from "@/components/common/fieldsContainer";
import FieldInput from "@/components/common/fieldInput";
import FieldPassword from "@/components/common/fieldPassword";

export const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  // Obtener el callbackUrl de los parámetros de la URL
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/";

  const onSubmit = async (
    values: { email: string; password: string },
    actions: FormikHelpers<{ email: string; password: string }>
  ) => {
    try {
      setLoading(true);

      // Intentar iniciar sesión utilizando next-auth
      const res = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl,
      });

      if (!res?.error) {
        // Redireccionar después de iniciar sesión exitosamente
        router.push(callbackUrl);
      } else {
        // Manejar errores de inicio de sesión
        throw Error("Email o contraseña inválidos");
      }
    } catch (error: any) {
      // Manejar errores durante el proceso
      setLoading(false);
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      // Restablecer el formulario y la carga después de la operación
      setLoading(false);
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => onSubmit(values, actions)}
      validationSchema={emailValidation}
    >
      {(props) => (
        <FieldsContainer>
          <FieldInput
            name="email"
            isDisabled={loading}
            isRequired
            label="Email"
            type="email"
          />
          <FieldPassword
            isDisabled={loading}
            name="password"
            label="Password"
          />
          <Stack
            w="100%"
            direction={{ base: "column", sm: "row" }}
            align="flex-start"
            justify="flex-start"
          >
            <Link color="blue.400" href="/forgot">
              ¿Olvidó la contraseña?
            </Link>
          </Stack>
          <Button mt={4} isLoading={props.isSubmitting} type="submit" w="100%">
            Iniciar Sesión
          </Button>

          <Stack pt={6}>
            <Text align="center">
              ¿No tienes cuenta?{" "}
              <Link
                color="blue.400"
                href={`/register${props.values.email ? `?email=${props.values.email}` : ''}`}
              >
                Regístrate
              </Link>
            </Text>
          </Stack>
        </FieldsContainer>
      )}
    </Formik>
  );
};
