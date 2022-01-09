from django.shortcuts import render


def home(request):
    return render(request, 'website/home.html')


def home_dark(request):
    return render(request, 'website/home-dark.html')


def gallery(request):
    return render(request, 'website/photo-gallery.html')


def photo_details(request):
    return render(request, 'website/photo-details.html')


def photo_2_column(request):
    return render(request, 'website/photo-2-column.html')


def photo_4_column(request):
    return render(request, 'website/photo-4-column.html')
