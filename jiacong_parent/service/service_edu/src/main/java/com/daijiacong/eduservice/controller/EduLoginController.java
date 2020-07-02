package com.daijiacong.eduservice.controller;


import com.daijiacong.commonutlis.R;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/eduservice/user")
//@CrossOrigin
public class EduLoginController {
    //login
    @PostMapping("login")
    public R login() {
        return R.ok().data("token","admin");
    }
    //info
    @GetMapping("info")
    public R info() {
        return R.ok().data("roles","管理员").data("name","admin").data("avatar","https://edu-00.oss-cn-shenzhen.aliyuncs.com/%E5%A4%B4%E5%83%8F.png");
    }
}
