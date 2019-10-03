## 效果图

![1570083411744](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\1570083411744.png)



## 步骤

1. ### 环境准备

   - maven
   - jdk
   - mysql
   
 2. ### 通过git 或者 zip 下载项目

 3. ### 修改配置文件,路径 `porn\src\main\resources\application.properties` ,修改 `spring.datasource.url`,`spring.datasource.username`,`spring.datasource.password`,`image.path`  

    ```properties
    spring.datasource.type=com.alibaba.druid.pool.DruidDataSource
    spring.datasource.url=jdbc:mysql://192.168.109.133:3306/porns?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=GMT%2B8
    spring.datasource.username=root
    spring.datasource.password=123
    spring.datasource.initialSize=5
    spring.datasource.minIdle=5
    spring.datasource.maxActive=20
    spring.datasource.maxWait=60000
    spring.datasource.timeBetweenEvictionRunsMillis=60000
    spring.datasource.minEvictableIdleTimeMillis=300000
    spring.datasource.validationQuery=SELECT 1 FROM DUAL
    spring.datasource.testWhileIdle=true
    spring.datasource.testOnBorrow=false
    spring.datasource.testOnReturn=false
    spring.datasource.poolPreparedStatements=true
    spring.datasource.maxPoolPreparedStatementPerConnectionSize=20
    spring.datasource.filters=stat,wall,log4j
    spring.datasource.connectionProperties=druid.stat.mergeSql=true;druid.stat.slowSqlMillis=5000
    spring.main.allow-bean-definition-overriding=true
    logging.level.cn.withmes.ct.forum.topic=debug
    mybatis-plus.mapper-locations=classpath*:/xml/*.xml
    server.port=80
    spring.mvc.throw-exception-if-no-handler-found=true  
    #预览图地址
    image.path=file:D://work_space//python_work_space//yellow_movie//images/
    
    ```
    
    ##### 执行sql脚本(当前目录下的porn.sql)
    
    
    
    
    
 4. 在porn 文件下执行`maven clean package  -D maven.test.skip=true`

 5. 执行成功后会多出一个target 文件, 执行命令 `java -jar target/porn-0.0.1-SNAPSHOT.jar`

 6. 浏览器访问localhost


