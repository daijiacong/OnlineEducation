package com.daijiacong.eduservice.controller.back;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.daijiacong.commonutlis.MD5;
import com.daijiacong.commonutlis.R;
import com.daijiacong.eduservice.entity.UcenterMember;
import com.daijiacong.eduservice.service.UcenterMemberService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/educenter/admin/user")
//@CrossOrigin
public class UcenterMemberBackComtroller {
    @Autowired
    private UcenterMemberService memberService;

    //1 查询讲师表所有数据
    //rest风格
    @ApiOperation(value = "获取管理用户分页列表")
    @GetMapping("{page}/{limit}")
    public R index(
            @ApiParam(name = "page", value = "当前页码", required = true)
            @PathVariable Long page,

            @ApiParam(name = "limit", value = "每页记录数", required = true)
            @PathVariable Long limit,

            @ApiParam(name = "courseQuery", value = "查询对象", required = false)
                    UcenterMember userQueryVo) {
        Page<UcenterMember> pageParam = new Page<>(page, limit);
        QueryWrapper<UcenterMember> wrapper = new QueryWrapper<>();
        if(!StringUtils.isEmpty(userQueryVo.getUsername())) {
            wrapper.like("username",userQueryVo.getUsername());
        }

        IPage<UcenterMember> pageModel = memberService.page(pageParam, wrapper);
        return R.ok().data("items", pageModel.getRecords()).data("total", pageModel.getTotal());
    }

    //2 逻辑删除用户的方法
    @ApiOperation(value = "删除管理用户")
    @DeleteMapping("remove/{id}")
    public R remove(@PathVariable String id) {
        memberService.removeById(id);
        return R.ok();
    }

    @ApiOperation(value = "新增管理用户")
    @PostMapping("save")
    public R save(@RequestBody UcenterMember user) {
        user.setPassword(MD5.encrypt(user.getPassword()));
        memberService.save(user);
        return R.ok();
    }

    @ApiOperation(value = "修改管理用户")
    @PutMapping("update")
    public R updateById(@RequestBody UcenterMember user) {
        memberService.updateById(user);
        return R.ok();
    }

}
