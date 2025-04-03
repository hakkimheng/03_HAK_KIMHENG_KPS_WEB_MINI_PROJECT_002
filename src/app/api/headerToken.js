
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/[...nextauth]/route";

export default async function headerToken() {

  const session = await getServerSession(authOptions);
  return {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      
      Authorization: `Bearer ${session?.user.token}`,
  };
}