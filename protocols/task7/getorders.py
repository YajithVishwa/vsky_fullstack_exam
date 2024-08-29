def getorders():
    order_id = int(input(' Order Number - '))
    menu = {
        1: "Dosa",
        2: "Burger",
        3: "Pizza",
        4: "Rice"
    }
    for key, value in menu.items():
        print(key, ' ', value)
    listOfOrders = {}
    while True:
        menu_id = int(input('Enter Order ID or enter 5 to end : '))
        if menu_id == 5:
            break
        quantity = int(input('Enter Quantity : '))
        if menu[menu_id] in listOfOrders:
            listOfOrders[menu[menu_id]] = listOfOrders[menu[menu_id]] + quantity
        else:
            listOfOrders[menu[menu_id]] = quantity
    return str({"order#": order_id, "orders": listOfOrders})