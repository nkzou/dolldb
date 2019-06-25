from django.db import models

# Create your models here.

class doll_type(models.Model):
    name = models.CharField(max_length=32)
    abbr = models.CharField(max_length=8)

class doll(models.Model):
    name = models.CharField(max_length=32)
    type = models.ForeignKey(doll_type, on_delete=models.CASCADE)

#possibly add choice field instead of doll_type