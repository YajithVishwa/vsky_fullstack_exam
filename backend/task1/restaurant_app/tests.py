from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from .models import Restaurant

# Create your tests here.

class RestaurantAPITests(APITestCase):
    def test_create_restaurant(self):
        url = reverse('restaurant-list-create')
        data = {
            'name': 'Rose',
            'address': 'Test Street, Test City, Test 625015',
            'phone_number': '9876543210',
            'rating': 4.5
        }
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Restaurant.objects.count(), 1)
        self.assertEqual(Restaurant.objects.get().name, 'Rose')
        self.assertEqual(Restaurant.objects.get().address, 'Test Street, Test City, Test 625015')
        self.assertEqual(Restaurant.objects.get().phone_number, '9876543210')
        self.assertEqual(Restaurant.objects.get().rating, 4.5)

    def test_list_restaurants(self):
        Restaurant.objects.create(
            name='Queens',
            address='Queens St',
            phone_number='1112223333',
            rating=4.0
        )
        url = reverse('restaurant-list-create')
        response = self.client.get(url, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Queens')
        self.assertEqual(Restaurant.objects.get().address, 'Queens St')
        self.assertEqual(Restaurant.objects.get().phone_number, '1112223333')
        self.assertEqual(Restaurant.objects.get().rating, 4.0)