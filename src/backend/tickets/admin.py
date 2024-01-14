from django.contrib import admin

from .models import TicketJob, TicketOrder

class TicketJobAdmin(admin.ModelAdmin):
    fields = (
        "id", "first_name", "middle_name", "last_name",
        "position", "accompanying", "salary_low", "salary_top",
        "resume", "resume_link"
    )
    list_display = (
        "id", "first_name", "last_name","position",
        "salary_low", "salary_top",
    )
    search_fields = (
        "id", "first_name", "middle_name", "last_name",
        "position", "accompanying", "salary_low", "salary_top",
        "resume_link"
    )
    readonly_fields = (
        "id",
    )


class TicketOrderAdmin(admin.ModelAdmin):
    fields = (
        "id", "title", "body", "customer_id", "files"
    )
    list_display = (
        "id", "title",
    )
    search_fields = (
        "id", "title", "body",
    )
    readonly_fields = (
        "id",
    )


admin.site.register(TicketJob, TicketJobAdmin)
admin.site.register(TicketOrder, TicketOrderAdmin)