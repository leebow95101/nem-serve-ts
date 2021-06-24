// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBaseController from '../../../app/controller/BaseController';
import ExportLogin from '../../../app/controller/login';
import ExportLoginOut from '../../../app/controller/loginOut';
import ExportSystemDict from '../../../app/controller/system/dict';
import ExportSystemResource from '../../../app/controller/system/resource';
import ExportSystemRole from '../../../app/controller/system/role';
import ExportSystemUser from '../../../app/controller/system/user';

declare module 'egg' {
  interface IController {
    baseController: ExportBaseController;
    login: ExportLogin;
    loginOut: ExportLoginOut;
    system: {
      dict: ExportSystemDict;
      resource: ExportSystemResource;
      role: ExportSystemRole;
      user: ExportSystemUser;
    }
  }
}
