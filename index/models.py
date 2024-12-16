from django.db import models
from datetime import datetime

class Comment(models.Model):
    name = models.CharField(max_length=100)
    comment = models.TextField()
    date = models.DateTimeField(default=datetime.now)
    reply_id = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.name} - {self.date}"

    def get_replies(self):
        return Comment.objects.filter(reply_id=self.id)