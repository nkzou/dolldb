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
    name = models.CharField(max_length=32)
    type = models.CharField(max_length=32, choices=DOLL_TYPES)
    rarity = models.PositiveSmallIntegerField(choices=RARITIES)
    index_id = models.PositiveSmallIntegerField()
    build_time = models.DurationField()
    
    # stats
    hp = models.IntegerField()
    dmg = models.IntegerField()
    rof = models.IntegerField()
    acc = models.IntegerField()
    eva = models.IntegerField()
    arm = models.IntegerField()
    ap = models.IntegerField()

class fairy(models.Model):
    FAIRY_TYPES = (
        ('','Combat'),
        ('','Strategic'),
    )