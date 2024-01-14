from uuid import uuid4
from django.db import models


class File(models.Model):
    id = models.UUIDField(
        primary_key=True,
        db_index=True,
        default=uuid4,
        editable=False)
    file = models.FileField(upload_to="files/")
