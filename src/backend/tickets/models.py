from uuid import uuid4
from django.db import models

from files.models import File
from products.models import Customer


class TicketOrder(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    title = models.CharField(max_length=100, null=False, blank=False)
    body = models.TextField(max_length=2048, null=False, blank=False)
    files = models.ManyToManyField(to=File, related_name="order_ticket_file", blank=True)
    customer_id = models.ForeignKey(to=Customer, related_name="ticket_order_customer_id", null=True, blank=True, on_delete=models.PROTECT)

    def __str__(self):
        return str(self.title)


class TicketJob(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False
    )
    first_name = models.CharField(max_length=100, null=False, blank=False)
    middle_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=False, blank=False)
    position = models.CharField(max_length=100, null=False, blank=False)
    accompanying = models.TextField(max_length=1024, null=False, blank=False)
    salary_low = models.FloatField(null=True, blank=True)
    salary_top = models.FloatField(null=True, blank=True)
    resume = models.FileField(upload_to="ticket/job/", blank=True, null=True)
    resume_link = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}: {self.position}"
