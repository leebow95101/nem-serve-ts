// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDict from '../../../app/model/dict';
import ExportResource from '../../../app/model/resource';
import ExportRole from '../../../app/model/role';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Dict: ReturnType<typeof ExportDict>;
    Resource: ReturnType<typeof ExportResource>;
    Role: ReturnType<typeof ExportRole>;
    User: ReturnType<typeof ExportUser>;
  }
}
