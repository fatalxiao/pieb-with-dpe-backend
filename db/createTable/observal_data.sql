create table observal_data
(
  id                                         int auto_increment
    primary key,
  patient_id                                 varchar(10)            null
  comment '孕妇住院号',
  ep_placement_point_id                      int                    null
  comment '硬膜外穿刺点位置',
  observal_end_point_id                      int                    null
  comment '观察终点',
  cervix_fully_dilated_time                  datetime               null
  comment '宫口开全时间',
  cervix_dilatation                          int                    null
  comment '宫颈扩张度',
  initial_time                               datetime               null
  comment '麻醉开始时间',
  initial_dose                               int                    null
  comment '负荷剂量(ml)',
  pump_consumption                           int                    null
  comment '泵消耗(ml)',
  bolus                                      int                    null
  comment '人工负荷量(ml)',
  pca_count                                  int                    null
  comment 'PCA次数',
  manual_bolus_count                         int                    null
  comment '人工硬膜外追加次数',
  first_pca_time                             datetime               null
  comment '首次PCA时间',
  has_vasoactive_agent                       tinyint(1) default '0' null
  comment '是否使用血管活性药物',
  first_manual_bolus_time                    datetime               null
  comment '首次人工硬膜外追加时间',
  has_hypotension                            tinyint(1) default '0' null
  comment '是否有血压过低',
  has_caesarean_section                      tinyint(1) default '0' null
  comment '是否有剖宫产',
  has_instrumental                           tinyint(1) default '0' null
  comment '是否有器械助产',
  has_lateral_episiotomy                     tinyint(1) default '0' null
  comment '是否有侧切',
  birth_time                                 datetime               null
  comment '分娩时间',
  foetal_weight                              int                    null
  comment '胎儿体重',
  one_minute_apgar_score                     int                    null
  comment '1分钟APGAR评分',
  five_minute_apgar_score                    int                    null
  comment '5分钟APGAR评分',
  description                                varchar(1000)          null
  comment '备注',
  ctime                                      datetime               null,
  utime                                      datetime               null,
  dtime                                      datetime               null,
  constraint observal_data_id_uindex
  unique (id)
)
  comment '观察数据';
