/**
 * Created by Administrator on 2017/7/21.
 */
/**
 * Created by Administrator on 2017/7/20.
 */
import {User} from './User';
export class UserRsp {
  /**
   * {
   "RtnCode":"9999",
   "RtnMsg":"ok",
   "Users":[
{
         "AppUserId":"0",
         "AppUserName":"超级用户",
         "AppLoginName":"SUPER",
"AppPassWord":"123456",
"AppUserPostion":"超级用户拥有所有权限，其他用户都需要通过超级用户赋予权限",
"AppUserIsvalid":"1"
}
]
}
   */
  public RtnCode: string;
  public RtnMsg: string;
  public Users: User[];


constructor()
{
}

}
