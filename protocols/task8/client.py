import grpc
import restaurant_pb2
import restaurant_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50051') as channel:
        stub = restaurant_pb2_grpc.RestaurantServiceStub(channel)
        try:
            restaurant_id = int(input('Enter Restaurant Id or -1 to exit - '))
            if restaurant_id == -1:
                return
            response = stub.GetRestaurantDetails(restaurant_pb2.RestaurantIdRequest(restaurant_id=restaurant_id))
            print(f"Restaurant ID: {response.restaurant_id}")
            print(f"Name: {response.name}")
            print(f"Address: {response.address}")
            print(f"Rating: {response.rating}")
        except grpc.RpcError as e:
            print(f"RPC failed with status code {e.code()}: {e.details()}")


if __name__ == '__main__':
    run()
