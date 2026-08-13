# AGRO Godziny

Statyczna aplikacja webowa do rozliczania czasu pracy na podstawie eksportu Prodio.

## Publikacja na GitHub Pages

1. Utwórz nowe repozytorium, np. `agro-godziny`.
2. Wgraj do głównego katalogu trzy pliki: `index.html`, `style.css`, `app.js`.
3. Wejdź w **Settings → Pages**.
4. W `Build and deployment` wybierz **Deploy from a branch**, branch `main`, folder `/ (root)`.
5. Po zapisaniu aplikacja będzie dostępna pod adresem GitHub Pages repozytorium.

## Jak używać

- Wybierz miesiąc.
- Wrzuć eksport Prodio XLSX/CSV lub cały skoroszyt zawierający arkusz `Historia pracy`.
- Aplikacja odczytuje kolumny `Pracownik`, `Start`, `Stop`.
- Dla pracowników Prodio bierze najwcześniejszy Start i najpóźniejszy Stop w dniu.
- Godziny można ręcznie skorygować, a nieobecność wybrać z listy.
- W zakładce Podsumowanie kliknij `Eksportuj raport Excel`.

## Prywatność

Dane są przetwarzane po stronie przeglądarki. Aplikacja nie ma backendu i nie wysyła danych Prodio na serwer. Biblioteka ExcelJS jest pobierana z CDN przy otwarciu strony.
