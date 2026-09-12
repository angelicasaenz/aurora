# 📋 Historias de Usuario - Fundación Aurora

Este documento contiene la especificación de Historias de Usuario (HU) para la plataforma web de adopción de mascotas de la **Fundación Aurora**.

---

## 🐶 Módulo 1: Catálogo de Mascotas (Público / Adoptantes)

### **HU-01: Ver catálogo de mascotas disponibles**
* **Como:** Visitante de la página web
* **Quiero:** Visualizar un catálogo con las mascotas rescatadas (foto, nombre, edad, especie y estado)
* **Para:** Conocer a los animales que están listos para ser adoptados.

**Criterios de Aceptación:**
* Debe mostrar únicamente las mascotas cuyo estado sea `DISPONIBLE`.
* Cada mascota debe presentar una tarjeta con su foto, nombre, edad aproximada y especie (perro/gato).
* Al hacer clic en una tarjeta, se deben ver los detalles completos de la mascota.

### **HU-02: Filtrar mascotas por especie**
* **Como:** Visitante de la página web
* **Quiero:** Filtrar la lista de mascotas por especie (Perros, Gatos u Otros)
* **Para:** Encontrar más rápido la mascota que se adapte a mis preferencias.

**Criterios de Aceptación:**
* Debe incluir un menú desplegable o botones de filtro rápido por especie.
* La lista debe actualizarse de forma dinámica sin necesidad de recargar la página.

---

## 📝 Módulo 2: Solicitudes de Adopción (Adoptantes)

### **HU-03: Enviar formulario de adopción**
* **Como:** Usuario registrado como Adoptante
* **Quiero:** Llenar un formulario con mis datos de contacto (nombre, teléfono, correo, dirección y motivo de adopción)
* **Para:** Postularme oficialmente como adoptante de una mascota específica.

**Criterios de Aceptación:**
* El formulario debe validar que todos los campos obligatorios estén completos.
* La solicitud debe quedar vinculada automáticamente a la mascota seleccionada.
* Al enviar la solicitud, el sistema debe mostrar un mensaje de confirmación al usuario.

---

## ⚙️ Módulo 3: Administración y Gestión (Panel de la Fundación)

### **HU-04: Autenticación y acceso de Administrador**
* **Como:** Administrador de la fundación
* **Quiero:** Iniciar sesión con mi correo y contraseña
* **Para:** Acceder al panel privado de gestión de la fundación.

**Criterios de Aceptación:**
* El sistema debe validar credenciales y verificar el rol `ADMINISTRADOR`.
* Solo los usuarios autenticados como administración pueden ver el panel de control.

### **HU-05: Registrar y gestionar mascotas (CRUD)**
* **Como:** Administrador de la fundación
* **Quiero:** Ingresar, editar o eliminar los datos de las mascotas rescatadas
* **Para:** Mantener actualizado el catálogo del sitio web.

**Criterios de Aceptación:**
* El formulario debe guardar la mascota en la base de datos con el estado inicial `DISPONIBLE`.
* El administrador puede modificar datos o cambiar el estado de la mascota en cualquier momento.

### **HU-06: Gestionar solicitudes de adopción**
* **Como:** Administrador de la fundación
* **Quiero:** Revisar las solicitudes recibidas y cambiar su estado a `APROBADA` o `RECHAZADA`
* **Para:** Evaluar a los adoptantes y coordinar la entrega de la mascota.

**Criterios de Aceptación:**
* El administrador debe poder visualizar el detalle del formulario de cada solicitante.
* Si una solicitud es marcada como `APROBADA`, el estado de la mascota asociada debe cambiar automáticamente a `ADOPTADO`.