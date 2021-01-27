CREATE TABLE pieb_with_dpe_group
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(20) NULL
  COMMENT '组名',
  CONSTRAINT pieb_with_dpe_group_id_uindex
  UNIQUE (id)
)
  COMMENT '分组'
  ENGINE = InnoDB
  CHARSET = utf8;
