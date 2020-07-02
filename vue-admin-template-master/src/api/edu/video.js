import request from '@/utils/request'
export default {

    //添加小节
    addVideo(video) {
        return request({
            url: '/eduservice/video/addVideo',
            method: 'post',
            data: video
          })
    },
      //根据id查询小节
      getVideo(videoId) {
        return request({
            url: '/eduservice/video/getVideoInfo/'+videoId,
            method: 'get'
          })
    },
   
    //修改小节
    updateVideo(video) {
      return request({
          url: '/eduservice/video/updateVideo',
          method: 'post',
          data: video
        })
  },
    
    //删除小节
    deleteVideo(id) {
        return request({
            url: '/eduservice/video/'+id,
            method: 'delete'
          })
    },
}