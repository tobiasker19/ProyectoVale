from rest_framework import viewsets
from .models import Usuario, Curso, Estudiante, Profesor, Administrador, Horario, Material, Matricula
from .serializers import UsuarioSerializer, CursoSerializer, EstudianteSerializer, ProfesorSerializer, AdministradorSerializer, HorarioSerializer, MaterialSerializer, MatriculaSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_POST
from django.http import JsonResponse
from .forms import SignUpForm, LoginForm
class CursoView(viewsets.ModelViewSet):
    serializer_class = CursoSerializer
    queryset = Curso.objects.all()

class MaterialView(viewsets.ModelViewSet):
    serializer_class = MaterialSerializer
    queryset = Material.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class EstudianteView(viewsets.ModelViewSet):
    serializer_class = EstudianteSerializer
    queryset = Estudiante.objects.all()

class ProfesorView(viewsets.ModelViewSet):
    serializer_class = ProfesorSerializer
    queryset = Profesor.objects.all()

class AdministradorView(viewsets.ModelViewSet):
    serializer_class = AdministradorSerializer
    queryset = Administrador.objects.all()

class HorarioView(viewsets.ModelViewSet):
    serializer_class = HorarioSerializer
    queryset = Horario.objects.all()

class MatriculaView(viewsets.ModelViewSet):
    serializer_class = MatriculaSerializer
    queryset = Matricula.objects.all()

@csrf_exempt
@require_POST
def signup(request):
    data = request.post
    form = SignUpForm(data)
    if form.is_valid():
        form.save()
        username = form.cleaned_data.get('username')
        raw_password = form.cleaned_data.get('password1')
        user = authenticate(username=username, password=raw_password)
        login(request, user)
        return JsonResponse({"success": True})
    else:
        return JsonResponse({"errors": form.errors}, status=400)
    
@csrf_exempt
@require_POST
def user_login(request):
    data = request.post
    form = LoginForm(data)
    if form.is_valid():
        user = form.get_user()
        login(request, user)
        return JsonResponse({"success": True})
    else:
        return JsonResponse({"errors": form.errors}, status=400)

