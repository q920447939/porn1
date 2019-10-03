package spring.io.porn.entity;

import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

/**
 * @Description: 
 * @author leegoo
 * @date 2019-10-02
 */
@Data
@Accessors(chain = true)

@TableName("porn")
public class PornBO extends Porn{
	private Boolean flg ;
}
