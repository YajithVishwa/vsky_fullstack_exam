from django.shortcuts import render
from rest_framework import generics
from .models import Restaurant
from .serializers import RestaurantSerializer

# Create your views here.
class RestaurantListCreateView(generics.ListCreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer