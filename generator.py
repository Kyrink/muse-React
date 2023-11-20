from transformers import pipeline
from dotenv import find_dotenv, load_dotenv

load_dotenv(find_dotenv())


def img2text(url):
    image_to_text = pipeline("image-to-text", model="Salesforce/blip-image-captioning-base")
    text = image_to_text(url)[0]["generated_text"]
    return text


scenario = img2text("https://images.squarespace-cdn.com/content/v1/55d7405be4b041b04b5fa943/1696269975540-U62UO6EBM3K1ZLW6JQED/IMG_6946.jpg")

story_gen = pipeline("text-generation", "pranavpsv/gpt2-genre-story-generator")
gen = story_gen(scenario, num_return_sequences=3)
for i, review in enumerate(gen):
    print(f"Generated User Review {i+1}: {review['generated_text'].strip()}")
