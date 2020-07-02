package com.daijiacong.oss.service;

import org.springframework.web.multipart.MultipartFile;

public interface OssService {
    //上传头像到oss
    String uploadFileAvatar(MultipartFile file);
}
