from uuid import uuid4
from django.db import models

from files.models import File


class ProductWork(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    title = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return str(self.title)


class Customer(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    name = models.CharField(max_length=100, null=False, blank=False)
    link = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.name)


class Product(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    title = models.CharField(max_length=100, null=False, blank=False)
    description = models.TextField(max_length=1024, null=False, blank=False)
    link = models.CharField(max_length=200, null=True, blank=True)
    created = models.DateField(blank=True, null=True)
    customer_id = models.ForeignKey(to=Customer, related_name="customer_id", null=True, blank=True, on_delete=models.PROTECT)
    images = models.ManyToManyField(to=File, related_name="product_file", blank=True)
    works = models.ManyToManyField(to=ProductWork, related_name="product_works", blank=True)

    def __str__(self):
        return str(self.title)
