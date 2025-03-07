from django.shortcuts import render, redirect
from .models import Comment
from datetime import datetime
#from django.http import HttpResponse
#from .forms import TicketForm

def index(request):
    return render(request, 'public/homePage.html')

def error(request):
    return render(request, 'public/404.html')

def ticket(request):
    return render(request, 'public/ticket.html')

def forum(request):
    if request.method == 'POST':
        reply_id = request.POST.get('reply_id', 0)
        name = request.POST.get('name')
        comment = request.POST.get('comment')        

        new_comment = Comment(name=name, comment=comment, reply_id=reply_id)
        new_comment.save()

        return redirect('forum')
    
    comments = Comment.objects.filter(reply_id=0)
    return render(request, 'public/forum.html', {'comments': comments})



#def send_comment(request):
#  title = request.POST.get('title')
#  comment = request.POST.get('comment')

  # Aggiungi codice per salvare i dati nella base di dati
#  return HttpResponse('Commento inviato con successo!')

#def send_ticket(request):
#    pass