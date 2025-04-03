"use server";

import { RegisterService } from "@/service/auth/login.sevice";

export const RegisterAction = async (user) => {
  try {

    const usename = user.get("usename");
    const email = user.get("email");
    const password = user.get("password");

	// Small Validation, ensure user complete both input field
    if (!usename || !email || !password) {
      throw new Error("Field are required");
    }

    // Everytime we submit data to API, we need to define it as an object
    const userInfo = {
        usename,
        email,
        password
    };

    // Calling addMusicService() and passing musicData to the service.
    const newUser = await RegisterService(userInfo);
    
    // Return status and message to the form function that calling this action
    return { success: true, data: newUser };

  } catch (error) {
    return { success: false, error: error.message };
  }
};