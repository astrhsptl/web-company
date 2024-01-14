from django.contrib import admin

from .models import Product, ProductWork, Customer

class CustomerAdmin(admin.ModelAdmin):
    fields = (
        "id", "name", "link"
    )
    list_display = (
        "id", "name", "link"
    )
    search_fields = (
        "id", "name", "link"
    )
    readonly_fields = (
        "id",
    )


class ProductWorkAdmin(admin.ModelAdmin):
    fields = (
        "id", "title"
    )
    list_display = (
        "id", "title"
    )
    search_fields = (
        "id", "title"
    )
    readonly_fields = (
        "id",
    )


class ProductAdmin(admin.ModelAdmin):
    fields = (
        "id", "title", "description", "link",
        "created", "customer_id", "images", "works"
    )
    list_display = (
        "id", "title", "link", "created",
    )
    search_fields = (
        "id", "title", "description", "link",
        "created", "customer_id", "images", "works"
    )
    readonly_fields = (
        "id",
    )

admin.site.register(Customer, CustomerAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductWork, ProductWorkAdmin)