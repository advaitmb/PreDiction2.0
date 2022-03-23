Combining word-complete with phrase-complete



Logic: 

API Request -> Prompt

if the last word in prompts is in the vocab
    do return text_generate_pipeline(prompt)
else
    do prompt += word_complete_transformer(prompt)
    do return text_generate_pipeline(prompt)


text 
word_complete
word_completed_text = text + word_complete

phrase = generate(word_completed_text)

phrase.replace(text)