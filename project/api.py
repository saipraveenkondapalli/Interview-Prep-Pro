import json
import requests

from bs4 import BeautifulSoup
from flask import jsonify

from project import app
from project.models import Problems


@app.route('/api/problems/<string:problem>', methods=['GET'])
def get_problem(problem):
    problem = Problems.objects(link_name=problem).first()
    videos = get_youtube(problem.name)

    if problem:
        return jsonify({'message': 'Problem found', 'problem': problem, "videos": videos}), 200
    else:
        return jsonify({'message': 'Problem not found', "videos": videos}), 404


def get_youtube(query):
    if not query:
        return jsonify({'message': 'No query found'}), 400

    html = requests.get("https://www.youtube.com/results?search_query=" + query + "leetcode English")
    soup = BeautifulSoup(html.text, 'html.parser')

    # get all the scripts
    scripts = soup.find_all('script')

    # get the script that starts with var ytInitialData
    for script in scripts:
        if script.string and script.string.startswith("var ytInitialData"):
            # return the entire script
            data = script.string.split(" = ")[1].split("};")[0] + "}"
            # convert the string to json
            try:
                data = json.loads(data)
            except json.decoder.JSONDecodeError:
                return []
            videos = (
                data['contents']['twoColumnSearchResultsRenderer']['primaryContents']['sectionListRenderer'][
                    'contents'][0][
                    'itemSectionRenderer']['contents'])

            videos = videos[1:]
            count = 0
            videos_list = []

            for video in videos:
                if not video.get('videoRenderer') and count <= 10:
                    continue
                video = video['videoRenderer']
                video_data = {
                    "video_id": video['videoId'],
                    "video_title": video['title']['runs'][0]['text'],
                    "view_count": video['viewCountText']['simpleText'],
                    "channel": video['longBylineText']['runs'][0]['text'],
                    "date": video['publishedTimeText']['simpleText'],
                    "length": video['lengthText']['simpleText']
                }

                videos_list.append(video_data)
                count += 1

            return videos_list

    return "No videos found"
