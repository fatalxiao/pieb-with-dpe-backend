CREATE TABLE observal_end_point (
	id INT AUTO_INCREMENT PRIMARY KEY,
	NAME VARCHAR ( 20 ) NULL COMMENT '观察终点名称',
CONSTRAINT observal_end_point_id_uindex UNIQUE ( id )
) COMMENT '观察终点' ENGINE = INNODB CHARSET = utf8;
