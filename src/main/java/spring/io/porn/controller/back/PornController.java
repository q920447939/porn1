package spring.io.porn.controller.back;


import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import spring.io.porn.controller.Query;
import spring.io.porn.entity.Porn;
import spring.io.porn.mapper.PornMapper;
import spring.io.porn.service.PornService;

import javax.annotation.Resource;


/**
 *code is far away from bug with the animal protecting
 *  ┏┓　　　┏┓
 *┏┛┻━━━┛┻┓
 *┃　　　　　　　┃ 　
 *┃　　　━　　　┃
 *┃　┳┛　┗┳　┃
 *┃　　　　　　　┃
 *┃　　　┻　　　┃
 *┃　　　　　　　┃
 *┗━┓　　　┏━┛
 *　　┃　　　┃神兽保佑
 *　　┃　　　┃代码无BUG！
 *　　┃　　　┗━━━┓
 *　　┃　　　　　　　┣┓
 *　　┃　　　　　　　┏┛
 *　　┗┓┓┏━┳┓┏┛
 *　　　┃┫┫　┃┫┫
 *　　　┗┻┛　┗┻┛
 *
 *   @description : Porn 控制器
 *   ---------------------------------
 *      @author leegoo
 *   @since 2019-10-02
 */
@RestController
@RequestMapping("/porn")
public class PornController  {

    @Autowired
    public PornService pornService;

    @Resource
    private PornMapper mapper;


    @PostMapping("/page")
    public IPage<Porn>  page (@RequestBody Query query) {
        Page<Porn> page = new Page<>(query.getCur(), query.getPageSize());
        QueryWrapper<Porn> wrapper = new QueryWrapper<>();
//        wrapper.lambda().ge(Porn::getAge, 1).orderByAsc(User::getAge);
        IPage<Porn> result = mapper.selectPage(page, wrapper);
        for (Porn record : result.getRecords()) {
            String[] split = record.getSourceImgUrl().split("/");
            record.setSourceImgUrl(split[split.length-1]);
        }
        return result;
    }
}