"use server";

import { CreateTaskService, DeleteTaskService, getAllTaskService , getAllWorkspaceService, InsertWorkSpaceService, UpdateStatusTaskService, UpdateTaskService, UpdateWorkSpaceService } from "@/service/service";
import { revalidateTag } from "next/cache";

export const getAllWorkSpaceAction = async () => {
    const newInfo = await getAllWorkspaceService();
    return { success: true, workspace: newInfo };
};

export const getAllTaskAction = async (workId) => {
    const task = await getAllTaskService(workId);
    return { success: true, data: task };
};

export const CreateNewWorkSpaceAction = async (workspace) =>{
    const workspaces = {
        "workspaceName": workspace
    }
    const newWorkspace = await InsertWorkSpaceService(workspaces);
    revalidateTag("getallworkspace");
    return { success: true, data: newWorkspace };
}

export const UpdateWorkSpaceAction = async (workspace, id) => {
    const workspaces = {
        "workspaceName": workspace
    }
    const newWorkspace = await UpdateWorkSpaceService(workspaces , id);
    revalidateTag("getallworkspace");
    return { success: true, data: newWorkspace };
}

export const UpdateFavoriteAction = async (workId ,favorite) =>{
    const newFavorite = await UpdateFavoriteService(workId,favorite);
    revalidateTag("getallworkspace");
    return { success: true, data: newFavorite };
}
export const CreateTaskAction = async (body, workId) =>{
    const tasks = {
        "taskTitle": body.taskTitle,
        "taskDetails": body.taskDetails,
        "tag": body.tags,
        "endDate": body.endDate.toISOString(),
    }
    const newTask = await CreateTaskService(tasks, workId);
    revalidateTag("getAllTask");
    return { success: true, data: newTask };
}
export const DeleteTaskAction = async (taskId, workId) =>{
    const newTask = await DeleteTaskService(taskId, workId);
    revalidateTag("getAllTask");
    return { success: true, data: newTask };
}

export const UpdateStatusTaskAction = async (status, taskId, workId) =>{
    const newTask = await UpdateStatusTaskService(status, taskId, workId);
    revalidateTag("getAllTask");
    return { success: true, data: newTask };
}

export const UpdateTaskAction = async (body ,taskId, workId) =>{
    const tasks = {
        "taskTitle": body.taskTitle,
        "taskDetails": body.taskDetails,
        "tag": body.tags,
        "endDate": body.endDate.toISOString(),
    }
    const newTask = await UpdateTaskService(tasks ,taskId,workId )
    revalidateTag("getAllTask");
    return { success: true, data: newTask };
}