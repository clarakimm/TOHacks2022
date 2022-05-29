import streamlit as st 
from search_youtube import get_video_link 

st.title ('AppName')

with st.form(key = "device_input"):
    keyword_txt = st.text_input(label = "Please enter the model name.")
    keyword_btn = st.form_submit_button(label = "Submit")

print (keyword_txt)
get_video_link (keyword_btn)