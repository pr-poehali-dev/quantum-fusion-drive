"""Отправка сообщений с контактной формы на zaak6534@gmail.com"""
import json
import smtplib
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    }

    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': headers, 'body': ''}

    body = json.loads(event.get('body', '{}'))
    name = body.get('name', '')
    email = body.get('email', '')
    phone = body.get('phone', '')
    message = body.get('message', '')

    smtp_password = os.environ.get('SMTP_PASSWORD', '')

    msg = MIMEMultipart()
    msg['From'] = 'zaak6534@gmail.com'
    msg['To'] = 'zaak6534@gmail.com'
    msg['Subject'] = f'Новое сообщение с Indus co. от {name}'

    body_text = f"""
Новое сообщение с сайта Indus co.

Имя: {name}
Email: {email}
Телефон: {phone}

Сообщение:
{message}
    """.strip()

    msg.attach(MIMEText(body_text, 'plain', 'utf-8'))

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login('zaak6534@gmail.com', smtp_password)
        server.send_message(msg)

    return {
        'statusCode': 200,
        'headers': headers,
        'body': json.dumps({'success': True})
    }
