# Usa Node.js para desarrollo
FROM node:20.9.0

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto de Vite
EXPOSE 5173

# Comando para iniciar Vite en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
