import request from '@/utils/request'

export default {
    //查询热门课程和名师
  getIndexData() {
    return request({
      url: '/eduservice/indexfront/index',
      method: 'get'
    })
  }
}