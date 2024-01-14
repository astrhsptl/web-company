from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from .models import File
from .serializers import FileSerializer


class FileViewSet(ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id",]
    filterset_fields = ["id",]
    tags = ["File"]
