# 🐾 Fundación Aurora - Backend & API REST

<p align="center">
  <img src="docs/logo-fundacion.png" alt="Logo Fundación Aurora" width="220" />
</p>

¡Bienvenidos al repositorio del **Backend** de la **Fundación Aurora**!

> 📢 **Nota de desarrollo:** Este repositorio contiene la API REST y la lógica del servidor del proyecto. El desarrollo activo de nuevas funcionalidades y Sprints del backend se gestiona en la rama **`develop`**.

> 🎓 **Nota académica:** Proyecto simulado desarrollado con fines académicos para la asignatura **Proyecto de Software**.

---

## 👥 Equipo de Desarrollo

- **Angélica Sáenz** — *Estudiante de ingeniería de software*
- **Paula Cabrera** — *Estudiante de ingeniería de software*

---

## 📌 Alcance del Backend

Este servicio se encarga de gestionar la lógica de negocio, reglas de dominio y la persistencia de datos para la plataforma de adopción:

1. **Gestión de Mascotas:** Endpoints para la administración del catálogo de animales rescatados y sus estados (`DISPONIBLE`, `ADOPTADO`, etc.).
2. **Gestión de Solicitudes:** Módulo para la recepción, evaluación y cambio de estado (`PENDIENTE`, `APROBADA`, `RECHAZADA`) de las solicitudes de adopción.
3. **Control de Usuarios y Catálogos:** Persistencia de datos de usuarios y catalogación relacional con restricciones de integridad.

---

## 🛠️ Stack Tecnológico

- **Lenguaje:** Java 17+
- **Framework:** Spring Boot (Spring Data JPA, Spring Web)
- **Base de Datos:** PostgreSQL (Alojada en la nube con **Supabase**)
- **Documentación y Pruebas:** Postman
- **Gestor de Dependencias:** Maven
- **Control de Versiones:** Git / GitHub (`develop`)

---

## 📚 Documentación Técnica & API

Toda la documentación técnica del servidor y los contratos de la API se encuentran en la carpeta `docs/`:

- 📋 [Requisitos del Sistema y Formulación](docs/requisitos.md)
- 🏗️ [Estructura del Proyecto y Capas](docs/estructura-proyecto.md)
- 📐 [Diagrama de Clases UML](docs/diagrama-de-clases.md)
- 📝 [Historias de Usuario](docs/historias-de-usuario.md)
- 🚀 [Colección de Pruebas API REST (Postman)](docs/FundacionAurora.postman_collection.json)

---

## 🚀 Configuración y Ejecución Local

### Prerrequisitos
- Java JDK 17 o superior
- Maven 3.8+
- Cuenta/Instancia en Supabase (PostgreSQL)

### Pasos para ejecutar
1. Clonar el repositorio y posicionarse en la rama `develop`:
   ```bash
   git clone [https://github.com/angelicasaenz/fundacion-aurora.git](https://github.com/angelicasaenz/fundacion-aurora.git)
   git checkout develop
   
### Configurar el archivo src/main/resources/application.properties reemplazando los valores entre <...> por tus credenciales locales/personales:

    spring.datasource.url=jdbc:postgresql://<TU_HOST_SUPABASE>:5432/postgres
    spring.datasource.username=postgres
    spring.datasource.password=<TU_CONTRASEÑA_SUPABASE>
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true

### Compilar y ejecutar la aplicación desde la terminal:

    mvn spring-boot:run
