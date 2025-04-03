"use server";

import { GetUserInformationService } from "@/service/GetUserInformataionService";


export const getUserInfomation = async () => {
    const newInfo = await GetUserInformationService();
    return { success: true, user : newInfo };
    
};