# AGRO Godziny 1.0 — wersja finalna

Statyczna aplikacja webowa do rozliczania czasu pracy na podstawie eksportu Prodio.
Działa na GitHub Pages; dane i ręczne korekty są przechowywane lokalnie w przeglądarce użytkownika.

## Import

Aplikacja rozpoznaje lekki plik XLSX zawierający:
- arkusz z danymi Prodio (nagłówki: `Pracownik`, `Start`, `Stop`),
- arkusz z listą pracowników / kategoriami i kodami nieobecności.

## Zasady liczenia

- Prodio: najwcześniejszy Start + najpóźniejszy Stop pracownika danego dnia.
- Standardowy czas Prodio jest zaokrąglany do 15 minut zgodnie z przyjętą logiką.
- Wyjątki 30-minutowego zaokrąglania Start/Stop pozostają zgodne z konfiguracją pracowników.
- Norma dzienna w normalnym dniu roboczym (pon.–pt.) = 8:00.
- Powyżej 8:00: nadwyżka trafia do 50%.
- Poniżej 8:00: powstaje niedogodzina.
- Miesięcznie niedogodziny najpierw pomniejszają pulę 50%; nadwyżka niedogodzin pomniejsza ogólną liczbę godzin.
- Dzień bez pracy nie tworzy niedogodzin.
- Nieobecność bez pracy nie tworzy niedogodzin.
- Nieobecność + faktyczna praca: cały czas pracy trafia do 50%, bez niedogodzin; ta zasada ma pierwszeństwo przed weekendem.
- Sobota: cały czas do 100%.
- Niedziela: do 100% tylko po włączeniu odpowiedniej opcji w ustawieniach.

## Funkcje

- zależne filtry Spółka/Dział → Pracownik,
- aktywowanie/wyłączanie pracowników z raportów,
- ręczne godziny dla MAGAZYNU/SERWISU,
- ręczne korekty Start/Stop dla danych Prodio,
- szybkie korekty −15 / −10 / −5 / +5 / +10 / +15 minut,
- przywrócenie wartości źródłowej Prodio,
- kody nieobecności,
- podsumowanie według pracownika oraz kategorii,
- eksport raportu XLSX,
- lokalny zapis bieżącego stanu i korekt w przeglądarce.

## Publikacja na GitHub Pages

W repozytorium `agro-godziny` podmień cztery pliki z tej paczki:
- `index.html`
- `app.js`
- `style.css`
- `README.md`

Wykonaj `Commit changes` i poczekaj na deployment GitHub Pages. Wersja 1.0 zawiera cache-busting (`?v=1.0.0`) dla plików JS/CSS, aby przeglądarka pobierała właściwą wersję aplikacji po publikacji.
