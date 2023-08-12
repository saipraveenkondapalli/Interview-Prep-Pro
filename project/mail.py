import os
import json
import requests

from flask import url_for

from project.models import User


def forget_password_mail_async(email):

    token = User.get_token(email)
    reqUrl = os.environ.get('AWS_LAMBDA_URL')
    headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "Content-Type": "application/json"
    }
    payload = json.dumps({
        "subject": "Reset Password",
        "email": email,
        "body" : f"Hi, Please click on the link to reset your password \n {url_for('reset_password', token=token, _external=True)}"
    })

    response = requests.request("POST", reqUrl, data=payload, headers=headersList)
    return True


