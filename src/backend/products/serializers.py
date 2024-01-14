from rest_framework import serializers

from .models import (
    Seller, Category,
    Product, ProductCharacteristic,
    CustomPhoto
)


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ("__all__")


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("__all__")


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ("__all__")


class ProductCharacteristicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductCharacteristic
        fields = ("__all__")


class CustomPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomPhoto
        fields = ("__all__")
