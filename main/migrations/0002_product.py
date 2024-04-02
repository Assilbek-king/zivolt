# Generated by Django 5.0 on 2024-03-13 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(blank=True, max_length=300)),
                ('logo', models.ImageField(blank=True, upload_to='upload')),
                ('description', models.TextField(blank=True)),
            ],
        ),
    ]
