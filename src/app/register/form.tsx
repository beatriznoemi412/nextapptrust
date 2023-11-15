"use client";

import FieldInput from "@/components/common/fieldInput";
import FieldsContainer from "@/components/common/fieldsContainer";
import FieldPassword from "@/components/common/fieldPassword";
import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { userRegisterFormValidation } from "@/validations";
import { Button, Link, Stack, Text, useToast } from "@chakra-ui/react";
import PasswordStrength from "@/components/common/passwordStrenght";

interface Props {
  email?: string | null;
}

export const RegisterForm = ({ email }: Props) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (
    values: { email: string; password: string; confirm_password: string },
    actions: FormikHelpers<{ email: string; password: string; confirm_password: string }>
  ) => {
    try {
      // Validación básica de contraseña
      if (values.password !== values.confirm_password) {
        throw new Error("Las contraseñas no coinciden.");
      }

      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          const errorResponse = await res.json();
          throw new Error(errorResponse.message || "Error desconocido");
        } else {
          throw new Error(`Error en la solicitud. Código: ${res.status}`);
        }
      }
      

      router.push("/register/confirm");
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : String(error) || "Error desconocido",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error en la solicitud:", error);
      setLoading(false);
      actions.resetForm();
      actions.setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ email: email ?? "", password: "", confirm_password: "" }}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
        }}
        validationSchema={userRegisterFormValidation}
      >
        {(props) => (
          <FieldsContainer>
            <FieldInput name="email" isDisabled={loading} isRequired label="Email" type="email" />
            <FieldPassword isDisabled={loading} name="password" label="Contraseña" />
            <FieldPassword
              isDisabled={loading}
              name="confirm_password"
              label="Confirmar contraseña"
            />
             <PasswordStrength value={props.values.password} />
            <Button mt={4} isLoading={props.isSubmitting} type="submit" w="100%" isDisabled={loading}>
              Registrarse
            </Button>
          </FieldsContainer>
        )}
      </Formik>
      <Stack pt={6}>
        <Text align={"center"}>
          ¿Ya estás registrado?{" "}
          <Link color={"blue.400"} href="/login">
            Iniciar Sesión
          </Link>
        </Text>
      </Stack>
    </>
  );
};
