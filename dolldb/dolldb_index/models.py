from django.db import models

class doll(models.Model):
    DOLL_TYPES = (
        ('AR','AR'),
        ('RF','RF'),
        ('MG','MG'),
        ('HG','HG'),
        ('SG','SG'),
        ('SMG','SMG'),
    )
    RARITIES = (
        (5,'★★★★★'),
        (4,'★★★★'),
        (3,'★★★'),
        (2,'★★'),
        (1,'⚝'),
    )
    # doll data
    name = models.CharField(max_length=32)
    type = models.CharField(max_length=32, choices=DOLL_TYPES)
    rarity = models.PositiveSmallIntegerField(choices=RARITIES)
    index_id = models.PositiveSmallIntegerField()
    build_time = models.DurationField()
    
    # stat data
    stat_hp = models.IntegerField()
    stat_dmg = models.IntegerField()
    stat_rof = models.IntegerField()
    stat_acc = models.IntegerField()
    stat_eva = models.IntegerField()
    stat_armor = models.IntegerField()
    stat_ap = models.IntegerField()
    # tile data
    tile_active = models.CharField(max_length=32)
    tile_center = models.CharField(max_length=32)
    tile_target = models.CharField(max_length=32)
    tile_effect = models.CharField(max_length=128)
    # skill data
    skill_name = models.CharField(max_length=64)
    skill_type = models.CharField(max_length=32)
    skill_desc = models.TextField()
    skill_target = models.CharField(max_length=32)
    skill_icd = models.DurationField()
    skill_cd = models.DurationField()
    skill_data = models.TextField() #json until better solution

class fairy(models.Model):
    FAIRY_TYPES = (
        ('','Combat'),
        ('','Strategic'),
    )