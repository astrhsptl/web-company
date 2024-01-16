from drf_yasg.utils import swagger_auto_schema
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.decorators import api_view

from services.mailing import send_email

from .serializers import EmailSendingSerializer


@swagger_auto_schema(
    method="POST",
    request_body=EmailSendingSerializer,
    responses={404: 'slug not found'},
    tags=['Utils']
)
@api_view(["POST"])
def send_email_view(request: Request):
    email_data = EmailSendingSerializer(data=request.data)

    if not email_data.is_valid():
        return Response(email_data.errors, 400)

    status, error = send_email(**email_data.data)
 
    return Response({"detail": error}, status)
