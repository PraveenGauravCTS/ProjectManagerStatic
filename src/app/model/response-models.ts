
import { UserModel } from '../model/user-model';
import { ProjectModel } from '../model/project-model';
import { ParentTaskModel } from '../model/parent-task-model';
import { TaskModel } from '../model/task-model';



export class ResponseModel {
    taskViews: TaskModel;
}

export class TaskResponseModel {
    status: string;
    response: ResponseModel;
}

export class ProjectResponseModel {
    status: string;
    response: ProjectModel;
}

export class ParentTaskResponseModel {
    status: string;
    response: ParentTaskModel;
}

export class UserResponseModel {
    status: string;
    response: UserModel;
}

export class TaskListResponseModel {
    status: string;
    response?: TaskModel[];
}

export class ProjectListResponseModel {
    status: string;
    response?: ProjectModel[];
}

export class ParentTaskListResponseModel {
    status: string;
    response?: ParentTaskModel[];
}

export class UserListResponseModel {
    status: string;
    response?: UserModel[];
}
