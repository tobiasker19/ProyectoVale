from django.contrib import admin
from .models import Usuario, Curso, Estudiante, Profesor, Administrador, Horario, Material, Matricula

class CursoAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'descripcion']

admin.site.register(Curso, CursoAdmin)

class MaterialAdmin(admin.ModelAdmin):
    list_display = ['nombre', 'id_curso', 'documento', 'fecha']

admin.site.register(Material, MaterialAdmin)

admin.site.register(Usuario)

admin.site.register(Estudiante)

admin.site.register(Profesor)

admin.site.register(Administrador)

class HorarioAdmin(admin.ModelAdmin):
    list_display = ['id_Curso', 'hora_inicio', 'hora_fin']
    search_fields = ['id_Curso']

admin.site.register(Horario, HorarioAdmin)

admin.site.register(Matricula)