from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from .models import TicketJob, TicketOrder
from .serializers import TicketJobSerializer, TicketOrderSerializer


class TicketJobViewSet(ModelViewSet):
    queryset = TicketJob.objects.all()
    serializer_class = TicketJobSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = [
        "id", "first_name", "middle_name", "last_name",
        "position", "accompanying", "salary_low", "salary_top",
    ]
    filterset_fields = [
        "id", "first_name", "middle_name", "last_name",
        "position", "accompanying", "salary_low", "salary_top",
    ]
    tags = ["Ticket job"]


class TicketOrderViewSet(ModelViewSet):
    queryset = TicketOrder.objects.all()
    serializer_class = TicketOrderSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title", "body", "customer_id",]
    filterset_fields = ["id", "title", "body",]
    tags = ["Ticket job"]