"use client";

import FieldInput from "@/components/common/fieldInput";
import FieldPassword from "@/components/common/fieldPassword";
import FieldsContainer from "@/components/common/fieldsContainer";
import PageContainer from "@/components/common/pageContainer";
import PageTitle from "@/components/common/pageTitle";
import PasswordStrength from "@/components/common/passwordStrenght";
import { passwordValidation } from "@/validations";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";



interface Props {
  user: {
    id: string;
    name?: string;
    email: string | null;
    wallet: string | null;
    password: string | null;
    emailVerified: Date | null;
    emailConfirmed: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
 
}
const ResetPasswordForm: React.FC<Props> = ({ user }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const callbackUrl = "/login";

  const onSubmit = async (
    values:{email: string, password:string, confirm_password: string},
    actions:FormikHelpers<{email: string, password:string, confirm_password: string}>) => {
    try {
      setLoading(true);
      await axios.post("/api/resetPwd", {
          payload: {
            password: values.password,
          
          },
      })

      router.push(callbackUrl);
      
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
    <PageContainer>
      <PageTitle title="Reset password"></PageTitle>
      <Formik
        initialValues={{email: user.email!, password: "", confirm_password: ""}}
        onSubmit={(values, actions) => { onSubmit(values,actions)}}
        validationSchema={passwordValidation}
      >
        {(props) => (
          <FieldsContainer>
            <FieldInput name="email" isDisabled isRequired label="Email" type="email"/>
            <FieldPassword isDisabled={loading} name="password" label="Password" />
            <FieldPassword isDisabled={loading} name="confirm_password" label="Confirmar Password" />
            <PasswordStrength value={props.values.password} />
            <Button
              mt={4}
              isLoading={props.isSubmitting}
              type='submit'
              w="100%"
            >
              Restablecer password
            </Button>    
          </FieldsContainer>
        )}
      </Formik>
    </PageContainer>
  );
}
export default ResetPasswordForm;