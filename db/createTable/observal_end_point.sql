CREATE TABLE observal_end_point
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(20) NULL
  COMMENT '观察终点名称',
  CONSTRAINT observal_end_point_id_uindex
  UNIQUE (id)
)
  COMMENT '观察终点'
  ENGINE = InnoDB
  CHARSET = utf8;
