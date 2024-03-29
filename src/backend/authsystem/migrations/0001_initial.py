# Generated by Django 5.0.1 on 2024-01-14 16:22

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('id', models.UUIDField(db_index=True, default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50, verbose_name='First name')),
                ('last_name', models.CharField(max_length=50, verbose_name='Last name')),
                ('avatar', models.ImageField(blank=True, upload_to='user/avatar', verbose_name='Avatar')),
                ('phone', models.CharField(blank=True, max_length=30, verbose_name='Phone')),
                ('email', models.EmailField(max_length=100, unique=True, verbose_name='Email')),
                ('balance', models.FloatField(default=0, verbose_name='Balance')),
                ('is_active', models.BooleanField(default=True)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('is_seller', models.BooleanField(default=False)),
            ],
            options={
                'indexes': [models.Index(fields=['id'], name='id_index')],
            },
        ),
    ]
