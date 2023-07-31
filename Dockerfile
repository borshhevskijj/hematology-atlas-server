# Используем базовый образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы проекта
COPY . .

# Определяем команду для запуска серверного приложения
CMD ["node", "index.js"]
# Нужно заменить "app.js" на точное имя файла, который запускает ваше приложение
