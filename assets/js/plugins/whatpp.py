import requests

access_token = "EAAYdbFoVZCCwBOx9rzot8EC3mdmYqSxZAqNpZAPJzZCSvZChAxaqvdnchBJK3gHFPJZCVzOddDyfoUiBkQgCWuIuTj9Me5vZBE2S3zZCBatjOmKC1LrrMfrmWLqDASAJcqBhQhc7tKOGkrck0cbLU6nky59gUXQtXSUF9SWc7WZAfTHfhsqFMxb2a9H0JyG4gvcKgGgZDZD"
cc = "57"
phone_number = "3112530069"
business_id = "473624239173850"
verified_name = "Vale.ia"


# La URL correcta para la API de WhatsApp Business
url = f"https://graph.facebook.com/v21.0/{business_id}/phone_numbers"

headers = {
    "Authorization": f"Bearer {access_token}",
    "Content-Type": "application/json"
}

payload = {
    "phone_number": phone_number,
    "cc": cc,
    "verified_name":verified_name
}

try:
    response = requests.post(url, headers=headers, json=payload)
    
    if response.status_code == 200:
        print("Número registrado exitosamente:", response.json())
    else:
        print("Error al registrar el número:", response.status_code, response.text)
except requests.exceptions.RequestException as e:
    print("Error en la solicitud:", e)