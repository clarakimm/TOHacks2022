from googleapiclient.discovery import build




# def get_video_link(keywords, number)
youtube = build('youtube', 'v3', developerKey=api_key)

request = youtube.search().list(part='snippet', q='iphone12', type='video')

response = request.execute()
print(response)