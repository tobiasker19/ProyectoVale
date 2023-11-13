FROM python:3.10.12

# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar el código fuente al contenedor
COPY . /app

# Instalar las dependencias del proyecto
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

WORKDIR /app/aicc

ENTRYPOINT ["../entrypoint.sh"]