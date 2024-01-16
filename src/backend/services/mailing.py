from smtplib import SMTPAuthenticationError, SMTPRecipientsRefused
from django.core.mail import send_mail
from server.settings import EMAIL_HOST_USER

def send_email(title: str, message: str, recipient: str):
    try:
        sending = send_mail(title, message, EMAIL_HOST_USER, [recipient], fail_silently=False)
        return 200, "Success"
    except SMTPAuthenticationError:
        return 500, "Server error"
    except SMTPRecipientsRefused:
        return 400, "No recipient"