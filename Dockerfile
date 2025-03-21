# Etapa de desarrollo
FROM node:20.9.0

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json antes de instalar dependencias
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar el código de la aplicación
COPY . .

# Exponer el puerto del servidor de Vite
EXPOSE 5173

# Comando por defecto: ejecutar el servidor de desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
