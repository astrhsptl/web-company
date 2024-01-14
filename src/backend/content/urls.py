from rest_framework.routers import SimpleRouter

from .views import (
    TeamViewSet,
    PostViewSet,
    ServiceViewSet,
)


router = SimpleRouter()
router.register("team", TeamViewSet)
router.register("post", PostViewSet)
router.register("service", ServiceViewSet)
urlpatterns = router.urls