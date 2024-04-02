from django.shortcuts import render
from main.models import *
# Create your views here.
# import requests
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.shortcuts import render



def indexHandler(request):
    slides = Slider.objects.all()
    products = Product.objects.all()
    # examples = Example.objects.all()
    # services = Service.objects.all()
    # tovars = Tovar.objects.all()
    # partners = Partner.objects.all()
    # otzivs = Otziv.objects.all()
    # feeds = Feedback.objects.all()
    # foto = ''
    # try:
    #     foto = Fon.objects.get(id=1)
    # except Fon.DoesNotExist:
    #     pass
    # contact = ''
    # try:
    #     contact = Contact.objects.get(id=1)
    # except Contact.DoesNotExist:
    #     pass
    #
    if request.POST:
        feed = Feedback()
        feed.name = request.POST.get('name', '')
        feed.company = request.POST.get('company', '')
        feed.phone = request.POST.get('phone', '')
        feed.email = request.POST.get('email', '')

        feed.save()
        from django.shortcuts import redirect
        return redirect('/')



    return render(request, 'index.html', {
            'slides': slides,
            'products': products,
    })


def ProductDetailHandler(request,pr_title):
    product = Product.objects.get(title=pr_title)

    return render(request, 'detail.html', {
        'product': product,

    })