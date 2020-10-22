import {Request, Response} from "express";
import { TaskService } from "../service/TaskService";
import HTTPResponseHandler from "../handlers/HTTPResponseHandler";

export class TaskController {

    private taskService: TaskService;
    
    constructor() {
        this.taskService = new TaskService();
    }


    public create = (req: Request , res: Response ) => {
        this.taskService.create(req)
        .then(() => {
            HTTPResponseHandler.sendEmpty(res);
        })
        .catch((err) => {
            console.log('error: ',err);
           HTTPResponseHandler.sendInternalError(res , err.message , null);
        });
    }

}