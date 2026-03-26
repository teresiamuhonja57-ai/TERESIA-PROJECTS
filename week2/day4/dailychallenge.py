import string
import re

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.lower().split()
        count = words.count(word.lower())
        return count if count > 0 else None

    def most_common_word(self):
        words = self.text.lower().split()
        freq = {}

        for w in words:
            freq[w] = freq.get(w, 0) + 1

        return max(freq, key=freq.get)

    def unique_words(self):
        words = self.text.lower().split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r") as file:
            content = file.read()
        return cls(content)


# ✅ Separate class (NOT inside Text)
class TextModification(Text):

    def remove_punctuation(self):
        translator = str.maketrans('', '', string.punctuation)
        return self.text.translate(translator)

    def remove_stop_words(self):
        stop_words = {
            "a", "the", "is", "in", "on", "and", "or", "to", "of", "for", "with"
        }

        words = self.text.lower().split()
        filtered = [word for word in words if word not in stop_words]

        return " ".join(filtered)

    def remove_special_characters(self):
        return re.sub(r'[^a-zA-Z0-9\s]', '', self.text)