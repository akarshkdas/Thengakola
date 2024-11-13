from rest_framework import serializers
from .models import Product
from django.contrib.auth.models import User


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price', 'imageUrl', 'category']


class UserSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)  # Declare confirm_password explicitly
    class Meta:
        model = User
        fields = ('username', 'password', 'confirm_password', 'email')
        extra_kwargs = {
            'password': {'write_only': True},
        }

    def validate(self, data):
        if data['password']!=data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data
    
    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove confirm_password
        user = User(**validated_data)  # Create user with remaining fields
        user.set_password(validated_data['password'])  # Hash the password
        user.save()
        return user
