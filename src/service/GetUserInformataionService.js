"use server"
import headerToken from "@/app/api/headerToken";
import { baseUrl } from "./constants";

export const GetUserInformationService = async () => {
  const header =  await headerToken();
  try {
    const res = await fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: header,
    });
    
    const data = await res.json();
    const { payload } = data;
    return payload;
  } catch (e) {
    console.log("Error : ", e);
  }
}