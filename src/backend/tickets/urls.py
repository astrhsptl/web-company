from rest_framework.routers import SimpleRouter

from .views import TicketJobViewSet, TicketOrderViewSet


router = SimpleRouter()
router.register("ticket/job", TicketJobViewSet)
router.register("ticket/order", TicketOrderViewSet)
urlpatterns = router.urls
