from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('', views.index, name='index'),
    path('ticket', views.ticket),
    path('forum/', views.forum, name='forum'),
    path('404', views.error, name='404'),
]
