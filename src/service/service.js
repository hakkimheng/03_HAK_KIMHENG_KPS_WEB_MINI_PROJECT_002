
import { baseUrl } from "./constants";
import headerToken from "@/app/api/headerToken";

export const getAllWorkspaceService = async () => {
    const header = await headerToken()
  try {
    const res = await fetch(`${baseUrl}/workspaces?pageNo=0&pageSize=20&sortBy=workspaceId&sortDirection=ASC`, {
      method: "GET",
      headers: header,
      next:{tags : ["getallworkspace"]},
    });
    const {payload} = await res.json();
    return payload;
  }catch(e){
    console.log("Error : ", e);
  }
}

export const getAllTaskService = async (workId) => {
    const header = await headerToken()
  try {
    const res = await fetch(`${baseUrl}/tasks/workspace/${workId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`, {
      method: "GET",
      headers: header,
      next:{tags : ["getAllTask"]},
    });
    const {payload} = await res.json();
    return payload;
  }catch(e){
    console.log("Error : ", e);
  }
}
export const InsertWorkSpaceService = async (workspace) =>{
   const header = await headerToken();
   try {
    const res = await fetch(`${baseUrl}/workspace`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(workspace)
    });
    const data = await res.json();
    return data;
  }catch(e){
    console.log("Error : ", e);
  }
}

export const UpdateWorkSpaceService = async (workspace,workId) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/workspace/${workId}`, {
     method: "PUT",
     headers: header,
     body: JSON.stringify(workspace)
   });
   const data = await res.json();
   return data;
 }catch(e){
   console.log("Error : ", e);
 }
}

export const UpdateFavoriteService = async (body) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/workspace/${body.workspaceId}?${body.isFavorite}`, {
     method: "PATCH",
     headers: header,
     body: JSON.stringify({body})
   });
   const data = await res.json();
   return data;
  }catch(e){
   console.log("Error : ", e);
 }
}

export const CreateTaskService = async (body, workId) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/task/workspace/${workId}`, {
     method: "POST",
     headers: header,
     body: JSON.stringify(body)
   });
   const data = await res.json();
   return data;
  }catch(e){
   console.log("Error : ", e);
  }
}
export const DeleteTaskService = async (taskId , workId) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/task/${taskId}/workspace/${workId}`, {
     method: "DELETE",
     headers: header,
   });
   const data = await res.json();
   return data;
  }catch(e){
   console.log("Error : ", e);
  }
}
export const UpdateStatusTaskService = async (status, taskId, workId) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/task/${taskId}/workspace/${workId}/status?status=${status}`, {
     method: "PATCH",
     headers: header
   });
   const data = await res.json();
   return data;
  }catch(e){
   console.log("Error : ", e);
  }
}
export const UpdateTaskService = async (body, taskId, workId) =>{
  const header = await headerToken();
  try {
   const res = await fetch(`${baseUrl}/task/${taskId}/workspace/${workId}`, {
     method: "PUT",
     headers: header,
     body: JSON.stringify(body)
   });
   const data = await res.json();
   return data;
  }catch(e){
   console.log("Error : ", e);
  }
}