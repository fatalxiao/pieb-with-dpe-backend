DROP TABLE IF EXISTS `patient_group`;
CREATE TABLE `patient_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) DEFAULT NULL COMMENT '组名',
  PRIMARY KEY (`id`),
  UNIQUE KEY `patient_group_id_uindex` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='分组';

SET FOREIGN_KEY_CHECKS = 1;
