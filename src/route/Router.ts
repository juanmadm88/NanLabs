import { TaskController } from "../controller/TaskController";

export class Router {

    private routes: any;
    private taskController:TaskController;

    constructor() {
        this.taskController = new TaskController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.route('/')
            .post(this.taskController.create);

    }

    public getRoutes() {
        return this.routes;
    }

}
