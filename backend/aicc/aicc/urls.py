"""
URL configuration for aicc project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from api import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'cursos', views.CursoView, 'curso')
router.register(r'materiales', views.MaterialView, 'material')
router.register(r'usuarios', views.UsuarioView, 'usuario')
router.register(r'estudiantes', views.EstudianteView, 'estudiante')
router.register(r'profesores', views.ProfesorView, 'profesor')
router.register(r'administradores', views.AdministradorView, 'administrador')
router.register(r'Horario', views.HorarioView, 'Horario')
router.register(r'Matricula', views.MatriculaView, 'Matricula')


urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('', include('api.urls')),
    path('api/', include(router.urls))
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
