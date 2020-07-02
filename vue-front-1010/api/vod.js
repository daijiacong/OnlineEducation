import request from '@/utils/request'
export default {
  getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }

}