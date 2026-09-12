# 📋 Historias de Usuario - Fundación Aurora

Este documento contiene la especificación de Historias de Usuario (HU) para la plataforma web de adopción de mascotas de la **Fundación Aurora**.

---

## 🐶 Módulo: Catálogo de Mascotas (Público)

### **HU-01: Ver catálogo de mascotas disponibles**
* **Como:** Visitante de la página web
* **Quiero:** Visualizar un catálogo con las mascotas rescatadas (foto, nombre, edad, especie y estado)
* **Para:** Conocer a los animales que están listos para ser adoptados.

**Criterios de Aceptación:**
* Debe mostrar únicamente las mascotas cuyo estado sea `DISPONIBLE`.
* Cada mascota debe presentar una tarjeta con su foto, nombre, edad aproximada y especie (perro/gato).
* Al hacer clic en una tarjeta, se deben ver los detalles completos de la mascota.

---

### **HU-02: Filtrar mascotas por especie**
* **Como:** Visitante de la página web
* **Quiero:** Filtrar la lista de mascotas por especie (Perros, Gatos u Otros)
* **Para:** Encontrar más rápido la mascota que se adapte a mis preferencias.

**Criterios de Aceptación:**
* Debe incluir un menú desplegable o botones de filtro rápido por especie.
* La lista debe actualizarse sin necesidad de recargar la página.

---

## 📝 Módulo: Solicitudes de Adopción (Adoptantes)

### **HU-03: Enviar formulario de adopción**
* **Como:** Usuario interesado en adoptar
* **Quiero:** Llenar un formulario con mis datos de contacto (nombre, teléfono, correo, dirección y motivo de adopción)
* **Para:** Postularme oficialmente como adoptante de una mascota específica.

**Criterios de Aceptación:**
* El formulario debe validar que todos los campos obligatorios estén completos.
* Debe permitir seleccionar o estar vinculado automáticamente a la mascota de interés.
* Al enviar la solicitud, el sistema debe mostrar un mensaje de confirmación al usuario.

---

## ⚙️ Módulo: Administración (Panel de la Fundación)

### **HU-04: Registrar nueva mascota**
* **Como:** Administrador de la fundación
* **Quiero:** Ingresar los datos de una nueva mascota rescatada (nombre, especie, raza, edad, estado de salud, descripción y URL de imagen)
* **Para:** Publicarla en el catálogo y permitir su adopción.

**Criterios de Aceptación:**
* El formulario debe guardar la mascota en la base de datos con el estado inicial `DISPONIBLE`.
* La imagen debe ser una URL válida o permitir la previsualización antes de guardar.

### **HU-05: Gestionar solicitudes de adopción**
* **Como:** Administrador de la fundación
* **Quiero:** Revisar la lista de solicitudes de adopción recibidas y marcar su estado como `APROBADA` o `RECHAZADA`
* **Para:** Evaluar a los posibles adoptantes y asignarles la mascota.

**Criterios de Aceptación:**
* El administrador debe poder cambiar el estado de la solicitud.
* Si una solicitud es `APROBADA`, el estado de la mascota asociada debe cambiar automáticamente a `ADOPTADO`.