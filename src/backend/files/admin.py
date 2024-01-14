from django.contrib import admin

from .models import File


class FileAdmin(admin.ModelAdmin):
    fields = (
        'id', 'file',
    )
    list_display = (
        'id', 'file',
    )
    search_fields = (
        'id', 'file',
    )
    readonly_fields = (
        'id',
    )



admin.site.register(File, FileAdmin)