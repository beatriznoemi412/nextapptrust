"use client";


import { Button,  VStack, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { User } from "@/types/database.types";
import Link from "next/link";
import FieldInput from "../common/fieldInput";
import FieldsContainer from "../common/fieldsContainer";
import {  userRegisterFormValidation } from "@/validations";

type Props = {
  user: User;
};

export const UserDataForm = ({ user }: Props) => {
  const toast = useToast();

  const onSubmit = async (actions: FormikHelpers<typeof user>) => {
    try {
      const response = await axios.put("/api/user", {
        payload: { /* No incluir wallet en la solicitud */ },
      });

      toast({
        title: response.data.message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      console.error("Error en la solicitud:", error);
    }
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={user}
      onSubmit={(values, actions) => {
        onSubmit( actions);
      }}
      validationSchema={userRegisterFormValidation}
    >
      {(props) => (
        <FieldsContainer>
          <FieldInput name="email" isDisabled={true} isRequired label="Email" />
          <VStack mt="50px" alignItems="center" justifyContent="center" w="100%">
            <Button
              isLoading={props.isSubmitting}
              type="submit"
              w="100%"
            >
              Guardar
            </Button>
            <Button
              variant={"outline"}
              bgColor={"color.400"}
              as={Link}
              w="100%"
              href={"/"}
            >
              Cancelar
            </Button>
          </VStack>
        </FieldsContainer>
      )}
    </Formik>
  );
};
