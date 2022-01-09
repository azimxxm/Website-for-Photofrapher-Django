from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('home-dark/', views.home_dark, name='home-dark'),
    path('photo-gallery/', views.gallery, name='photo-gallery'),
    path('photo-gallery/photo-details/', views.photo_details, name='photo-details'),
    path('photo-gallery/photo-2-column/', views.photo_2_column, name='photo-2-column'),
    path('photo-gallery/photo-4-column/', views.photo_4_column, name='photo-4-column'),
]
