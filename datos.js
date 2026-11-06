var DATOS = {
  "admin": {
    "clave": "entrenador123"
  },
  "clientes": [
    {
      "usuario": "Laura",
      "clave": "laura123",
      "nombre": "Laura",
      "semanal": {
        "lunes": {
          "titulo": "Pierna",
          "notas": "Calentar 10 min en bici suave antes de empezar.",
          "ejercicios": [
            { "nombre": "Sentadilla", "detalle": "4 x 10 · descanso 90 s" },
            { "nombre": "Peso muerto rumano", "detalle": "3 x 12 · descanso 90 s" },
            { "nombre": "Zancadas caminando", "detalle": "3 x 12 por pierna" }
          ]
        },
        "miercoles": {
          "titulo": "Empuje",
          "ejercicios": [
            { "nombre": "Press banca", "detalle": "4 x 8 · descanso 2 min" },
            { "nombre": "Press militar con mancuernas", "detalle": "3 x 10" },
            {
              "tipo": "circuito",
              "nombre": "Circuito final",
              "detalle": "3 rondas · 1 min de descanso entre rondas",
              "ejercicios": [
                { "nombre": "Burpees", "detalle": "10 repeticiones" },
                { "nombre": "Kettlebell swing", "detalle": "15 repeticiones" },
                { "nombre": "Mountain climbers", "detalle": "30 s" }
              ]
            }
          ]
        },
        "viernes": {
          "titulo": "Tirón",
          "ejercicios": [
            { "nombre": "Dominadas asistidas", "detalle": "4 x 6-8" },
            { "nombre": "Remo con barra", "detalle": "4 x 10" },
            { "nombre": "Curl de bíceps", "detalle": "3 x 12" }
          ]
        },
        "domingo": { "titulo": "Descanso", "descanso": true, "ejercicios": [] }
      },
      "dias": {}
    },
    {
      "usuario": "Carlos",
      "clave": "carlos456",
      "nombre": "Carlos",
      "semanal": {
        "martes": {
          "titulo": "Cuerpo completo A",
          "ejercicios": [
            { "nombre": "Sentadilla goblet", "detalle": "3 x 12" },
            { "nombre": "Flexiones", "detalle": "3 x 10" }
          ]
        },
        "jueves": {
          "titulo": "Cuerpo completo B",
          "ejercicios": [
            { "nombre": "Peso muerto", "detalle": "3 x 8" },
            { "nombre": "Press militar", "detalle": "3 x 10" }
          ]
        }
      },
      "dias": {}
    }
  ]
};
