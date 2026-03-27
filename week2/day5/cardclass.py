import random

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        """Returns a string representation of the card."""
        return f"{self.value} of {self.suit}"

class Deck:
    def __init__(self):
        self.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        self.reset_deck()

    def reset_deck(self):
        """Creates a standard 52-card deck."""
        self.cards = [Card(s, v) for s in self.suits for v in self.values]

    def shuffle(self):
        """Ensures a full deck is present, then shuffles."""
        if len(self.cards) != 52:
            print("Refilling deck to 52 cards before shuffling...")
            self.reset_deck()
        random.shuffle(self.cards)
        print("Deck shuffled.")

    def deal(self):
        """Deals a single card from the deck and removes it."""
        if len(self.cards) == 0:
            return "No cards left in the deck!"
        return self.cards.pop()

# --- Example Usage ---
my_deck = Deck()
my_deck.shuffle()

dealt_card = my_deck.deal()
print(f"Dealt: {dealt_card}")
print(f"Cards remaining: {len(my_deck.cards)}")