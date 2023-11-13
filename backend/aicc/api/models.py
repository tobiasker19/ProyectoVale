# Referente a las Migrations: https://docs.djangoproject.com/en/4.2/topics/migrations/
# RECORDAR: Cada vez que se hagan cambios en este codigo hacer:
# python manage.py makemigrations
# python manage.py migrate

from django.db import models
from django.conf import settings
from django.contrib.auth.models import AbstractUser

class Curso(models.Model):
    nombre = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=500, blank=True, null=True)


    def __str__(self):
        return self.nombre

class Material(models.Model):
    nombre = models.CharField(max_length=50)
    id_curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    documento = models.FileField(upload_to='materiales/')
    fecha = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.nombre

class Usuario(AbstractUser):
    first_name = models.CharField("Nombre", max_length=15)
    last_name = models.CharField("Apellido", max_length=15)
    rut = models.IntegerField()
    dv = models.CharField(max_length=1)
    rol = models.CharField(max_length=10)


class Estudiante(models.Model):
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Profesor(models.Model):
    usuario_id = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    curso_id = models.ForeignKey(Curso, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

class Administrador(models.Model):
    usuario_id = models.OneToOneField(Usuario, on_delete=models.CASCADE, primary_key=True)

    def __str__(self):
        return self.user.username


class Horario(models.Model):
    id_Curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    hora_inicio = models.TimeField(auto_now_add=False)
    hora_fin = models.TimeField(auto_now_add=False)

    def __str__(self):
        return self.id_Curso


class Matricula(models.Model):
    id_Estudiante = models.ForeignKey(Estudiante, on_delete=models.CASCADE)
    id_Curso = models.ForeignKey(Curso, on_delete=models.CASCADE)
    fecha_matricula = models.DateTimeField(auto_now_add=True)
    estado_matricula = models.BooleanField(default=False)

    def __str__(self):
        return self.id_Curso