package spring.io.porn;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import spring.io.porn.entity.Porn;
import spring.io.porn.mapper.PornMapper;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest
public class PornApplicationTests {

    @Test
    public void contextLoads() {


    }

    @Test
    public void disposeImg () {

    }

    @Resource
    private PornMapper  mapper;

    @Test
    public void lambdaPagination() {
        Page<Porn> page = new Page<>(1, 3);
        QueryWrapper<Porn> wrapper = new QueryWrapper<>();
//        wrapper.lambda().ge(Porn::getAge, 1).orderByAsc(User::getAge);
        IPage<Porn> result = mapper.selectPage(page, wrapper);
        System.out.println(result.getTotal());
        Assert.assertTrue(result.getTotal() > 3);
        Assert.assertEquals(3, result.getRecords().size());
    }


}
