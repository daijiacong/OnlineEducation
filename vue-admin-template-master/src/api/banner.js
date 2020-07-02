import request from '@/utils/request'
export default {
    //1 Banner列表（条件查询分页）
    //current当前页 limit每页记录数 bannerQuery条件对象
    getBannerListPage(current,limit,bannerQuery) {
        return request({
            url: `/educms/banneradmin/pageBanner/${current}/${limit}`,
            method: 'get',
            //bannerQuery条件对象，后端使用RequestBody获取数据
            //data表示把对象转换json进行传递到接口里面
           // data: bannerQuery
          })
    },
    //删除Banner
    deleteBannerId(id) {
        return request({
            url: `/educms/banneradmin/remove/${id}`,
            method: 'delete'
          })
    },
    //添加Banner
    addBanner(banner) {
        return request({
            url: `/educms/banneradmin/addBanner`,
            method: 'post',
            data: banner
          })
    },
    //根据id查询Banner
    getBannerInfo(id) {
        return request({
            url: `/educms/banneradmin/getBanner/${id}`,
            method: 'get'
          })
    },
    //修改Banner
    updateBannerInfo(banner) {
        return request({
            url: `/educms/banneradmin/updateBanner`,
            method: 'post',
            data: banner
          })
    }
}
