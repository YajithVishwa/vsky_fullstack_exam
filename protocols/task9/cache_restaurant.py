import redis
import json

def mockData(restaurant_id):
    restaurant_details = {
        1: {"name": "Rose", "rating": 4.0},
        2: {"name": "Queen", "rating": 3.0},
        3: {"name": "Prince", "rating": 5.0}
    }
    return restaurant_details.get(restaurant_id, {'error': "Not found"})

cache = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)

def cacheData(restaurant_id):
    restaurant_cache_key = f"restaurant:{restaurant_id}"
    restaurant_cached_data = cache.get(restaurant_cache_key)
    if restaurant_cached_data:
        print('From Redis Cache')
        return json.loads(restaurant_cached_data)
    else:
        print('From Mock Data')
        restaurant_details = mockData(restaurant_id)
        cache.setex(restaurant_cache_key, 600, json.dumps(restaurant_details))
        return restaurant_details

while True:
    restaurant_id = int(input('Enter Restaurant Id or -1 to exit - '))
    if restaurant_id == -1:
        break
    restaurant_details = cacheData(restaurant_id)
    print(restaurant_details)
