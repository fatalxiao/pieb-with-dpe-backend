CREATE TABLE sensory_block (
	id INT AUTO_INCREMENT PRIMARY KEY,
	NAME VARCHAR ( 20 ) NULL,
	VALUE INT NULL,
	type INT NULL COMMENT '阻滞平面类型，1：头端阻滞平面，2：尾端阻滞平面',
	CONSTRAINT sensory_block_id_uindex UNIQUE ( id )
) COMMENT '阻滞平面' ENGINE = INNODB CHARSET = utf8;
