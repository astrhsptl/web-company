from rest_framework.serializers import Serializer, CharField, EmailField


class EmailSendingSerializer(Serializer):
    title = CharField(max_length=150)
    message = CharField(max_length=1023)
    recipient = EmailField()
