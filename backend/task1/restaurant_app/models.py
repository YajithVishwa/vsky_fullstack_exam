from django.db import models

# Create your models here.
class Restaurant(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    rating = models.FloatField()

    def __str__(self):
        return self.name