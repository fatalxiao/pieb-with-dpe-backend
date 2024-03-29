CREATE TABLE `patient_group` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR ( 20 ) DEFAULT NULL COMMENT '组名',
	PRIMARY KEY ( `id` ),
	UNIQUE KEY `patient_group_id_uindex` ( `id` ) USING BTREE
) ENGINE = INNODB AUTO_INCREMENT = 6 DEFAULT CHARSET = utf8 COMMENT = '分组';

SET FOREIGN_KEY_CHECKS = 1;
