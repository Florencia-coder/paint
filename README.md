# **Paint App - Test Técnico Carestino**

Una aplicación interactiva que simula un canvas de pintura tipo Paint. Desarrollada como test técnico para Worpik, orientada a un puesto en Carestino. La aplicación permite dibujar en una cuadrícula, con la capacidad de seleccionar diferentes colores mediante un modal contextual.

## **Características**

- **Dibujo en cuadrícula**: Interfaz tipo Paint con una cuadrícula responsive que se adapta al tamaño de la ventana.
- **Pintura interactiva**:
  - Click izquierdo + arrastre para pintar celdas
  - Click derecho para abrir el selector de colores
- **Selector de colores**: Modal contextual con CirclePicker que se posiciona inteligentemente en la pantalla.
- **Diseño responsive**: La cuadrícula se ajusta automáticamente al tamaño de la ventana.

## **Tecnologías Utilizadas**

- **React**: Biblioteca principal para la construcción de la UI
- **react-color**: Componente CirclePicker para la selección de colores
- **CSS Modules**: Estilizado modular para evitar conflictos de nombres
- **Vite**: Herramienta de construcción y desarrollo

## **Hooks Personalizados**

- **useWindowDimensions**:
  - Maneja las dimensiones de la ventana
- **useWindowSize**:
  - Calcula el tamaño de las celdas basado en la altura de la ventana
  - Mantiene la grilla responsive ajustándose al tamaño de la ventana
- **useCanvas**:
  - Gestiona la lógica de pintura y eventos del mouse
  - Maneja el estado del color seleccionado y la posición del modal
  - Controla los eventos de click y arrastre para pintar
- **useToggleCell**:
  - Optimiza la actualización de celdas individuales
  - Maneja la lógica de cambio de color en las celdas
  - Implementa memoización para evitar renders innecesarios

## **Instalación y Uso**

1. **Clonar el repositorio**:

   ```bash
   git clone [https://github.com/Florencia-coder/paint]
   cd carestino-test
   ```

2. **Instalar dependencias**:

   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

## **Estructura del Proyecto**

```
src/
├── components/
│   ├── Paint/               # Componente principal
│   ├── Row/                 # Maneja filas de la cuadrícula
│   ├── Column/              # Maneja celdas individuales
│   └── ModalSetColor/       # Modal de selección de color
├── hooks/
│   ├── useWindowSize        # Calculo de cantidad y tamaño de columnas en base a las dimensiones
│   ├── useWindowDimensions  # Calculo de las dimensiones
│   ├── useCanvas            # Lógica de pintura y eventos
│   └── useToggleCell        # Actualización optimizada de celdas

```

## **Optimizaciones Implementadas**

- Memoización de componentes para evitar renders innecesarios
- Cálculo eficiente de dimensiones de cuadrícula
- Posicionamiento inteligente del modal de colores
- Manejo optimizado de eventos del mouse

## **Decisiones Técnicas**

- Uso de CSS Modules para evitar conflictos de estilos
- Implementación de hooks personalizados para separar lógica
- Manejo eficiente del estado con React hooks
- Diseño responsive sin dependencias externas
