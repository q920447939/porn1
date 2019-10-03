package spring.io.porn;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "spring.io.porn")
@MapperScan("spring.io.porn.mapper")
public class PornApplication {

    public static void main(String[] args) {
        SpringApplication.run(PornApplication.class, args);
    }



}
