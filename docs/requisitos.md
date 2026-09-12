# Documento de Formulación de Proyecto y Requisitos del Sistema

**Proyecto:** Fundación Aurora (Plataforma Web de Adopción de Mascotas)

---

## 👥 Equipo de Trabajo
* **Angélica Sáenz** - *Estudiante de Ingeniería de Software*
* **Paula Cabrera** - *Estudiante de Ingeniería de Software*

---

## 1. Introducción
El presente documento establece la especificación técnica y el alcance del sistema de información para la **Fundación Aurora**. La propuesta busca implementar una plataforma web desacoplada que optimice la gestión de mascotas rescatadas y sistematice el flujo de solicitudes de adopción responsable.

---

## 2. Descripción del Problema
Muchas organizaciones de rescate animal enfrentan dificultades para gestionar la información de los ejemplares rescatados. Los procesos de registro, seguimiento de salud y evaluación de solicitudes de adopción se realizan frecuentemente en formatos físicos o carpetas desconectadas, lo que genera desorganización, pérdida de datos e ineficiencia en los tiempos de respuesta.

Para solucionar esta problemática, se define un sistema de información centralizado que permite administrar el catálogo de mascotas de la fundación y automatizar la recepción y evaluación de las solicitudes de adopción.

---

## 3. Objetivos del Sistema

### **Objetivo General**
Desarrollar una aplicación web full-stack para la **Fundación Aurora** utilizando una arquitectura desacoplada (Spring Boot, PostgreSQL y React) que permita gestionar el registro de mascotas rescatadas y sistematizar el proceso de adopción.

### **Objetivos Específicos**
* **Analizar** los procesos operativos de la fundación para determinar los requisitos funcionales y no funcionales del software.
* **Diseñar** el esquema de base de datos relacional y el diagrama de clases por capas para garantizar la escalabilidad de la arquitectura.
* **Construir** una API REST en Spring Boot para el procesamiento de la lógica de negocio y la persistencia de datos en PostgreSQL.
* **Implementar** una interfaz web interactiva en React para la visualización del catálogo de mascotas y el envío de solicitudes de adopción.
* **Desplegar** la solución en entornos de nube (Vercel / Render / Supabase) para su puesta en producción.

---

## 4. Requisitos del Sistema

### **A. Requisitos Funcionales (RF)**
* **RF01 - Gestión de Usuarios y Roles:** El sistema debe permitir registrar usuarios y gestionar roles diferenciados (`ADMINISTRADOR` y `ADOPTANTE`).
* **RF02 - Autenticación y Seguridad:** El sistema debe validar credenciales de acceso para proteger las rutas del panel de administración y validar datos de identificación para evitar registros duplicados.
* **RF03 - Registro y Gestión de Mascotas (Admin):** El usuario Administrador debe poder crear, editar, listar y eliminar mascotas (nombre, especie, raza, edad, estado de salud, descripción, URL de imagen).
* **RF04 - Catálogo Público:** Los usuarios visitantes y adoptantes pueden consultar las mascotas disponibles y filtrarlas por especie o edad.
* **RF05 - Solicitud de Adopción (Adoptante):** Los usuarios registrados como adoptantes pueden enviar un formulario para postularse a una mascota específica.
* **RF06 - Gestión de Solicitudes (Admin):** El Administrador puede evaluar, aprobar o rechazar las solicitudes de adopción. Al aprobar una solicitud, la mascota cambia automáticamente su estado a `ADOPTADO`.

### **B. Requisitos No Funcionales (RNF)**
* **RNF01 (Arquitectura):** Separación completa entre el cliente Web (React) y la API REST (Spring Boot).
* **RNF02 (Persistencia):** Uso de base de datos relacional PostgreSQL con Spring Data JPA.
* **RNF03 (Despliegue):** Alojamiento en servicios cloud accesibles mediante HTTPS para integración en el portafolio de proyectos.