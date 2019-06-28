from django.db import models

# Create your models here.

class doll(models.Model):
    DOLL_TYPES = (
        ('AR','AR'),
        ('RF','RF'),
        ('MG','MG'),
        ('HG','HG'),
        ('SG','SG'),
        ('SMG','SMG'),
    )

    name = models.CharField(max_length=32)
    type = models.CharField(max_length=32, choices=DOLL_TYPES)
