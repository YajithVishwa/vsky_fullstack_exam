import paho.mqtt.client as paho_client
import time
import random
from getorders import getorders

broker = "localhost"
port = 1883

def on_publish(client, userdata, result):
    print("Order Published to restaurant")
    pass

client = paho_client.Client(client_id="admin")
client.on_publish = on_publish
client.connect(broker, port)

ret = client.publish("/restaurant", getorders())
