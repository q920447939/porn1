package spring.io.porn.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import spring.io.porn.mapper.PornMapper;
import spring.io.porn.service.PornService;


/**
 * @Description:  服务实现类
 * @author leegoo
 * @date 2019-10-02
 */
@Service
public class PornServiceImpl implements PornService {

	@Autowired
	private PornMapper mapper;


	
}
