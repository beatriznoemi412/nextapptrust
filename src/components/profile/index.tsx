"use client";

import { UserDataForm } from "./userDataForm";
import { Skeleton, Stack } from "@chakra-ui/react";
import PageTitle from "../common/pageTitle";
import PageContainer from "../common/pageContainer";
import {User} from "@/types/database.types";

type Props = {
  user: User | undefined;
};

export default function Profile( {user}:Props ) {
  return (
    <PageContainer>
      <Stack alignItems="center" direction={{base:"column",md:"row"}} w="100%" justifyContent="space-between" mb="30px">
        <PageTitle title="Perfil"/>
     
      </Stack>
      <Skeleton borderRadius="6px" minH="300px" w="100%" isLoaded={user!==undefined}>
        {user && <UserDataForm user={user}/> }
      </Skeleton>
    </PageContainer>
  );
}