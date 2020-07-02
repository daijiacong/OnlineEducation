import request from '@/utils/request'

export default {
    //登录的方法
  submitLoginUser(userInfo) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: userInfo
    })
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get'
    })
  }

}