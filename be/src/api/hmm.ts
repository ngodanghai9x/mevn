import hmmExecFactory from 'hmm/src/executor';
import SystemConfigModel from "../db/models/kv";
import UserModel from '../db/models/user';
import Announcement from "../db/models/announcement";
import TaskModel from "../db/models/tasks";
import HealthCheck from "../db/models/health-check";

export default hmmExecFactory({
  systemConfig: SystemConfigModel,
  user: UserModel,
  announcement: Announcement,
  task: TaskModel,
  healthCheck: HealthCheck,
  // add more models as you want
})
