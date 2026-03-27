class AnagramChecker:
    def __init__(self, filename="words.txt"):
        """Load the word list and store it in a set for O(1) lookups."""
        try:
            with open(filename, 'r') as file:
                # Using a set makes 'is_valid_word' incredibly fast
                self.word_list = {line.strip().lower() for line in file}
        except FileNotFoundError:
            print(f"Error: {filename} not found. Starting with an empty list.")
            self.word_list = set()

    def is_valid_word(self, word):
        """Check if the word exists in our dictionary."""
        return word.lower() in self.word_list

    def is_anagram(self, word1, word2):
        """Compare sorted characters to identify anagrams."""
        w1 = word1.lower().replace(" ", "")
        w2 = word2.lower().replace(" ", "")
        
        # If lengths differ, they can't be anagrams
        if len(w1) != len(w2):
            return False
            
        return sorted(w1) == sorted(w2)

    def get_anagrams(self, word):
        """Find all anagrams for a given word in the word list."""
        word = word.lower()
        anagrams = []
        
        for candidate in self.word_list:
            if candidate != word and self.is_anagram(word, candidate):
                anagrams.append(candidate)
                
        return anagrams

        from anagram_checker import AnagramChecker

def main():
    # Step 1 & 4: Initialize the checker
    checker = AnagramChecker("words.txt")
    
    print("--- Welcome to the Anagram Finder ---")
    
    # Step 2: Menu Loop
    while True:
        print("\nOptions: [1] Check a word | [2] Exit")
        choice = input("Select an option: ").strip()
        
        if choice == "2":
            print("Goodbye!")
            break
        elif choice == "1":
            # Step 3: Get User Input
            user_word = input("Enter a single word to check: ").strip()
            
            # Basic validation for single word
            if " " in user_word or not user_word.isalpha():
                print("Error: Please enter a single word containing only letters.")
                continue

            # Step 4: Validate and Find Anagrams
            if checker.is_valid_word(user_word):
                print(f"\nYOUR WORD: '{user_word.upper()}'")
                print("This is a valid English word.")
                
                found_anagrams = checker.get_anagrams(user_word)
                
                if found_anagrams:
                    # Formatting the list for a nicer output
                    anagram_str = ", ".join(found_anagrams)
                    print(f"Anagrams found: {anagram_str}")
                else:
                    print("No anagrams found for this word.")
            else:
                print(f"\n'{user_word}' is not a valid word in our dictionary.")
        else:
            print("Invalid selection. Please choose 1 or 2.")

if __name__ == "__main__":
    main()