from django.contrib import admin

from .models import Post, Service, Team 


class PostAdmin(admin.ModelAdmin):
    fields = (
        "id", "title", "body", "preview"
    )
    list_display = (
        "id", "title"
    )
    search_fields = (
        "id", "title", "body"
    )
    readonly_fields = (
        "id",
    )


class ServiceAdmin(admin.ModelAdmin):
    fields = (
        "id", "title", "description", "preview"
    )
    list_display = (
        "id", "title"
    )
    search_fields = (
        "id", "title", "description"
    )
    readonly_fields = (
        "id",
    )


class TeamAdmin(admin.ModelAdmin):
    fields = (
        "id", "name", "position", "description", "photo"
    )
    list_display = (
        "id", "name", "position",
    )
    search_fields = (
        "id", "title", "description"
    )
    readonly_fields = (
        "id",
    )


admin.site.register(Team, TeamAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Service, ServiceAdmin)