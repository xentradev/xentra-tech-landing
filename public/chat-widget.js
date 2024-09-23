(async function () {
  // VARIABLES DE CONFIGURACION
  const DESKTOP_CHAT_HEIGHT = "65vh";
  const BUBBLE_ICON_CLOSED =
    "https://xcrush-qa.s3.us-east-1.amazonaws.com/tmp/brain-icon-white.png";
  const BUBBLE_ICON_OPENED =
    "https://xcrush-qa.s3.us-east-1.amazonaws.com/tmp/keyboard_arrow_down_24dp_E8EAED.png";

  const scriptTag = document.currentScript;
  const businessId = scriptTag.getAttribute("data-businessId");
  const chatHost = scriptTag.getAttribute("data-chat-host");
  const env = scriptTag.getAttribute("data-env") || "prod";

  let apiHost = "https://generic-ai-back.onrender.com";

  if (env === "local") {
    apiHost = "http://localhost:3333";
  }

  if (!businessId) {
    return;
  }

  try {
    const botConfigResponse = await fetch(
      `${apiHost}/api/admin/my-ai/public/${businessId}`
    );
    if (!botConfigResponse.ok) {
      throw new Error("Failed to fetch bot config");
    }
    const botConfig = await botConfigResponse.json();
    console.log(botConfig);

    // Cargar el archivo CSS dinámicamente
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${chatHost}/chat-widget.css`; // Asegúrate de que esta URL sea correcta
    document.head.appendChild(link);

    // Crear el contenedor del widget
    const chatContainer = document.createElement("div");
    chatContainer.id = "chat-widget-container";

    document.body.appendChild(chatContainer);

    // Crear el iframe para el chat
    const iframe = document.createElement("iframe");
    iframe.src = `${chatHost}/chat/INM-UY/${businessId}?without_chat_bubble=true`; // URL del chat

    chatContainer.appendChild(iframe);

    // Crear la burbuja
    const chatBubble = document.createElement("div");
    chatBubble.id = "chat-bubble";

    if (botConfig.primaryMainColor) {
      chatBubble.style.backgroundColor = botConfig.primaryMainColor;
    }

    // Agregar el icono a la burbuja
    const bubbleIcon = document.createElement("img");
    bubbleIcon.src = BUBBLE_ICON_CLOSED;
    bubbleIcon.alt = "Chat Icon";
    bubbleIcon.style.width = "25px"; // Ajusta el tamaño del icono según sea necesario
    bubbleIcon.style.height = "25px";

    chatBubble.appendChild(bubbleIcon);
    document.body.appendChild(chatBubble);

    // https://xcrush-qa.s3.us-east-1.amazonaws.com/tmp/keyboard_arrow_down_24dp_E8EAED.png

    // Detectar si es un dispositivo móvil
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Añadir funcionalidad de abrir y cerrar el chat
    chatBubble.addEventListener("click", function () {
      if (isMobile) {
        if (chatContainer.style.height === "100%") {
          chatContainer.style.height = "0";
          chatBubble.style.display = "flex"; // Mostrar la burbuja
        } else {
          chatContainer.style.height = "100%";
          chatBubble.style.display = "none"; // Ocultar la burbuja
        }
      } else {
        if (chatContainer.style.height === DESKTOP_CHAT_HEIGHT) {
          chatContainer.style.height = "0";
          bubbleIcon.src = BUBBLE_ICON_CLOSED;
        } else {
          chatContainer.style.height = DESKTOP_CHAT_HEIGHT;

          bubbleIcon.src = BUBBLE_ICON_OPENED;
        }
      }
    });

    // Escuchar el mensaje desde el iframe
    window.addEventListener("message", function (event) {
      if (event.data === "closeChat") {
        chatContainer.style.height = "0";
        chatBubble.style.display = "flex"; // Mostrar la burbuja
        bubbleIcon.src = BUBBLE_ICON_CLOSED;
      }
    });
  } catch (e) {
    console.error("Error loading future ai chatbot");
  }
})();
