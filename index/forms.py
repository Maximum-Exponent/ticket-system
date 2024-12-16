from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):
    name = forms.CharField(max_length=255)
    comment = forms.TextField()

    class Meta:
        model = Comment
        fields = ('name', 'comment')