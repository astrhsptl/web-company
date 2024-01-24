from rest_framework.serializers import ModelSerializer

from files.serializers import FileSerializer
from products.serializers import CustomerSerializer

from .models import TicketJob, TicketOrder


class TicketJobSerializer(ModelSerializer):
    files = FileSerializer(many=True, read_only=True)
    customer = CustomerSerializer(source='ticket_order_customer_id', many=False, read_only=True)
 
    class Meta:
        model = TicketJob
        fields = ("__all__")


class TicketOrderSerializer(ModelSerializer):
    class Meta:
        model = TicketOrder
        fields = ("__all__")