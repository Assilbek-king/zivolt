from django.contrib import admin
from main.models import *

class AdminModelSingle(admin.ModelAdmin):
    pass

admin.site.register(Slider, AdminModelSingle)
admin.site.register(Product, AdminModelSingle)
admin.site.register(Feedback, AdminModelSingle)