from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from .models import Customer, Product, ProductWork
from .serializers import (
    CustomerSerializer,
    ProductSerializer,
    ProductWorkSerializer
)


class CustomerViewSet(ModelViewSet):
    queryset = Customer.objects.all()
    serializer_class = CustomerSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "name", "link"]
    filterset_fields = ["id", "name", "link"]
    tags = ["Customer"]


class ProductWorkViewSet(ModelViewSet):
    queryset = ProductWork.objects.all()
    serializer_class = ProductWorkSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title"]
    filterset_fields = ["id", "title"]
    tags = ["Product work"]


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title", "description", "link", "created", "customer_id"]
    filterset_fields = ["id", "title", "description", "link", "created"]
    tags = ["Product"]
