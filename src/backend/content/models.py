from uuid import uuid4
from django.db import models


class Service(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(max_length=512, null=False, blank=False)
    preview = models.ImageField(upload_to="service/", null=True, blank=True)

    def __str__(self):
        return str(self.title)


class Team(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    name = models.CharField(max_length=120, null=False, blank=False)
    position = models.CharField(max_length=50, null=False, blank=False)
    description = models.TextField(max_length=512, null=False, blank=False)
    photo = models.ImageField(upload_to="team/", null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Post(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    title = models.CharField(max_length=150, null=False, blank=False)
    body = models.TextField(max_length=2048, null=False, blank=False)
    preview = models.ImageField(upload_to="team/", null=True, blank=True)

    def __str__(self):
        return str(self.title)
