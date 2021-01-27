CREATE TABLE ep_placement_point
(
  id   INT AUTO_INCREMENT
    PRIMARY KEY,
  name VARCHAR(20) NULL
  COMMENT '硬膜外穿刺点位置名称',
  CONSTRAINT ep_placement_point_id_uindex
  UNIQUE (id)
)
  COMMENT '硬膜外穿刺点位置'
  ENGINE = InnoDB
  CHARSET = utf8;
