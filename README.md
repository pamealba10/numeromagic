# 🎯 Adivina el Número

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=flat&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)

> Un juego interactivo para practicar **renderizado condicional** y **composición de componentes** en React.

---

## 📋 Tabla de Contenidos

- [🎮 Demo](#-demo)
- [✨ Características](#-características)
- [🧩 Estructura del Proyecto](#-estructura-del-proyecto)
- [🚀 Cómo Funciona](#-cómo-funciona)
- [🛠️ Tecnologías Usadas](#️-tecnologías-usadas)
- [📦 Instalación y Uso](#-instalación-y-uso)
- [🎨 Capturas de Pantalla](#-capturas-de-pantalla)
- [🤝 Contribuciones](#-contribuciones)
- [📄 Licencia](#-licencia)

---



## ✨ Características

- ✅ Genera un número aleatorio entre 1 y 100
- ✅ Validación de entrada del usuario
- ✅ Pistas dinámicas ("muy alto" / "muy bajo")
- ✅ Contador de intentos
- ✅ Mensaje de éxito al acertar
- ✅ Botón para reiniciar el juego
- ✅ Componentes reutilizables y modulares
- ✅ Diseño responsivo y amigable

---

## 🧩 Estructura del Proyecto



---

## 🚀 Cómo Funciona

### 🧠 Lógica del Juego

1. **Generación del número secreto:** Al iniciar el juego, se genera un número aleatorio entre 1 y 100 usando `Math.random()`.

2. **Entrada del usuario:** El usuario escribe un número en el campo de texto y presiona el botón "Adivinar".

3. **Validación:**
   - Si el número está fuera del rango (1-100) → mensaje de error.
   - Si el número es correcto → 🎉 mensaje de éxito y fin del juego.
   - Si el número es menor → 📈 pista "muy bajo".
   - Si el número es mayor → 📉 pista "muy alto".

4. **Contador de intentos:** Cada intento incrementa el contador.

5. **Reinicio:** Al acertar, aparece un botón para reiniciar el juego con un nuevo número secreto.


### CAPTURAS
![Pantalla Principal](/public/imagenes/img1.png)
![Mensaje de Fallo](/public/imagenes/img2.png)
![Mensaje de Éxito](/public/imagenes/img3.png)




### 🎨 Renderizado Condicional

```jsx
// Ejemplo en FeedbackMessage.jsx
if (!feedback) return null;  // No muestra nada si no hay feedback

// Ejemplo en Game.jsx
{gameOver && <button onClick={handleReset}>🔄 Jugar de nuevo</button>}



