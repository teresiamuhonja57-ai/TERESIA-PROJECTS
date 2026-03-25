#exercise1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = dict(zip(keys, values))

print(result)
#exercise2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

total_cost = 0

for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name}'s ticket costs: ${price}")
    total_cost += price

print("Total cost:", total_cost)

#bonus
family = {}
total_cost = 0

while True:
    name = input("Enter family member's name (or 'done' to finish): ")
    
    if name.lower() == "done":
        break
    
    age = int(input(f"Enter {name}'s age: "))
    family[name] = age

# Calculate cost
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    
    print(f"{name}'s ticket costs: ${price}")
    total_cost += price

print("Total cost:", total_cost)

#exercise3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
#bonus
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}

#exercise4 disneycharacters
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

char_to_index = {name: index for index, name in enumerate(users)}

print(char_to_index)
#2
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

index_to_char = {index: name for index, name in enumerate(users)}

print(index_to_char)
#3
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

# Sort the list alphabetically
sorted_users = sorted(users)

# Create dictionary
char_to_index_sorted = {name: index for index, name in enumerate(sorted_users)}

print(char_to_index_sorted)
