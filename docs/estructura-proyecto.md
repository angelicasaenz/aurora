# 🏗️ Estructura del Proyecto y Organización por Capas

**Proyecto:** Fundación Aurora (Plataforma Web de Adopción de Mascotas)  

---

## 💻 Backend (Spring Boot)

El backend utiliza el patrón **Controller - Service - Repository - Model** complementado con DTOs, configuraciones globales de red y seguridad:

```text
fundacion-aurora-backend/
├── src/
│   ├── main/
│   │   ├── java/com/fundacionaurora/backend/
│   │   │   ├── config/              # Configuraciones globales (CORS, Beans)
│   │   │   │   └── CorsConfig.java
│   │   │   │
│   │   │   ├── controller/          # Endpoints REST (API)
│   │   │   │   ├── CatalogoController.java
│   │   │   │   ├── MascotaController.java
│   │   │   │   ├── UsuarioController.java
│   │   │   │   └── SolicitudAdopcionController.java
│   │   │   │
│   │   │   ├── dto/                 # Objetos de transferencia de datos
│   │   │   │   ├── LoginRequestDTO.java
│   │   │   │   ├── MascotaDTO.java
│   │   │   │   └── SolicitudDTO.java
│   │   │   │
│   │   │   ├── model/               # Entidades JPA y Enums
│   │   │   │   ├── Catalogo.java
│   │   │   │   ├── Mascota.java
│   │   │   │   ├── Usuario.java
│   │   │   │   ├── SolicitudAdopcion.java
│   │   │   │   ├── EstadoMascota.java
│   │   │   │   ├── EstadoSolicitud.java
│   │   │   │   └── RolUsuario.java
│   │   │   │
│   │   │   ├── repository/          # Interfaces Spring Data JPA
│   │   │   │   ├── CatalogoRepository.java
│   │   │   │   ├── MascotaRepository.java
│   │   │   │   ├── UsuarioRepository.java
│   │   │   │   └── SolicitudAdopcionRepository.java
│   │   │   │
│   │   │   ├── security/            # Lógica de autenticación y seguridad
│   │   │   │   └── SecurityConfig.java
│   │   │   │
│   │   │   └── service/             # Lógica de negocio
│   │   │       ├── CatalogoService.java
│   │   │       ├── MascotaService.java
│   │   │       ├── UsuarioService.java
│   │   │       └── SolicitudAdopcionService.java
│   │   │
│   │   └── resources/
│   │       └── application.properties # Configuración de PostgreSQL y puerto
│   └── test/                        # Pruebas unitarias
└── pom.xml                          # Dependencias de Maven
```
## 🎨 Frontend (React)

El frontend sigue la estructura modular para React con Vite:
```
fundacion-aurora-frontend/
├── src/
│   ├── assets/                      # Imágenes, logos y estilos globales
│   ├── components/                  # Componentes reutilizables (Navbar, Cards, Footer)
│   ├── pages/                       # Vistas principales (Inicio, Catálogo, Formulario, Admin)
│   ├── services/                    # Conexión con Axios / Fetch a la API REST
│   ├── App.jsx                      # Enrutamiento de la aplicación (React Router)
│   └── main.jsx                     # Punto de entrada de React
├── package.json                     # Dependencias de Node.js
└── vite.config.js                   # Configuración del empaquetador (Vite)
```