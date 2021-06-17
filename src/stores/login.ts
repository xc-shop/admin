import { action, decorate, observable } from "mobx";
import {persist} from 'mobx-persist'

export type UserInfoType = {
  roleType: number,
  userName: string,
  avatar: string
}

export class LoginStore {
  userInfo: UserInfoType = {
    roleType: 0,
    userName: '',
    avatar: ''
  }

  setUserInfo (userInfo: UserInfoType) {
    this.userInfo = userInfo
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
  }

  getUserInfo () {
    return this.userInfo
  }

}

decorate(LoginStore, {
  userInfo: [(persist('userInfo') as any), observable],
  setUserInfo: action,
  getUserInfo: action
})

export default new LoginStore();