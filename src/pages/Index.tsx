import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ username: '', password: '' });
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-corporate-light flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-corporate-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Building2" size={32} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-corporate-gray font-corporate">
              IT Corporate Portal
            </h1>
            <p className="text-sm text-gray-600 mt-2">
              Корпоративный портал для сотрудников
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-corporate">Авторизация LDAP</CardTitle>
              <p className="text-sm text-gray-600">Введите ваши учетные данные</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="font-corporate">Логин</Label>
                  <Input
                    id="username"
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="font-corporate"
                    placeholder="Введите логин"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="font-corporate">Пароль</Label>
                  <Input
                    id="password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="font-corporate"
                    placeholder="Введите пароль"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-corporate-blue hover:bg-blue-700 font-corporate"
                >
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-corporate-light">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-corporate-blue rounded-md flex items-center justify-center mr-3">
                <Icon name="Building2" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold text-corporate-gray font-corporate">
                IT Corporate Portal
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-corporate">
                Добро пожаловать, {loginData.username}
              </span>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Users" size={24} className="text-corporate-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-corporate">Сотрудники</p>
                    <p className="text-2xl font-bold text-corporate-gray">247</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="FileText" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-corporate">Инструкции</p>
                    <p className="text-2xl font-bold text-corporate-gray">42</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Newspaper" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-corporate">Новости</p>
                    <p className="text-2xl font-bold text-corporate-gray">15</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <Icon name="Phone" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-corporate">Контакты</p>
                    <p className="text-2xl font-bold text-corporate-gray">28</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="Home" size={20} className="mr-3 text-corporate-blue" />
                  Главная страница
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Основная информация и объявления компании
                </p>
                <Button className="mt-4 w-full bg-corporate-blue hover:bg-blue-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="Users" size={20} className="mr-3 text-green-600" />
                  Сотрудники
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Справочник сотрудников и организационная структура
                </p>
                <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="Newspaper" size={20} className="mr-3 text-orange-600" />
                  Новости
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Актуальные новости и события компании
                </p>
                <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="FileText" size={20} className="mr-3 text-purple-600" />
                  Инструкции
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Рабочие инструкции и документация
                </p>
                <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="Phone" size={20} className="mr-3 text-blue-600" />
                  Контакты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Контактная информация и справочные данные
                </p>
                <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <CardHeader>
                <CardTitle className="flex items-center font-corporate">
                  <Icon name="Shield" size={20} className="mr-3 text-red-600" />
                  Безопасность
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 font-corporate">
                  Политики безопасности и compliance
                </p>
                <Button className="mt-4 w-full bg-red-600 hover:bg-red-700 group-hover:scale-105 transition-transform">
                  Перейти
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;