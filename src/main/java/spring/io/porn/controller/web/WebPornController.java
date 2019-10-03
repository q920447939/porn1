/**
 * @Project:
 * @Author: leegoo
 * @Date: 2019年10月03日
 */
package spring.io.porn.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * ClassName: WebPornController
 *
 * @author leegoo
 * @Description:
 * @date 2019年10月03日
 */
@Controller
public class WebPornController {

    @RequestMapping("/")
    public String index() {
        System.out.println("22222222222");
        return "666";
    }
}
