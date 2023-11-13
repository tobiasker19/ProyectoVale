from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import Usuario  # Assuming Usuario is your custom user model
from django.contrib.auth.forms import AuthenticationForm

class SignUpForm(UserCreationForm):
    email = forms.EmailField(max_length=254, help_text='Required. Enter a valid email address.')

    class Meta:
        model = Usuario
        fields = ('username', 'email', 'password1', 'password2')

    def clean_email(self):
        email = self.cleaned_data.get('email')
        # Check if the email is already in use
        if Usuario.objects.filter(email=email).exists():
            raise forms.ValidationError("This email address is already in use.")
        return email

class LoginForm(AuthenticationForm):
    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        if username and password:
            # Check if the provided username and password are valid
            user = self.authenticate_user(username, password)

            if not user or not user.is_active:
                raise forms.ValidationError("Invalid username or password.")

        return cleaned_data

    def authenticate_user(self, username, password):
        # Custom authentication logic
        from django.contrib.auth import authenticate
        return authenticate(username=username, password=password)