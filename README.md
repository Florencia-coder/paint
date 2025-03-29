# **Canvas Painting App**

Una aplicación interactiva que permite pintar celdas de una cuadrícula. Puedes seleccionar un color y pintar sobre las celdas haciendo clic y arrastrando el mouse. Además, puedes usar el clic derecho para abrir un modal y cambiar el color de pintura. La aplicación está construida con **React** y usa **hooks personalizados** para manejar el estado y las interacciones del usuario.

## **Características**

- **Pintar celdas**: Haz clic y arrastra el mouse sobre las celdas para pintar.
- **Cambiar color**: Utiliza un modal que se abre con clic derecho para elegir el color de pintura.
- **Guardar color**: Los colores seleccionados se mantienen mientras pintas.
- **Interacción con el mouse**: Se utiliza el clic izquierdo para pintar y el clic derecho para abrir un modal de selección de color.

## **Tecnologías Usadas**

- **React**: Biblioteca principal para la construcción de la UI.
- **Hooks personalizados**:
  - `useToggleCell`: Maneja la pintura de las celdas.
  - `useWindowSize`: Administra el tamaño de la cuadrícula.
  - `useIsPainting`: Controla el estado de "pintando" para saber si el usuario está activamente pintando.
- **CSS**: Estilización de la cuadrícula y la interfaz.

## **Instalación y Uso**

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Florencia-coder/paint.git
   cd carestino-test
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Ejecuta la aplicación**:

   ```bash
   npm run dev
   ```

## **Cómo Funciona**

### **Interacciones**

- **Pintar celdas**: Haz clic y mantén presionado el botón izquierdo del mouse para pintar las celdas de la cuadrícula. Si pasas el mouse sobre una celda mientras pintas, se pintará también.
- **Cambiar color**: Haz clic derecho en cualquier parte de la cuadrícula para abrir un modal donde puedes elegir el color de pintura. El color seleccionado se utilizará para pintar las celdas.
- **Desactivar la pintura**: Suelta el botón del mouse para dejar de pintar.

### **Uso de Hooks**

- `useToggleCell`: Este hook maneja el cambio de color de las celdas. Cada vez que el usuario pinta una celda, este hook actualiza el estado de las celdas con el color actual.
- `useWindowSize`: Este hook ajusta el tamaño de la cuadrícula (en términos de celdas) para adaptarse al tamaño de la ventana.

## **Contribuciones**

Si deseas contribuir a este proyecto, siéntete libre de hacer un **fork** del repositorio y enviar un **pull request** con tus mejoras.
