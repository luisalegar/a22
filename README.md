# A22 Investments — Demo web (2 versiones)

Demo estática para mostrar al cliente. Dos direcciones de diseño del sitio
de A22 Investments (industria naval y portuaria), navegables y bilingües+.

## Contenido

| Ruta | Qué es |
|------|--------|
| `index.html` | Pantalla comparativa — las 2 versiones lado a lado |
| `version-a/` | **Versión A — Operations.** Premium B2B naval. 4 idiomas (ES/EN/PT/NL). Fotos reales + blueprints. |
| `version-b/` | **Versión B — Trade Bureau.** Editorial naval con blueprints. ES/EN + panel de ajustes. |

## Publicar en GitHub Pages (≈10 min)

1. Crea un repositorio **público** en GitHub (p. ej. `a22`).
2. *Add file → Upload files* y arrastra **todo el contenido de esta carpeta**
   (incluido el archivo oculto `.nojekyll`).
3. *Settings → Pages → Branch:* `main`, carpeta `/ (root)` → *Save*.
4. Espera ~1 minuto. El link queda en:
   - Comparativa: `https://TU-USUARIO.github.io/a22/`
   - Versión A: `https://TU-USUARIO.github.io/a22/version-a/`
   - Versión B: `https://TU-USUARIO.github.io/a22/version-b/`

## Notas

- Sitio 100% estático (HTML/CSS/JS). No requiere servidor.
- Corre con React compilado en el navegador: al abrir, muestra un instante de
  carga mientras compila. Para la versión final se deja precompilado y carga al
  instante.
- Todas las rutas son relativas: funciona en cualquier subcarpeta.
- Datos de contacto reales (info@a22investments.com, teléfonos +58). WhatsApp y
  dirección de oficina quedan pendientes de confirmar.
