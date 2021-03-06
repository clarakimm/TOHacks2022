from googleapiclient.discovery import build
from configure import youtube_key

def get_video_link(keyword):
    urls = []
    query = keyword + " review"
    youtube = build('youtube', 'v3', developerKey=youtube_key)
    request = youtube.search().list(part='snippet', q=query, type='video', maxResults=2)
    response = request.execute()
    
    for result in response["items"]:
        url = f'https://www.youtube.com/watch?v={result["id"]["videoId"]}'
        urls.append(url)
    print (urls)
    return urls

