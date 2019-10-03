/**
 * @Project:
 * @Author: leegoo
 * @Date: 2019年10月03日
 */
package spring.io.porn.config;

/**
 * ClassName: WebAppConfigurer
 * @Description:
 * @author leegoo
 * @date 2019年10月03日
 */
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebAppConfigurer implements   WebMvcConfigurer {

    @Value("${image.path}")
    private String imagePath ;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/image/**").addResourceLocations(imagePath);
    }
}