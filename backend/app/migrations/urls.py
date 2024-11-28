from django.urls import path
from .views import UserList, UserDetail  # Puedes tener vistas para obtener información de usuario, por ejemplo

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
]
