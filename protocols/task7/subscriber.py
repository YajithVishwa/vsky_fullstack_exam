import paho.mqtt.client as mqtt
import json

broker="localhost"
port=1883
timelive=60

def on_connect(client, userdata, flags, rc):
  print("Started receiving orders "+str(rc))
  client.subscribe("/restaurant")

def on_message(client, userdata, msg):
    print(msg.payload.decode())
    order_json = json.loads(msg.payload.decode().replace("'", '"'))
    print('Order ID - ', order_json['order#'])
    for key, value in order_json['orders'].items():
        print('Order Name - ', key, ' , Order Quantity - ', value)
    
client = mqtt.Client()
client.connect(broker,port,timelive)
client.on_connect = on_connect
client.on_message = on_message
client.loop_forever()