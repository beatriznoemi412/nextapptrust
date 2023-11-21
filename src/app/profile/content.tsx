"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Profile from "@/components/profile";
import { User } from "@/types/database.types";


export default function ProfilePageContent() {
  const [user, setUser] = useState<User>()
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const respUser = await axios.get('/api/user');
        setUser(respUser.data.user);
      } catch (error) {
        console.error(error)
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Profile user={user}/>
    </>
  );
}