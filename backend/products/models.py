from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    imageUrl = models.URLField(max_length=200)
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.name



