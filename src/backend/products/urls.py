from rest_framework.routers import SimpleRouter

from .views import CustomerViewSet, ProductViewSet, ProductWorkViewSet


router = SimpleRouter()
router.register("customer", CustomerViewSet)
router.register("product", ProductViewSet)
router.register("product-work", ProductWorkViewSet)
urlpatterns = router.urls