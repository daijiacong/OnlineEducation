package com.daijiacong.eduservice.service;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.daijiacong.eduservice.entity.EduTeacher;
import com.baomidou.mybatisplus.extension.service.IService;

import java.util.Map;

/**
 * <p>
 * 讲师 服务类
 * </p>
 *
 * @author testjava
 * @since 2020-05-03
 */
public interface EduTeacherService extends IService<EduTeacher> {
    //1 分页查询讲师的方法
    Map<String, Object> getTeacherFrontList(Page<EduTeacher> pageTeacher);
}
