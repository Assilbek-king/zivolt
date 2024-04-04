from django.db import models
from main.models import *
# Create your views here.


class Slider(models.Model):
    title = models.CharField(max_length=300, blank=True)
    pc_logo = models.ImageField(upload_to='upload', blank=True)
    mob_logo = models.ImageField(upload_to='upload', blank=True)


    def __str__(self):
        return f'{self.title}'


class Product(models.Model):
    title = models.CharField(max_length=300, blank=True)
    logo = models.ImageField(upload_to='upload', blank=True)
    description = models.TextField(blank=True)
    image1 = models.ImageField(upload_to='upload', blank=True)
    image2 = models.ImageField(upload_to='upload', blank=True)
    table = models.ImageField(upload_to='upload', blank=True)
    table2 = models.ImageField(upload_to='upload', blank=True)



    def __str__(self):
        return f'{self.title}'


class Feedback(models.Model):
    name = models.CharField(max_length=300, blank=True)
    company = models.CharField(max_length=300, blank=True)
    phone = models.CharField(max_length=30, blank=True)
    email = models.CharField(max_length=70, blank=True)

    def __str__(self):
        return f'{self.name} {self.phone}'