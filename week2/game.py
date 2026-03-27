import random

class Game:
    def __init__(self):
        self.valid_choices = ["rock", "paper", "scissors"]

    def get_user_item(self):
        """Ask user for choice and validate it."""
        while True:
            user_choice = input("Select an item (rock/paper/scissors): ").lower().strip()
            if user_choice in self.valid_choices:
                return user_choice
            print("Invalid choice. Please try again.")

    def get_computer_item(self):
        """Randomly select an item for the computer."""
        return random.choice(self.valid_choices)

    def get_game_result(self, user_item, computer_item):
        """Determine if the user won, lost, or drew."""
        if user_item == computer_item:
            return "draw"
        
        # Define winning conditions for the user
        win_conditions = {
            "rock": "scissors",
            "paper": "rock",
            "scissors": "paper"
        }

        if win_conditions[user_item] == computer_item:
            return "win"
        else:
            return "loss"

    def play(self):
        """Execute one round of the game."""
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"\nYou chose: {user_item}")
        print(f"Computer chose: {computer_item}")
        print(f"Result: You {result}!")
        
        return result
    #part2
    import game

def get_user_menu_choice():
    """Display menu and return a valid choice."""
    print("\n--- Main Menu ---")
    print("1. Play a new game")
    print("2. Show scores")
    print("3. Quit")
    
    while True:
        choice = input("Enter your choice (1-3): ").strip()
        if choice in ["1", "2", "3"]:
            return choice
        print("Invalid option. Please enter 1, 2, or 3.")

def print_results(results):
    """Format and display the final score tracking."""
    print("\n--- Game Summary ---")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("\nThank you for playing!")

def main():
    # Initialize the results dictionary
    results = {"win": 0, "loss": 0, "draw": 0}
    
    while True:
        choice = get_user_menu_choice()
        
        if choice == "1":
            # Start a new game using the Game class
            new_game = Game.Game()
            outcome = new_game.play()
            results[outcome] += 1
            
        elif choice == "2":
            # Show current scores without quitting
            print(f"\nCurrent Score: {results}")
            
        elif choice == "3":
            # Show final results and exit
            print_results(results)
            break

if __name__ == "__main__":
    main()