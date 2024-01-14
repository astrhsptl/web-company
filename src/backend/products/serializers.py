from rest_framework.serializers import ModelSerializer

from files.serializers import FileSerializer
from .models import Customer, ProductWork, Product



class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = ("__all__")


class ProductWorkSerializer(ModelSerializer):
    class Meta:
        model = ProductWork
        fields = ("__all__")


class ProductSerializer(ModelSerializer):
    customer = CustomerSerializer(source='customer_id', many=False, read_only=True)
    works = ProductWorkSerializer(source='product_works', many=True, read_only=True)
    images = FileSerializer(source='product_file', many=True, read_only=True)

    class Meta:
        model = Product
        fields = ("__all__")