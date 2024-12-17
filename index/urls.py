from django.urls import path
from . import views
#from .views import send_comment
#from .views import send_ticket


urlpatterns = [
    path('', views.index),
    path('', views.index, name='index'),
    path('ticket', views.ticket),
    path('forum/', views.forum, name='forum'),
    path('404', views.error, name='404'),
#    path('send-comment/', send_comment, name='send_comment'),
#    path('send-ticket/', send_ticket, name='send_ticket'),
]
