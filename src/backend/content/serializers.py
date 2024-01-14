from rest_framework.serializers import ModelSerializer

from .models import Service, Team, Post


class ServiceSerializer(ModelSerializer):
    class Meta:
        model = Service
        fields = ("__all__")


class TeamSerializer(ModelSerializer):
    class Meta:
        model = Team
        fields = ("__all__")


class PostSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = ("__all__")
