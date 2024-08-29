list_of_orders = [
    {
        "item_name": "Mouse",
        "quantity": 1,
        "price_per_item": 3.50
    },
    {
        "item_name": "Keyboard",
        "quantity": 6,
        "price_per_item": 12
    },
    {
        "item_name": "Monitor",
        "quantity": 2,
        "price_per_item": 10
    }
]

def get_data(list_of_orders) -> float:
    total_revenue = 0
    def order_input_validation(order:dict) -> bool:
        if "item_name" in order and "quantity" in order and "price_per_item" in order:
            if isinstance(order['quantity'], int) and (isinstance(order['price_per_item'], int) or isinstance(order['price_per_item'], float)):
                return True
        return False
    if not isinstance(list_of_orders, list):
        print('List of Order input is invalid')
        return 0
    if len(list_of_orders) == 0:
        return 0
    for order in list_of_orders:
        if (not isinstance(order, dict)) or not order_input_validation(order):
            print('List of Order input is invalid')
            return 0
        total_revenue += order['quantity'] * order['price_per_item']
    return total_revenue

print('Total Revenue - ', get_data(list_of_orders))