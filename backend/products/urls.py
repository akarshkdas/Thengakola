from django.urls import path
from .views import register, get_products, AddProductView, user_profile
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('products/', get_products, name='get_products'),
    path('products/add/', AddProductView.as_view(), name='admin_add_product'),  # Admin-only product addition
    path('register/', register, name='register'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', user_profile, name='user_profile'),
]
