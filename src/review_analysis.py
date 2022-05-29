import streamlit as st
from configure import auth_key
from pytube import YouTube
import os
import sys
import time
import requests
from time import sleep
from pprint import pprint
from search_youtube import get_video_link

def read_file(filename, chunk_size=5242880):
    with open(filename, 'rb') as _file:
        while True:
            data = _file.read(chunk_size)
            if not data:
                break
            yield data

def getData(keyword):
    headlines = []
    sentimentTotal = 0
    data={}
    data["headlines"] = []
    links = get_video_link(keyword)
    # ['asdklfjasl;.com', 'asdkl;jl;.com']
    for link in links:
        video = YouTube(link)
        yt = video.streams.get_audio_only()
        yt.download(filename="video.mp4")

        current_dir = os.getcwd()
        for file in os.listdir(current_dir):
            if file.endswith(".mp4"):
                mp4_file = os.path.join(current_dir, file)
                # print(mp4_file)

        filename = mp4_file
        headers = {'authorization': auth_key}
        response = requests.post('https://api.assemblyai.com/v2/upload', headers=headers, data=read_file(filename))

        audio_url = response.json()['upload_url']
        # print(audio_url)

        endpoint = "https://api.assemblyai.com/v2/transcript"
        json = {
            "audio_url": audio_url,
            "sentiment_analysis": True,
            "auto_chapters": True,
        }
        headers = {
            "authorization": auth_key,
            "content-type": "application/json"
        }
        transcript_input_response = requests.post(endpoint, json=json, headers=headers)

        transcript_id = transcript_input_response.json()["id"]
        endpoint = f"https://api.assemblyai.com/v2/transcript/{transcript_id}"

        headers = {
            "authorization": auth_key,
        }

        transcript_output_response = requests.get(endpoint, headers=headers)
        while transcript_output_response.json()['status'] != 'completed':
            sleep(1)
            transcript_output_response = requests.get(endpoint, headers=headers)

        # pprint(transcript_output_response.json()['sentiment_analysis_results'])


        sentimentObjs = transcript_output_response.json()['sentiment_analysis_results']
        for obj in sentimentObjs:
            confidence = obj["confidence"]
            if obj["sentiment"] == "POSITIVE":
                sentimentTotal += confidence
            elif obj["sentiment"] == "NEGATIVE":
                sentimentTotal -= confidence

        headlineObjs = transcript_output_response.json()['chapters']
        if len(headlineObjs) > 3:
            data["headlines"].append(headlineObjs[3]["headline"])

        # pprint(transcript_output_response.json()['chapters'])

    # data = {"sentiment": 2, "headlines": ['text', 'text']}
    data["sentiment"] = sentimentTotal
    pprint(data)
    return data

#19seconds 
# getData('https://www.youtube.com/watch?v=jNQXAC9IVRw')

# 6min
# getData('https://www.youtube.com/watch?v=IhYF3v3zTeo&t=2s')

#10min ish
# getData('https://www.youtube.com/watch?v=X1b3C2081-Q&t=3s')
# links = get_video_links()
