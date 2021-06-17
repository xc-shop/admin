# reactAdmin

> react + antd的管理后台系统方案

## 后端接口
- login
 ```js
  {
    ret: '0',
    msg: '成功',
    data: {
      permissions: [
        '/login',
        ...
      ],
      role: '系统管理员',
      roleType: 1,   // 1 管理员 2 运营人员 0 游客，
      uid: 1,
      userName: '系统管理员',
      avatar: ''
    }
  }
 ```