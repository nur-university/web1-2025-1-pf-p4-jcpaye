function cargarConversacion(usuario) {
  const mensajes = {
    usuario01: [
      { tipo: 'recibido', texto: 'Hola, ¿cómo estás?' },
      { tipo: 'enviado', texto: 'Bien, ¿y tú?' },
      { tipo: 'recibido', texto: 'Estoy interesado en tu producto.' },
    ],
    usuario02: [
      { tipo: 'recibido', texto: '¿Está disponible el producto?' },
      { tipo: 'enviado', texto: 'Sí, aún lo tengo.' },
    ]
  };

  const contenedor = document.getElementById("mensajes");
  const nombre = document.getElementById("nombreConversacion");
  contenedor.innerHTML = "";
  nombre.textContent = `Conversación con ${usuario}`;

  mensajes[usuario]?.forEach(msg => {
    const div = document.createElement("div");
    div.className = `chat-mensaje ${msg.tipo}`;
    div.textContent = msg.texto;
    contenedor.appendChild(div);
  });
}
function mostrarSeccion(seccion) {
  // Botones
  document.getElementById('tab-vendedores').classList.remove('active');
  document.getElementById('tab-compradores').classList.remove('active');

  // Secciones
  document.getElementById('lista-vendedores').classList.add('hidden');
  document.getElementById('lista-compradores').classList.add('hidden');

  if (seccion === 'vendedores') {
    document.getElementById('lista-vendedores').classList.remove('hidden');
    document.getElementById('tab-vendedores').classList.add('active');
  } else {
    document.getElementById('lista-compradores').classList.remove('hidden');
    document.getElementById('tab-compradores').classList.add('active');
  }
}