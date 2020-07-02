package com.daijiacong.eduservice.client;


import com.daijiacong.commonutlis.R;
import org.springframework.stereotype.Component;

import java.util.List;
//熔断器的实现类
@Component
public class VodFileDegradeFeignClient implements VodClient {
   //出错之后会执行  //如8003挂了
    @Override
    public R removeAlyVideo(String id) {
        return R.error().message("删除视频出错了");
    }

    @Override
    public R deleteBatch(List<String> videoIdList) {
        return R.error().message("删除多个视频出错了");
    }
}
