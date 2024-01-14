from rest_framework.filters import SearchFilter
from rest_framework.viewsets import ModelViewSet
from django_filters.rest_framework import DjangoFilterBackend

from .models import Team, Post, Service
from .serializers import (
    TeamSerializer,
    PostSerializer,
    ServiceSerializer,
)


class TeamViewSet(ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "name", "position", "description"]
    filterset_fields = ["id", "name", "position", "description"]
    tags = ["Team"]


class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title", "body",]
    filterset_fields = ["id", "title", "body",]
    tags = ["Post"]


class ServiceViewSet(ModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    search_fields = ["id", "title", "description",]
    filterset_fields = ["id", "title", "description",]
    tags = ["Service"]