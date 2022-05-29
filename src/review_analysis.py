import streamlit as st
from configure import auth_key
from pytube import YouTube
import os
import sys
import time
import requests
from time import sleep
from zipfile import ZipFile
from pprint import pprint
import timeit

start = timeit.default_timer()

def read_file(filename, chunk_size=5242880):
    with open(filename, 'rb') as _file:
        while True:
            data = _file.read(chunk_size)
            if not data:
                break
            yield data

def getSentiment (links):
    video = YouTube(links)
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
        "sentiment_analysis": True
    }
    headers = {
        "authorization": auth_key,
        "content-type": "application/json"
    }
    transcript_input_response = requests.post(endpoint, json=json, headers=headers)

    # print(transcript_input_response.json())

    transcript_id = transcript_input_response.json()["id"]
    endpoint = f"https://api.assemblyai.com/v2/transcript/{transcript_id}"

    headers = {
        "authorization": auth_key,
    }

    transcript_output_response = requests.get(endpoint, headers=headers)
    while transcript_output_response.json()['status'] != 'completed':
        sleep(1)
        transcript_output_response = requests.get(endpoint, headers=headers)

    pprint(transcript_output_response.json())

getSentiment('https://www.youtube.com/watch?v=jNQXAC9IVRw')

stop = timeit.default_timer()
print ('Time: ', stop - start)