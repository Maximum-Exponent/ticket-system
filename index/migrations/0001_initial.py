# Generated by Django 5.0.9 on 2024-12-13 12:03

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('comment', models.TextField()),
                ('date', models.DateTimeField(default=datetime.datetime.now)),
                ('reply_id', models.IntegerField(default=0)),
            ],
        ),
    ]
