"use server";

import { getAllTaskService , getAllWorkspaceService, InsertWorkSpaceService, UpdateWorkSpaceService } from "@/service/Workspace.service";
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

export const UpdateFavoriteAction = async (body) =>{
    const workspaces = {
        "isFavorite": favorite,
        "workspaceName": body,
        "workspaceId": workId
    }
    const newFavorite = await UpdateFavoriteService(workspaces);
    revalidateTag("getallworkspace");
    return { success: true, data: newFavorite };
}