package spring.io.porn.entity;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;
import java.sql.Blob;
import java.util.Date;
/**
 * @Description: 
 * @author leegoo
 * @date 2019-10-02
 */
@Data
@Accessors(chain = true)

@TableName("porn")
public class Porn implements Serializable {

    private static final long serialVersionUID = 1L;

    @TableId("id")
	private String id;

	@TableField("date")
	private Date date;

	@TableField("title")
	private String title;

	@TableField("down_url")
	private String downUrl;

	@TableField("source_img_url")
	private String sourceImgUrl;

	@TableField("local_img")
	private Blob localImg;



}
