from concurrent import futures
import grpc
import restaurant_pb2
import restaurant_pb2_grpc

restaurants = {
    1: {"name": "Rose", "address": "Test, Test, Test 123", "rating": 3.5},
    2: {"name": "Queen", "address": "456 Spice Rd", "rating": 4.5},
}
class RestaurantServiceServicer(restaurant_pb2_grpc.RestaurantServiceServicer):
    def GetRestaurantDetails(self, request, context):
        restaurant_id = request.restaurant_id
        restaurant = restaurants.get(restaurant_id)
        
        if restaurant:
            return restaurant_pb2.RestaurantDetails(
                restaurant_id=restaurant_id,
                name=restaurant["name"],
                address=restaurant["address"],
                rating=restaurant["rating"]
            )
        else:
            context.set_code(grpc.StatusCode.NOT_FOUND)
            context.set_details('Restaurant not found')
            return restaurant_pb2.RestaurantDetails()

def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    restaurant_pb2_grpc.add_RestaurantServiceServicer_to_server(RestaurantServiceServicer(), server)
    server.add_insecure_port('[::]:50051')
    server.start()
    print("Server started on port 50051")
    server.wait_for_termination()

if __name__ == '__main__':
    serve()
