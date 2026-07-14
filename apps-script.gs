const SPREADSHEET_ID = "1bJ6OEcfab_stv8aEq-qggJssYhQPciODAX0tOhD54kQ";
const RESPONSES_SHEET = "Respuestas";
const MATCHES_SHEET = "Partidos";
const RESULTS_SHEET = "Resultados";
const RANKING_SHEET = "Ranking";
const ROUND_OF_32_RESPONSES_SHEET = "Dieciseisavos";
const ROUND_OF_32_MATCHES_SHEET = "Partidos Dieciseisavos";
const ROUND_OF_32_RESULTS_SHEET = "Resultados Dieciseisavos";
const ROUND_OF_32_RANKING_SHEET = "Ranking Dieciseisavos";
const OCTAVOS_RESPONSES_SHEET = "Octavos";
const OCTAVOS_MATCHES_SHEET = "Partidos Octavos";
const OCTAVOS_RESULTS_SHEET = "Resultados Octavos";
const OCTAVOS_RANKING_SHEET = "Ranking Octavos";
const QUARTERFINALS_RESPONSES_SHEET = "Cuartos";
const QUARTERFINALS_MATCHES_SHEET = "Partidos Cuartos";
const QUARTERFINALS_RESULTS_SHEET = "Resultados Cuartos";
const QUARTERFINALS_RANKING_SHEET = "Ranking Cuartos";
const FINAL_PHASE_RESPONSES_SHEET = "Fase Final";
const FINAL_PHASE_MATCHES_SHEET = "Partidos Fase Final";
const FINAL_PHASE_RESULTS_SHEET = "Resultados Fase Final";
const FINAL_PHASE_RANKING_SHEET = "Ranking Fase Final";
const CUMULATIVE_RANKING_SHEET = "Ranking Acumulado";
const API_STATE_SHEET = "Estado API";
const DIAGNOSTIC_SHEET = "Diagnostico";
const FOOTBALL_DATA_API_URL = "https://api.football-data.org/v4/competitions/WC/matches?season=2026";
const FOOTBALL_DATA_TOKEN_PROPERTY = "FOOTBALL_DATA_API_KEY";
const SYNC_SECRET_PROPERTY = "SYNC_SECRET";
const PUBLIC_SYNC_CACHE_KEY = "PUBLIC_DATA_SYNC_ATTEMPTED";
const PUBLIC_DATA_CACHE_KEY = "PUBLIC_DATA_PAYLOAD_V10";
const PREDICTIONS_DATA_CACHE_KEY = "PREDICTIONS_DATA_PAYLOAD_V12";
const ROUND_OF_32_FORM_CACHE_KEY = "ROUND_OF_32_FORM_DATA_V1";
const ROUND_OF_32_MATCHES_CACHE_KEY = "ROUND_OF_32_MATCHES_V3";
const CR_TIME_ZONE = "America/Costa_Rica";
const LIVE_SYNC_MAX_AGE_MINUTES = 10 / 60;
const STANDARD_SYNC_MAX_AGE_MINUTES = 5;
const LIVE_SYNC_CACHE_SECONDS = 10;
const STANDARD_SYNC_CACHE_SECONDS = 240;
const LIVE_PAYLOAD_CACHE_SECONDS = 8;
const STANDARD_PAYLOAD_CACHE_SECONDS = 30;
const CACHE_CHUNK_SIZE = 90000;
const CACHE_MAX_CHUNKS = 20;
const POINTS_PER_HIT = 1;
const FORM_CLOSE_AT_UTC_MS = Date.UTC(2026, 5, 11, 19, 0, 0);
const FORM_CLOSE_LABEL = "11 de junio de 2026, 1:00 p.m. hora Costa Rica";
const ROUND_OF_32_CLOSE_AT_UTC_MS = Date.UTC(2026, 5, 28, 19, 0, 0);
const ROUND_OF_32_CLOSE_LABEL = "28 de junio de 2026, 1:00 p.m. hora Costa Rica";
const MATCHES = [
  {
    "id": "M001",
    "number": 1,
    "group": "A",
    "date": "2026-06-11",
    "dateLabel": "11 jun 2026",
    "home": {
      "name": "México",
      "sourceName": "méxico",
      "flagCode": "mx",
      "emoji": "🇲🇽"
    },
    "away": {
      "name": "Sudáfrica",
      "sourceName": "sudáfrica",
      "flagCode": "za",
      "emoji": "🇿🇦"
    },
    "crDate": "2026-06-11",
    "crDateLabel": "11 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M002",
    "number": 2,
    "group": "A",
    "date": "2026-06-11",
    "dateLabel": "11 jun 2026",
    "home": {
      "name": "República de Corea",
      "sourceName": "república de corea",
      "flagCode": "kr",
      "emoji": "🇰🇷"
    },
    "away": {
      "name": "República Checa",
      "sourceName": "república checa",
      "flagCode": "cz",
      "emoji": "🇨🇿"
    },
    "crDate": "2026-06-11",
    "crDateLabel": "11 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M003",
    "number": 3,
    "group": "A",
    "date": "2026-06-18",
    "dateLabel": "18 jun 2026",
    "home": {
      "name": "República Checa",
      "sourceName": "república checa",
      "flagCode": "cz",
      "emoji": "🇨🇿"
    },
    "away": {
      "name": "Sudáfrica",
      "sourceName": "sudáfrica",
      "flagCode": "za",
      "emoji": "🇿🇦"
    },
    "crDate": "2026-06-18",
    "crDateLabel": "18 jun 2026",
    "crTime": "10:00 a.m.",
    "crTimeMinutes": 600
  },
  {
    "id": "M004",
    "number": 4,
    "group": "A",
    "date": "2026-06-18",
    "dateLabel": "18 jun 2026",
    "home": {
      "name": "México",
      "sourceName": "méxico",
      "flagCode": "mx",
      "emoji": "🇲🇽"
    },
    "away": {
      "name": "República de Corea",
      "sourceName": "república de corea",
      "flagCode": "kr",
      "emoji": "🇰🇷"
    },
    "crDate": "2026-06-18",
    "crDateLabel": "18 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M005",
    "number": 5,
    "group": "A",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "República Checa",
      "sourceName": "república checa",
      "flagCode": "cz",
      "emoji": "🇨🇿"
    },
    "away": {
      "name": "México",
      "sourceName": "méxico",
      "flagCode": "mx",
      "emoji": "🇲🇽"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M006",
    "number": 6,
    "group": "A",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "Sudáfrica",
      "sourceName": "sudáfrica",
      "flagCode": "za",
      "emoji": "🇿🇦"
    },
    "away": {
      "name": "República de Corea",
      "sourceName": "república de corea",
      "flagCode": "kr",
      "emoji": "🇰🇷"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M007",
    "number": 7,
    "group": "B",
    "date": "2026-06-12",
    "dateLabel": "12 jun 2026",
    "home": {
      "name": "Canadá",
      "sourceName": "canadá",
      "flagCode": "ca",
      "emoji": "🇨🇦"
    },
    "away": {
      "name": "Bosnia y Herzegovina",
      "sourceName": "bosnia-herzegovina",
      "flagCode": "ba",
      "emoji": "🇧🇦"
    },
    "crDate": "2026-06-12",
    "crDateLabel": "12 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M008",
    "number": 8,
    "group": "B",
    "date": "2026-06-13",
    "dateLabel": "13 jun 2026",
    "home": {
      "name": "Catar",
      "sourceName": "catar",
      "flagCode": "qa",
      "emoji": "🇶🇦"
    },
    "away": {
      "name": "Suiza",
      "sourceName": "suiza",
      "flagCode": "ch",
      "emoji": "🇨🇭"
    },
    "crDate": "2026-06-13",
    "crDateLabel": "13 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M009",
    "number": 9,
    "group": "B",
    "date": "2026-06-18",
    "dateLabel": "18 jun 2026",
    "home": {
      "name": "Suiza",
      "sourceName": "suiza",
      "flagCode": "ch",
      "emoji": "🇨🇭"
    },
    "away": {
      "name": "Bosnia y Herzegovina",
      "sourceName": "bosnia-herzegovina",
      "flagCode": "ba",
      "emoji": "🇧🇦"
    },
    "crDate": "2026-06-18",
    "crDateLabel": "18 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M010",
    "number": 10,
    "group": "B",
    "date": "2026-06-18",
    "dateLabel": "18 jun 2026",
    "home": {
      "name": "Canadá",
      "sourceName": "canadá",
      "flagCode": "ca",
      "emoji": "🇨🇦"
    },
    "away": {
      "name": "Catar",
      "sourceName": "catar",
      "flagCode": "qa",
      "emoji": "🇶🇦"
    },
    "crDate": "2026-06-18",
    "crDateLabel": "18 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M011",
    "number": 11,
    "group": "B",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "Suiza",
      "sourceName": "suiza",
      "flagCode": "ch",
      "emoji": "🇨🇭"
    },
    "away": {
      "name": "Canadá",
      "sourceName": "canadá",
      "flagCode": "ca",
      "emoji": "🇨🇦"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M012",
    "number": 12,
    "group": "B",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "Bosnia y Herzegovina",
      "sourceName": "bosnia-herzegovina",
      "flagCode": "ba",
      "emoji": "🇧🇦"
    },
    "away": {
      "name": "Catar",
      "sourceName": "catar",
      "flagCode": "qa",
      "emoji": "🇶🇦"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M013",
    "number": 13,
    "group": "C",
    "date": "2026-06-13",
    "dateLabel": "13 jun 2026",
    "home": {
      "name": "Brasil",
      "sourceName": "brasil",
      "flagCode": "br",
      "emoji": "🇧🇷"
    },
    "away": {
      "name": "Marruecos",
      "sourceName": "marruecos",
      "flagCode": "ma",
      "emoji": "🇲🇦"
    },
    "crDate": "2026-06-13",
    "crDateLabel": "13 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M014",
    "number": 14,
    "group": "C",
    "date": "2026-06-13",
    "dateLabel": "13 jun 2026",
    "home": {
      "name": "Haití",
      "sourceName": "haití",
      "flagCode": "ht",
      "emoji": "🇭🇹"
    },
    "away": {
      "name": "Escocia",
      "sourceName": "escocia",
      "flagCode": "gb-sct",
      "emoji": "🏳"
    },
    "crDate": "2026-06-13",
    "crDateLabel": "13 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M015",
    "number": 15,
    "group": "C",
    "date": "2026-06-19",
    "dateLabel": "19 jun 2026",
    "home": {
      "name": "Escocia",
      "sourceName": "escocia",
      "flagCode": "gb-sct",
      "emoji": "🏳"
    },
    "away": {
      "name": "Marruecos",
      "sourceName": "marruecos",
      "flagCode": "ma",
      "emoji": "🇲🇦"
    },
    "crDate": "2026-06-19",
    "crDateLabel": "19 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M016",
    "number": 16,
    "group": "C",
    "date": "2026-06-19",
    "dateLabel": "19 jun 2026",
    "home": {
      "name": "Brasil",
      "sourceName": "brasil",
      "flagCode": "br",
      "emoji": "🇧🇷"
    },
    "away": {
      "name": "Haití",
      "sourceName": "haití",
      "flagCode": "ht",
      "emoji": "🇭🇹"
    },
    "crDate": "2026-06-19",
    "crDateLabel": "19 jun 2026",
    "crTime": "6:30 p.m.",
    "crTimeMinutes": 1110
  },
  {
    "id": "M017",
    "number": 17,
    "group": "C",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "Escocia",
      "sourceName": "escocia",
      "flagCode": "gb-sct",
      "emoji": "🏳"
    },
    "away": {
      "name": "Brasil",
      "sourceName": "brasil",
      "flagCode": "br",
      "emoji": "🇧🇷"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M018",
    "number": 18,
    "group": "C",
    "date": "2026-06-24",
    "dateLabel": "24 jun 2026",
    "home": {
      "name": "Marruecos",
      "sourceName": "marruecos",
      "flagCode": "ma",
      "emoji": "🇲🇦"
    },
    "away": {
      "name": "Haití",
      "sourceName": "haití",
      "flagCode": "ht",
      "emoji": "🇭🇹"
    },
    "crDate": "2026-06-24",
    "crDateLabel": "24 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M019",
    "number": 19,
    "group": "D",
    "date": "2026-06-12",
    "dateLabel": "12 jun 2026",
    "home": {
      "name": "Estados Unidos",
      "sourceName": "estados unidos",
      "flagCode": "us",
      "emoji": "🇺🇸"
    },
    "away": {
      "name": "Paraguay",
      "sourceName": "paraguay",
      "flagCode": "py",
      "emoji": "🇵🇾"
    },
    "crDate": "2026-06-12",
    "crDateLabel": "12 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M020",
    "number": 20,
    "group": "D",
    "date": "2026-06-13",
    "dateLabel": "13 jun 2026",
    "home": {
      "name": "Australia",
      "sourceName": "australia",
      "flagCode": "au",
      "emoji": "🇦🇺"
    },
    "away": {
      "name": "Turquía",
      "sourceName": "turquía",
      "flagCode": "tr",
      "emoji": "🇹🇷"
    },
    "crDate": "2026-06-13",
    "crDateLabel": "13 jun 2026",
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
  },
  {
    "id": "M021",
    "number": 21,
    "group": "D",
    "date": "2026-06-19",
    "dateLabel": "19 jun 2026",
    "home": {
      "name": "Estados Unidos",
      "sourceName": "estados unidos",
      "flagCode": "us",
      "emoji": "🇺🇸"
    },
    "away": {
      "name": "Australia",
      "sourceName": "australia",
      "flagCode": "au",
      "emoji": "🇦🇺"
    },
    "crDate": "2026-06-19",
    "crDateLabel": "19 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M022",
    "number": 22,
    "group": "D",
    "date": "2026-06-19",
    "dateLabel": "19 jun 2026",
    "home": {
      "name": "Turquía",
      "sourceName": "turquía",
      "flagCode": "tr",
      "emoji": "🇹🇷"
    },
    "away": {
      "name": "Paraguay",
      "sourceName": "paraguay",
      "flagCode": "py",
      "emoji": "🇵🇾"
    },
    "crDate": "2026-06-19",
    "crDateLabel": "19 jun 2026",
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
  },
  {
    "id": "M023",
    "number": 23,
    "group": "D",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Turquía",
      "sourceName": "turquía",
      "flagCode": "tr",
      "emoji": "🇹🇷"
    },
    "away": {
      "name": "Estados Unidos",
      "sourceName": "estados unidos",
      "flagCode": "us",
      "emoji": "🇺🇸"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M024",
    "number": 24,
    "group": "D",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Paraguay",
      "sourceName": "paraguay",
      "flagCode": "py",
      "emoji": "🇵🇾"
    },
    "away": {
      "name": "Australia",
      "sourceName": "australia",
      "flagCode": "au",
      "emoji": "🇦🇺"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M025",
    "number": 25,
    "group": "E",
    "date": "2026-06-14",
    "dateLabel": "14 jun 2026",
    "home": {
      "name": "Alemania",
      "sourceName": "alemania",
      "flagCode": "de",
      "emoji": "🇩🇪"
    },
    "away": {
      "name": "Curazao",
      "sourceName": "curazao",
      "flagCode": "cw",
      "emoji": "🇨🇼"
    },
    "crDate": "2026-06-14",
    "crDateLabel": "14 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660
  },
  {
    "id": "M026",
    "number": 26,
    "group": "E",
    "date": "2026-06-14",
    "dateLabel": "14 jun 2026",
    "home": {
      "name": "Costa de Marfil",
      "sourceName": "costa de marfil",
      "flagCode": "ci",
      "emoji": "🇨🇮"
    },
    "away": {
      "name": "Ecuador",
      "sourceName": "ecuador",
      "flagCode": "ec",
      "emoji": "🇪🇨"
    },
    "crDate": "2026-06-14",
    "crDateLabel": "14 jun 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
  },
  {
    "id": "M027",
    "number": 27,
    "group": "E",
    "date": "2026-06-20",
    "dateLabel": "20 jun 2026",
    "home": {
      "name": "Alemania",
      "sourceName": "alemania",
      "flagCode": "de",
      "emoji": "🇩🇪"
    },
    "away": {
      "name": "Costa de Marfil",
      "sourceName": "costa de marfil",
      "flagCode": "ci",
      "emoji": "🇨🇮"
    },
    "crDate": "2026-06-20",
    "crDateLabel": "20 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M028",
    "number": 28,
    "group": "E",
    "date": "2026-06-20",
    "dateLabel": "20 jun 2026",
    "home": {
      "name": "Ecuador",
      "sourceName": "ecuador",
      "flagCode": "ec",
      "emoji": "🇪🇨"
    },
    "away": {
      "name": "Curazao",
      "sourceName": "curazao",
      "flagCode": "cw",
      "emoji": "🇨🇼"
    },
    "crDate": "2026-06-20",
    "crDateLabel": "20 jun 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
  },
  {
    "id": "M029",
    "number": 29,
    "group": "E",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Curazao",
      "sourceName": "curazao",
      "flagCode": "cw",
      "emoji": "🇨🇼"
    },
    "away": {
      "name": "Costa de Marfil",
      "sourceName": "costa de marfil",
      "flagCode": "ci",
      "emoji": "🇨🇮"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M030",
    "number": 30,
    "group": "E",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Ecuador",
      "sourceName": "ecuador",
      "flagCode": "ec",
      "emoji": "🇪🇨"
    },
    "away": {
      "name": "Alemania",
      "sourceName": "alemania",
      "flagCode": "de",
      "emoji": "🇩🇪"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M031",
    "number": 31,
    "group": "F",
    "date": "2026-06-14",
    "dateLabel": "14 jun 2026",
    "home": {
      "name": "Países Bajos",
      "sourceName": "países bajos",
      "flagCode": "nl",
      "emoji": "🇳🇱"
    },
    "away": {
      "name": "Japón",
      "sourceName": "japón",
      "flagCode": "jp",
      "emoji": "🇯🇵"
    },
    "crDate": "2026-06-14",
    "crDateLabel": "14 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M032",
    "number": 32,
    "group": "F",
    "date": "2026-06-14",
    "dateLabel": "14 jun 2026",
    "home": {
      "name": "Suecia",
      "sourceName": "suecia",
      "flagCode": "se",
      "emoji": "🇸🇪"
    },
    "away": {
      "name": "Túnez",
      "sourceName": "túnez",
      "flagCode": "tn",
      "emoji": "🇹🇳"
    },
    "crDate": "2026-06-14",
    "crDateLabel": "14 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M033",
    "number": 33,
    "group": "F",
    "date": "2026-06-20",
    "dateLabel": "20 jun 2026",
    "home": {
      "name": "Países Bajos",
      "sourceName": "países bajos",
      "flagCode": "nl",
      "emoji": "🇳🇱"
    },
    "away": {
      "name": "Suecia",
      "sourceName": "suecia",
      "flagCode": "se",
      "emoji": "🇸🇪"
    },
    "crDate": "2026-06-20",
    "crDateLabel": "20 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660
  },
  {
    "id": "M034",
    "number": 34,
    "group": "F",
    "date": "2026-06-20",
    "dateLabel": "20 jun 2026",
    "home": {
      "name": "Túnez",
      "sourceName": "túnez",
      "flagCode": "tn",
      "emoji": "🇹🇳"
    },
    "away": {
      "name": "Japón",
      "sourceName": "japón",
      "flagCode": "jp",
      "emoji": "🇯🇵"
    },
    "crDate": "2026-06-20",
    "crDateLabel": "20 jun 2026",
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
  },
  {
    "id": "M035",
    "number": 35,
    "group": "F",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Japón",
      "sourceName": "japón",
      "flagCode": "jp",
      "emoji": "🇯🇵"
    },
    "away": {
      "name": "Suecia",
      "sourceName": "suecia",
      "flagCode": "se",
      "emoji": "🇸🇪"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
  },
  {
    "id": "M036",
    "number": 36,
    "group": "F",
    "date": "2026-06-25",
    "dateLabel": "25 jun 2026",
    "home": {
      "name": "Túnez",
      "sourceName": "túnez",
      "flagCode": "tn",
      "emoji": "🇹🇳"
    },
    "away": {
      "name": "Países Bajos",
      "sourceName": "países bajos",
      "flagCode": "nl",
      "emoji": "🇳🇱"
    },
    "crDate": "2026-06-25",
    "crDateLabel": "25 jun 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
  },
  {
    "id": "M037",
    "number": 37,
    "group": "G",
    "date": "2026-06-15",
    "dateLabel": "15 jun 2026",
    "home": {
      "name": "Bélgica",
      "sourceName": "bélgica",
      "flagCode": "be",
      "emoji": "🇧🇪"
    },
    "away": {
      "name": "Egipto",
      "sourceName": "egipto",
      "flagCode": "eg",
      "emoji": "🇪🇬"
    },
    "crDate": "2026-06-15",
    "crDateLabel": "15 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M038",
    "number": 38,
    "group": "G",
    "date": "2026-06-15",
    "dateLabel": "15 jun 2026",
    "home": {
      "name": "Irán",
      "sourceName": "irán",
      "flagCode": "ir",
      "emoji": "🇮🇷"
    },
    "away": {
      "name": "Nueva Zelanda",
      "sourceName": "nueva zelanda",
      "flagCode": "nz",
      "emoji": "🇳🇿"
    },
    "crDate": "2026-06-15",
    "crDateLabel": "15 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M039",
    "number": 39,
    "group": "G",
    "date": "2026-06-21",
    "dateLabel": "21 jun 2026",
    "home": {
      "name": "Bélgica",
      "sourceName": "bélgica",
      "flagCode": "be",
      "emoji": "🇧🇪"
    },
    "away": {
      "name": "Irán",
      "sourceName": "irán",
      "flagCode": "ir",
      "emoji": "🇮🇷"
    },
    "crDate": "2026-06-21",
    "crDateLabel": "21 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M040",
    "number": 40,
    "group": "G",
    "date": "2026-06-21",
    "dateLabel": "21 jun 2026",
    "home": {
      "name": "Nueva Zelanda",
      "sourceName": "nueva zelanda",
      "flagCode": "nz",
      "emoji": "🇳🇿"
    },
    "away": {
      "name": "Egipto",
      "sourceName": "egipto",
      "flagCode": "eg",
      "emoji": "🇪🇬"
    },
    "crDate": "2026-06-21",
    "crDateLabel": "21 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M041",
    "number": 41,
    "group": "G",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Egipto",
      "sourceName": "egipto",
      "flagCode": "eg",
      "emoji": "🇪🇬"
    },
    "away": {
      "name": "Irán",
      "sourceName": "irán",
      "flagCode": "ir",
      "emoji": "🇮🇷"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
  },
  {
    "id": "M042",
    "number": 42,
    "group": "G",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Nueva Zelanda",
      "sourceName": "nueva zelanda",
      "flagCode": "nz",
      "emoji": "🇳🇿"
    },
    "away": {
      "name": "Bélgica",
      "sourceName": "bélgica",
      "flagCode": "be",
      "emoji": "🇧🇪"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
  },
  {
    "id": "M043",
    "number": 43,
    "group": "H",
    "date": "2026-06-15",
    "dateLabel": "15 jun 2026",
    "home": {
      "name": "España",
      "sourceName": "españa",
      "flagCode": "es",
      "emoji": "🇪🇸"
    },
    "away": {
      "name": "Cabo Verde",
      "sourceName": "cabo verde",
      "flagCode": "cv",
      "emoji": "🇨🇻"
    },
    "crDate": "2026-06-15",
    "crDateLabel": "15 jun 2026",
    "crTime": "10:00 a.m.",
    "crTimeMinutes": 600
  },
  {
    "id": "M044",
    "number": 44,
    "group": "H",
    "date": "2026-06-15",
    "dateLabel": "15 jun 2026",
    "home": {
      "name": "Arabia Saudí",
      "sourceName": "arabia saudí",
      "flagCode": "sa",
      "emoji": "🇸🇦"
    },
    "away": {
      "name": "Uruguay",
      "sourceName": "uruguay",
      "flagCode": "uy",
      "emoji": "🇺🇾"
    },
    "crDate": "2026-06-15",
    "crDateLabel": "15 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M045",
    "number": 45,
    "group": "H",
    "date": "2026-06-21",
    "dateLabel": "21 jun 2026",
    "home": {
      "name": "España",
      "sourceName": "españa",
      "flagCode": "es",
      "emoji": "🇪🇸"
    },
    "away": {
      "name": "Arabia Saudí",
      "sourceName": "arabia saudí",
      "flagCode": "sa",
      "emoji": "🇸🇦"
    },
    "crDate": "2026-06-21",
    "crDateLabel": "21 jun 2026",
    "crTime": "10:00 a.m.",
    "crTimeMinutes": 600
  },
  {
    "id": "M046",
    "number": 46,
    "group": "H",
    "date": "2026-06-21",
    "dateLabel": "21 jun 2026",
    "home": {
      "name": "Uruguay",
      "sourceName": "uruguay",
      "flagCode": "uy",
      "emoji": "🇺🇾"
    },
    "away": {
      "name": "Cabo Verde",
      "sourceName": "cabo verde",
      "flagCode": "cv",
      "emoji": "🇨🇻"
    },
    "crDate": "2026-06-21",
    "crDateLabel": "21 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M047",
    "number": 47,
    "group": "H",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Cabo Verde",
      "sourceName": "cabo verde",
      "flagCode": "cv",
      "emoji": "🇨🇻"
    },
    "away": {
      "name": "Arabia Saudí",
      "sourceName": "arabia saudí",
      "flagCode": "sa",
      "emoji": "🇸🇦"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
  },
  {
    "id": "M048",
    "number": 48,
    "group": "H",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Uruguay",
      "sourceName": "uruguay",
      "flagCode": "uy",
      "emoji": "🇺🇾"
    },
    "away": {
      "name": "España",
      "sourceName": "españa",
      "flagCode": "es",
      "emoji": "🇪🇸"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
  },
  {
    "id": "M049",
    "number": 49,
    "group": "I",
    "date": "2026-06-16",
    "dateLabel": "16 jun 2026",
    "home": {
      "name": "Francia",
      "sourceName": "francia",
      "flagCode": "fr",
      "emoji": "🇫🇷"
    },
    "away": {
      "name": "Senegal",
      "sourceName": "senegal",
      "flagCode": "sn",
      "emoji": "🇸🇳"
    },
    "crDate": "2026-06-16",
    "crDateLabel": "16 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M050",
    "number": 50,
    "group": "I",
    "date": "2026-06-16",
    "dateLabel": "16 jun 2026",
    "home": {
      "name": "Irak",
      "sourceName": "irak",
      "flagCode": "iq",
      "emoji": "🇮🇶"
    },
    "away": {
      "name": "Noruega",
      "sourceName": "noruega",
      "flagCode": "no",
      "emoji": "🇳🇴"
    },
    "crDate": "2026-06-16",
    "crDateLabel": "16 jun 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
  },
  {
    "id": "M051",
    "number": 51,
    "group": "I",
    "date": "2026-06-22",
    "dateLabel": "22 jun 2026",
    "home": {
      "name": "Francia",
      "sourceName": "francia",
      "flagCode": "fr",
      "emoji": "🇫🇷"
    },
    "away": {
      "name": "Irak",
      "sourceName": "irak",
      "flagCode": "iq",
      "emoji": "🇮🇶"
    },
    "crDate": "2026-06-22",
    "crDateLabel": "22 jun 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
  },
  {
    "id": "M052",
    "number": 52,
    "group": "I",
    "date": "2026-06-22",
    "dateLabel": "22 jun 2026",
    "home": {
      "name": "Noruega",
      "sourceName": "noruega",
      "flagCode": "no",
      "emoji": "🇳🇴"
    },
    "away": {
      "name": "Senegal",
      "sourceName": "senegal",
      "flagCode": "sn",
      "emoji": "🇸🇳"
    },
    "crDate": "2026-06-22",
    "crDateLabel": "22 jun 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
  },
  {
    "id": "M053",
    "number": 53,
    "group": "I",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Noruega",
      "sourceName": "noruega",
      "flagCode": "no",
      "emoji": "🇳🇴"
    },
    "away": {
      "name": "Francia",
      "sourceName": "francia",
      "flagCode": "fr",
      "emoji": "🇫🇷"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M054",
    "number": 54,
    "group": "I",
    "date": "2026-06-26",
    "dateLabel": "26 jun 2026",
    "home": {
      "name": "Senegal",
      "sourceName": "senegal",
      "flagCode": "sn",
      "emoji": "🇸🇳"
    },
    "away": {
      "name": "Irak",
      "sourceName": "irak",
      "flagCode": "iq",
      "emoji": "🇮🇶"
    },
    "crDate": "2026-06-26",
    "crDateLabel": "26 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
  },
  {
    "id": "M055",
    "number": 55,
    "group": "J",
    "date": "2026-06-16",
    "dateLabel": "16 jun 2026",
    "home": {
      "name": "Argentina",
      "sourceName": "argentina",
      "flagCode": "ar",
      "emoji": "🇦🇷"
    },
    "away": {
      "name": "Argelia",
      "sourceName": "argelia",
      "flagCode": "dz",
      "emoji": "🇩🇿"
    },
    "crDate": "2026-06-16",
    "crDateLabel": "16 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
  },
  {
    "id": "M056",
    "number": 56,
    "group": "J",
    "date": "2026-06-16",
    "dateLabel": "16 jun 2026",
    "home": {
      "name": "Austria",
      "sourceName": "austria",
      "flagCode": "at",
      "emoji": "🇦🇹"
    },
    "away": {
      "name": "Jordania",
      "sourceName": "jordania",
      "flagCode": "jo",
      "emoji": "🇯🇴"
    },
    "crDate": "2026-06-16",
    "crDateLabel": "16 jun 2026",
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
  },
  {
    "id": "M057",
    "number": 57,
    "group": "J",
    "date": "2026-06-22",
    "dateLabel": "22 jun 2026",
    "home": {
      "name": "Argentina",
      "sourceName": "argentina",
      "flagCode": "ar",
      "emoji": "🇦🇷"
    },
    "away": {
      "name": "Austria",
      "sourceName": "austria",
      "flagCode": "at",
      "emoji": "🇦🇹"
    },
    "crDate": "2026-06-22",
    "crDateLabel": "22 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660
  },
  {
    "id": "M058",
    "number": 58,
    "group": "J",
    "date": "2026-06-22",
    "dateLabel": "22 jun 2026",
    "home": {
      "name": "Jordania",
      "sourceName": "jordania",
      "flagCode": "jo",
      "emoji": "🇯🇴"
    },
    "away": {
      "name": "Argelia",
      "sourceName": "argelia",
      "flagCode": "dz",
      "emoji": "🇩🇿"
    },
    "crDate": "2026-06-22",
    "crDateLabel": "22 jun 2026",
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
  },
  {
    "id": "M059",
    "number": 59,
    "group": "J",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "Argelia",
      "sourceName": "argelia",
      "flagCode": "dz",
      "emoji": "🇩🇿"
    },
    "away": {
      "name": "Austria",
      "sourceName": "austria",
      "flagCode": "at",
      "emoji": "🇦🇹"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M060",
    "number": 60,
    "group": "J",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "Jordania",
      "sourceName": "jordania",
      "flagCode": "jo",
      "emoji": "🇯🇴"
    },
    "away": {
      "name": "Argentina",
      "sourceName": "argentina",
      "flagCode": "ar",
      "emoji": "🇦🇷"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M061",
    "number": 61,
    "group": "K",
    "date": "2026-06-17",
    "dateLabel": "17 jun 2026",
    "home": {
      "name": "Portugal",
      "sourceName": "portugal",
      "flagCode": "pt",
      "emoji": "🇵🇹"
    },
    "away": {
      "name": "República Dem. del Congo",
      "sourceName": "r d congo",
      "flagCode": "cd",
      "emoji": "🇨🇩"
    },
    "crDate": "2026-06-17",
    "crDateLabel": "17 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660
  },
  {
    "id": "M062",
    "number": 62,
    "group": "K",
    "date": "2026-06-17",
    "dateLabel": "17 jun 2026",
    "home": {
      "name": "Uzbekistán",
      "sourceName": "uzbekistán",
      "flagCode": "uz",
      "emoji": "🇺🇿"
    },
    "away": {
      "name": "Colombia",
      "sourceName": "colombia",
      "flagCode": "co",
      "emoji": "🇨🇴"
    },
    "crDate": "2026-06-17",
    "crDateLabel": "17 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M063",
    "number": 63,
    "group": "K",
    "date": "2026-06-23",
    "dateLabel": "23 jun 2026",
    "home": {
      "name": "Portugal",
      "sourceName": "portugal",
      "flagCode": "pt",
      "emoji": "🇵🇹"
    },
    "away": {
      "name": "Uzbekistán",
      "sourceName": "uzbekistán",
      "flagCode": "uz",
      "emoji": "🇺🇿"
    },
    "crDate": "2026-06-23",
    "crDateLabel": "23 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660
  },
  {
    "id": "M064",
    "number": 64,
    "group": "K",
    "date": "2026-06-23",
    "dateLabel": "23 jun 2026",
    "home": {
      "name": "Colombia",
      "sourceName": "colombia",
      "flagCode": "co",
      "emoji": "🇨🇴"
    },
    "away": {
      "name": "República Dem. del Congo",
      "sourceName": "r d congo",
      "flagCode": "cd",
      "emoji": "🇨🇩"
    },
    "crDate": "2026-06-23",
    "crDateLabel": "23 jun 2026",
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
  },
  {
    "id": "M065",
    "number": 65,
    "group": "K",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "Colombia",
      "sourceName": "colombia",
      "flagCode": "co",
      "emoji": "🇨🇴"
    },
    "away": {
      "name": "Portugal",
      "sourceName": "portugal",
      "flagCode": "pt",
      "emoji": "🇵🇹"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "5:30 p.m.",
    "crTimeMinutes": 1050
  },
  {
    "id": "M066",
    "number": 66,
    "group": "K",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "República Dem. del Congo",
      "sourceName": "r d congo",
      "flagCode": "cd",
      "emoji": "🇨🇩"
    },
    "away": {
      "name": "Uzbekistán",
      "sourceName": "uzbekistán",
      "flagCode": "uz",
      "emoji": "🇺🇿"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "5:30 p.m.",
    "crTimeMinutes": 1050
  },
  {
    "id": "M067",
    "number": 67,
    "group": "L",
    "date": "2026-06-17",
    "dateLabel": "17 jun 2026",
    "home": {
      "name": "Inglaterra",
      "sourceName": "inglaterra",
      "flagCode": "gb-eng",
      "emoji": "🏳"
    },
    "away": {
      "name": "Croacia",
      "sourceName": "croacia",
      "flagCode": "hr",
      "emoji": "🇭🇷"
    },
    "crDate": "2026-06-17",
    "crDateLabel": "17 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M068",
    "number": 68,
    "group": "L",
    "date": "2026-06-17",
    "dateLabel": "17 jun 2026",
    "home": {
      "name": "Ghana",
      "sourceName": "ghana",
      "flagCode": "gh",
      "emoji": "🇬🇭"
    },
    "away": {
      "name": "Panamá",
      "sourceName": "panamá",
      "flagCode": "pa",
      "emoji": "🇵🇦"
    },
    "crDate": "2026-06-17",
    "crDateLabel": "17 jun 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
  },
  {
    "id": "M069",
    "number": 69,
    "group": "L",
    "date": "2026-06-23",
    "dateLabel": "23 jun 2026",
    "home": {
      "name": "Inglaterra",
      "sourceName": "inglaterra",
      "flagCode": "gb-eng",
      "emoji": "🏳"
    },
    "away": {
      "name": "Ghana",
      "sourceName": "ghana",
      "flagCode": "gh",
      "emoji": "🇬🇭"
    },
    "crDate": "2026-06-23",
    "crDateLabel": "23 jun 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840
  },
  {
    "id": "M070",
    "number": 70,
    "group": "L",
    "date": "2026-06-23",
    "dateLabel": "23 jun 2026",
    "home": {
      "name": "Panamá",
      "sourceName": "panamá",
      "flagCode": "pa",
      "emoji": "🇵🇦"
    },
    "away": {
      "name": "Croacia",
      "sourceName": "croacia",
      "flagCode": "hr",
      "emoji": "🇭🇷"
    },
    "crDate": "2026-06-23",
    "crDateLabel": "23 jun 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
  },
  {
    "id": "M071",
    "number": 71,
    "group": "L",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "Panamá",
      "sourceName": "panamá",
      "flagCode": "pa",
      "emoji": "🇵🇦"
    },
    "away": {
      "name": "Inglaterra",
      "sourceName": "inglaterra",
      "flagCode": "gb-eng",
      "emoji": "🏳"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
  },
  {
    "id": "M072",
    "number": 72,
    "group": "L",
    "date": "2026-06-27",
    "dateLabel": "27 jun 2026",
    "home": {
      "name": "Croacia",
      "sourceName": "croacia",
      "flagCode": "hr",
      "emoji": "🇭🇷"
    },
    "away": {
      "name": "Ghana",
      "sourceName": "ghana",
      "flagCode": "gh",
      "emoji": "🇬🇭"
    },
    "crDate": "2026-06-27",
    "crDateLabel": "27 jun 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
  }
];
const ROUND_OF_32_FALLBACK_MATCHES = [
  {
    "id": "R32-01",
    "number": 1,
    "stage": "LAST_32",
    "crDate": "2026-06-28",
    "crDateLabel": "28 jun 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "Sudáfrica",
      "flagCode": "za"
    },
    "away": {
      "name": "Canadá",
      "flagCode": "ca"
    }
  },
  {
    "id": "R32-02",
    "number": 2,
    "stage": "LAST_32",
    "crDate": "2026-06-29",
    "crDateLabel": "29 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660,
    "home": {
      "name": "Brasil",
      "flagCode": "br"
    },
    "away": {
      "name": "Japón",
      "flagCode": "jp"
    }
  },
  {
    "id": "R32-03",
    "number": 3,
    "stage": "LAST_32",
    "crDate": "2026-06-29",
    "crDateLabel": "29 jun 2026",
    "crTime": "2:30 p.m.",
    "crTimeMinutes": 870,
    "home": {
      "name": "Alemania",
      "flagCode": "de"
    },
    "away": {
      "name": "Paraguay",
      "flagCode": "py"
    }
  },
  {
    "id": "R32-04",
    "number": 4,
    "stage": "LAST_32",
    "crDate": "2026-06-29",
    "crDateLabel": "29 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140,
    "home": {
      "name": "Países Bajos",
      "flagCode": "nl"
    },
    "away": {
      "name": "Marruecos",
      "flagCode": "ma"
    }
  },
  {
    "id": "R32-05",
    "number": 5,
    "stage": "LAST_32",
    "crDate": "2026-06-30",
    "crDateLabel": "30 jun 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660,
    "home": {
      "name": "Costa de Marfil",
      "flagCode": "ci"
    },
    "away": {
      "name": "Noruega",
      "flagCode": "no"
    }
  },
  {
    "id": "R32-06",
    "number": 6,
    "stage": "LAST_32",
    "crDate": "2026-06-30",
    "crDateLabel": "30 jun 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900,
    "home": {
      "name": "Francia",
      "flagCode": "fr"
    },
    "away": {
      "name": "Suecia",
      "flagCode": "se"
    }
  },
  {
    "id": "R32-07",
    "number": 7,
    "stage": "LAST_32",
    "crDate": "2026-06-30",
    "crDateLabel": "30 jun 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140,
    "home": {
      "name": "México",
      "flagCode": "mx"
    },
    "away": {
      "name": "Ecuador",
      "flagCode": "ec"
    }
  },
  {
    "id": "R32-08",
    "number": 8,
    "stage": "LAST_32",
    "crDate": "2026-07-01",
    "crDateLabel": "1 jul 2026",
    "crTime": "10:00 a.m.",
    "crTimeMinutes": 600,
    "home": {
      "name": "Inglaterra",
      "flagCode": "gb-eng"
    },
    "away": {
      "name": "República Dem. del Congo",
      "flagCode": "cd"
    }
  },
  {
    "id": "R32-09",
    "number": 9,
    "stage": "LAST_32",
    "crDate": "2026-07-01",
    "crDateLabel": "1 jul 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840,
    "home": {
      "name": "Bélgica",
      "flagCode": "be"
    },
    "away": {
      "name": "Senegal",
      "flagCode": "sn"
    }
  },
  {
    "id": "R32-10",
    "number": 10,
    "stage": "LAST_32",
    "crDate": "2026-07-01",
    "crDateLabel": "1 jul 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080,
    "home": {
      "name": "Estados Unidos",
      "flagCode": "us"
    },
    "away": {
      "name": "Bosnia y Herzegovina",
      "flagCode": "ba"
    }
  },
  {
    "id": "R32-11",
    "number": 11,
    "stage": "LAST_32",
    "crDate": "2026-07-02",
    "crDateLabel": "2 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "España",
      "flagCode": "es"
    },
    "away": {
      "name": "Austria",
      "flagCode": "at"
    }
  },
  {
    "id": "R32-12",
    "number": 12,
    "stage": "LAST_32",
    "crDate": "2026-07-02",
    "crDateLabel": "2 jul 2026",
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020,
    "home": {
      "name": "Portugal",
      "flagCode": "pt"
    },
    "away": {
      "name": "Croacia",
      "flagCode": "hr"
    }
  },
  {
    "id": "R32-13",
    "number": 13,
    "stage": "LAST_32",
    "crDate": "2026-07-02",
    "crDateLabel": "2 jul 2026",
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260,
    "home": {
      "name": "Suiza",
      "flagCode": "ch"
    },
    "away": {
      "name": "Argelia",
      "flagCode": "dz"
    }
  },
  {
    "id": "R32-14",
    "number": 14,
    "stage": "LAST_32",
    "crDate": "2026-07-03",
    "crDateLabel": "3 jul 2026",
    "crTime": "12:00 p.m.",
    "crTimeMinutes": 720,
    "home": {
      "name": "Australia",
      "flagCode": "au"
    },
    "away": {
      "name": "Egipto",
      "flagCode": "eg"
    }
  },
  {
    "id": "R32-15",
    "number": 15,
    "stage": "LAST_32",
    "crDate": "2026-07-03",
    "crDateLabel": "3 jul 2026",
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960,
    "home": {
      "name": "Argentina",
      "flagCode": "ar"
    },
    "away": {
      "name": "Cabo Verde",
      "flagCode": "cv"
    }
  },
  {
    "id": "R32-16",
    "number": 16,
    "stage": "LAST_32",
    "crDate": "2026-07-03",
    "crDateLabel": "3 jul 2026",
    "crTime": "7:30 p.m.",
    "crTimeMinutes": 1170,
    "home": {
      "name": "Colombia",
      "flagCode": "co"
    },
    "away": {
      "name": "Ghana",
      "flagCode": "gh"
    }
  }
];
const OCTAVOS_CLOSE_AT_UTC_MS = Date.UTC(2026, 6, 4, 17, 0, 0);
const OCTAVOS_CLOSE_LABEL = "4 de julio de 2026, 11:00 a.m. hora Costa Rica";
const OCTAVOS_FALLBACK_MATCHES = [
  {
    "id": "OCT-01",
    "number": 1,
    "stage": "LAST_16",
    "crDate": "2026-07-04",
    "crDateLabel": "4 jul 2026",
    "crTime": "11:00 a.m.",
    "crTimeMinutes": 660,
    "home": {
      "name": "Canadá",
      "flagCode": "ca"
    },
    "away": {
      "name": "Marruecos",
      "flagCode": "ma"
    }
  },
  {
    "id": "OCT-02",
    "number": 2,
    "stage": "LAST_16",
    "crDate": "2026-07-04",
    "crDateLabel": "4 jul 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900,
    "home": {
      "name": "Paraguay",
      "flagCode": "py"
    },
    "away": {
      "name": "Francia",
      "flagCode": "fr"
    }
  },
  {
    "id": "OCT-03",
    "number": 3,
    "stage": "LAST_16",
    "crDate": "2026-07-05",
    "crDateLabel": "5 jul 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840,
    "home": {
      "name": "Brasil",
      "flagCode": "br"
    },
    "away": {
      "name": "Noruega",
      "flagCode": "no"
    }
  },
  {
    "id": "OCT-04",
    "number": 4,
    "stage": "LAST_16",
    "crDate": "2026-07-05",
    "crDateLabel": "5 jul 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080,
    "home": {
      "name": "México",
      "flagCode": "mx"
    },
    "away": {
      "name": "Inglaterra",
      "flagCode": "gb-eng"
    }
  },
  {
    "id": "OCT-05",
    "number": 5,
    "stage": "LAST_16",
    "crDate": "2026-07-06",
    "crDateLabel": "6 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "Portugal",
      "flagCode": "pt"
    },
    "away": {
      "name": "España",
      "flagCode": "es"
    }
  },
  {
    "id": "OCT-06",
    "number": 6,
    "stage": "LAST_16",
    "crDate": "2026-07-06",
    "crDateLabel": "6 jul 2026",
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080,
    "home": {
      "name": "Estados Unidos",
      "flagCode": "us"
    },
    "away": {
      "name": "Bélgica",
      "flagCode": "be"
    }
  },
  {
    "id": "OCT-07",
    "number": 7,
    "stage": "LAST_16",
    "crDate": "2026-07-07",
    "crDateLabel": "7 jul 2026",
    "crTime": "10:00 a.m.",
    "crTimeMinutes": 600,
    "home": {
      "name": "Argentina",
      "flagCode": "ar"
    },
    "away": {
      "name": "Egipto",
      "flagCode": "eg"
    }
  },
  {
    "id": "OCT-08",
    "number": 8,
    "stage": "LAST_16",
    "crDate": "2026-07-07",
    "crDateLabel": "7 jul 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840,
    "home": {
      "name": "Suiza",
      "flagCode": "ch"
    },
    "away": {
      "name": "Colombia",
      "flagCode": "co"
    }
  }
];
const QUARTERFINALS_CLOSE_AT_UTC_MS = Date.UTC(2026, 6, 9, 20, 0, 0);
const QUARTERFINALS_CLOSE_LABEL = "9 de julio de 2026, 2:00 p.m. hora Costa Rica";
const QUARTERFINALS_FALLBACK_MATCHES = [
  {
    "id": "QF-01",
    "number": 1,
    "stage": "QUARTER_FINALS",
    "crDate": "2026-07-09",
    "crDateLabel": "9 jul 2026",
    "crTime": "2:00 p.m.",
    "crTimeMinutes": 840,
    "home": {
      "name": "Francia",
      "flagCode": "fr"
    },
    "away": {
      "name": "Marruecos",
      "flagCode": "ma"
    }
  },
  {
    "id": "QF-02",
    "number": 2,
    "stage": "QUARTER_FINALS",
    "crDate": "2026-07-10",
    "crDateLabel": "10 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "España",
      "flagCode": "es"
    },
    "away": {
      "name": "Bélgica",
      "flagCode": "be"
    }
  },
  {
    "id": "QF-03",
    "number": 3,
    "stage": "QUARTER_FINALS",
    "crDate": "2026-07-11",
    "crDateLabel": "11 jul 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900,
    "home": {
      "name": "Noruega",
      "flagCode": "no"
    },
    "away": {
      "name": "Inglaterra",
      "flagCode": "gb-eng"
    }
  },
  {
    "id": "QF-04",
    "number": 4,
    "stage": "QUARTER_FINALS",
    "crDate": "2026-07-11",
    "crDateLabel": "11 jul 2026",
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140,
    "home": {
      "name": "Argentina",
      "flagCode": "ar"
    },
    "away": {
      "name": "Suiza",
      "flagCode": "ch"
    }
  }
];
const FINAL_PHASE_CLOSE_AT_UTC_MS = Date.UTC(2026, 6, 14, 19, 0, 0);
const FINAL_PHASE_CLOSE_LABEL = "14 de julio de 2026, 1:00 p.m. hora Costa Rica";
const FINAL_PHASE_FALLBACK_MATCHES = [
  {
    "id": "FP-01",
    "number": 1,
    "stage": "SEMI_FINALS",
    "phaseLabel": "Semifinales",
    "crDate": "2026-07-14",
    "crDateLabel": "14 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "Francia",
      "flagCode": "fr"
    },
    "away": {
      "name": "España",
      "flagCode": "es"
    }
  },
  {
    "id": "FP-02",
    "number": 2,
    "stage": "SEMI_FINALS",
    "phaseLabel": "Semifinales",
    "crDate": "2026-07-15",
    "crDateLabel": "15 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "Inglaterra",
      "flagCode": "gb-eng"
    },
    "away": {
      "name": "Argentina",
      "flagCode": "ar"
    }
  },
  {
    "id": "FP-03",
    "number": 3,
    "stage": "THIRD_PLACE",
    "phaseLabel": "Tercer lugar",
    "crDate": "2026-07-18",
    "crDateLabel": "18 jul 2026",
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900,
    "home": {
      "name": "Perdedor semifinal 1",
      "flagCode": ""
    },
    "away": {
      "name": "Perdedor semifinal 2",
      "flagCode": ""
    }
  },
  {
    "id": "FP-04",
    "number": 4,
    "stage": "FINAL",
    "phaseLabel": "Final",
    "crDate": "2026-07-19",
    "crDateLabel": "19 jul 2026",
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780,
    "home": {
      "name": "Ganador semifinal 1",
      "flagCode": ""
    },
    "away": {
      "name": "Ganador semifinal 2",
      "flagCode": ""
    }
  }
];

function doGet(e) {
  const action = e && e.parameter ? e.parameter.action : "";
  if (action === "publicData") {
    return respond_(e, getPublicData_());
  }

  if (action === "predictionsData") {
    return respond_(e, getPredictionsData_());
  }

  if (action === "predictionsExportData") {
    return respond_(e, getPredictionsExportData_());
  }

  if (action === "roundOf32FormData") {
    return respond_(e, getRoundOf32FormData_());
  }

  if (action === "submitRoundOf32") {
    return handleRoundOf32Submission_(e);
  }

  if (action === "octavosFormData") {
    return respond_(e, getOctavosFormData_());
  }

  if (action === "submitOctavos") {
    return handleOctavosSubmission_(e);
  }

  if (action === "quarterfinalsFormData") {
    return respond_(e, getQuarterfinalsFormData_());
  }

  if (action === "submitQuarterfinals") {
    return handleQuarterfinalsSubmission_(e);
  }

  if (action === "finalPhaseFormData") {
    return respond_(e, getFinalPhaseFormData_());
  }

  if (action === "submitFinalPhase") {
    return handleFinalPhaseSubmission_(e);
  }

  if (action === "refreshData") {
    return respond_(e, refreshPublicData_());
  }

  if (action === "syncResults") {
    return respond_(e, syncFootballDataFromWeb_(e));
  }

  if (e && e.parameter && e.parameter.payload) {
    return handleSubmission_(e, true);
  }

  return ContentService
    .createTextOutput("Endpoint activo para Quiniela Mundial 2026")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  return handleSubmission_(e, false);
}

function getSpreadsheet_() {
  const active = SpreadsheetApp.getActiveSpreadsheet();
  if (active) return active;
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function installFootballDataTrigger() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === "syncFootballData") {
      ScriptApp.deleteTrigger(trigger);
    }
  });
  ScriptApp.newTrigger("syncFootballData").timeBased().everyMinutes(5).create();
  return { ok: true, message: "Trigger instalado cada 5 minutos." };
}

function checkFootballDataSetup() {
  const token = getFootballDataToken_();
  return {
    ok: Boolean(token),
    tokenConfigured: Boolean(token),
    triggerInstalled: ScriptApp.getProjectTriggers().some(function(trigger) {
      return trigger.getHandlerFunction() === "syncFootballData";
    }),
  };
}

function diagnosticoQuiniela() {
  const ss = getSpreadsheet_();
  const sheetNames = ss.getSheets().map(function(sheet) {
    return sheet.getName();
  });
  const result = {
    ok: true,
    configuredSpreadsheetId: SPREADSHEET_ID,
    activeSpreadsheetId: ss.getId(),
    spreadsheetUrl: ss.getUrl(),
    sheets: sheetNames,
    tokenConfigured: Boolean(getFootballDataToken_()),
  };
  Logger.log(JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  writeDiagnosticSheet_(ss, result);
  return result;
}

function setupQuinielaSheets() {
  const ss = getSpreadsheet_();
  const matches = normalizePayload_({
    name: "Sistema",
    email: "sistema@quiniela.local",
    picks: {},
  }).matches;

  setupMatchesSheet_(ss, matches);

  const resultsSheet = ss.getSheetByName(RESULTS_SHEET);
  if (!resultsSheet || resultsSheet.getLastRow() === 0) {
    writeResults_(ss, buildResults_([]));
  }

  const rankingSheet = ss.getSheetByName(RANKING_SHEET);
  if (!rankingSheet || rankingSheet.getLastRow() === 0) {
    writeRanking_(ss, []);
  }

  setupRoundOf32MatchesSheet_(ss, cloneRoundOf32FallbackMatches_());
  setupRoundOf32ResponsesSheet_(ss);
  const roundResultsSheet = ss.getSheetByName(ROUND_OF_32_RESULTS_SHEET);
  if (!roundResultsSheet || roundResultsSheet.getLastRow() === 0) {
    writeRoundOf32Results_(ss, buildRoundOf32Results_(cloneRoundOf32FallbackMatches_(), []));
  }
  if (!ss.getSheetByName(ROUND_OF_32_RANKING_SHEET)) writeExtendedRanking_(ss, ROUND_OF_32_RANKING_SHEET, []);
  if (!ss.getSheetByName(CUMULATIVE_RANKING_SHEET)) writeExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET, []);

  setupOctavosMatchesSheet_(ss, cloneOctavosFallbackMatches_());
  setupOctavosResponsesSheet_(ss);
  if (!ss.getSheetByName(OCTAVOS_RESULTS_SHEET)) writeResultsToSheet_(ss, OCTAVOS_RESULTS_SHEET, []);
  if (!ss.getSheetByName(OCTAVOS_RANKING_SHEET)) writeExtendedRanking_(ss, OCTAVOS_RANKING_SHEET, []);

  setupQuarterfinalsMatchesSheet_(ss, cloneQuarterfinalsFallbackMatches_());
  setupQuarterfinalsResponsesSheet_(ss);
  if (!ss.getSheetByName(QUARTERFINALS_RESULTS_SHEET)) writeResultsToSheet_(ss, QUARTERFINALS_RESULTS_SHEET, []);
  if (!ss.getSheetByName(QUARTERFINALS_RANKING_SHEET)) writeExtendedRanking_(ss, QUARTERFINALS_RANKING_SHEET, []);

  setupFinalPhaseMatchesSheet_(ss, cloneFinalPhaseFallbackMatches_());
  setupFinalPhaseResponsesSheet_(ss);
  if (!ss.getSheetByName(FINAL_PHASE_RESULTS_SHEET)) writeResultsToSheet_(ss, FINAL_PHASE_RESULTS_SHEET, []);
  if (!ss.getSheetByName(FINAL_PHASE_RANKING_SHEET)) writeExtendedRanking_(ss, FINAL_PHASE_RANKING_SHEET, []);

  const apiStateSheet = ss.getSheetByName(API_STATE_SHEET);
  if (!apiStateSheet || apiStateSheet.getLastRow() === 0) {
    writeApiState_(ss, {
      updatedAt: new Date().toISOString(),
      httpStatus: "",
      requestsAvailable: "",
      requestCounterReset: "",
      apiVersion: "",
      authenticatedClient: "",
      message: "Pendiente de sincronizar football-data.org",
    });
  }

  const result = {
    ok: true,
    message: "Hojas preparadas.",
    configuredSpreadsheetId: SPREADSHEET_ID,
    activeSpreadsheetId: ss.getId(),
    spreadsheetUrl: ss.getUrl(),
    existingSheets: ss.getSheets().map(function(sheet) {
      return sheet.getName();
    }),
    sheets: [MATCHES_SHEET, RESULTS_SHEET, RANKING_SHEET, ROUND_OF_32_RESPONSES_SHEET, ROUND_OF_32_MATCHES_SHEET, ROUND_OF_32_RESULTS_SHEET, ROUND_OF_32_RANKING_SHEET, CUMULATIVE_RANKING_SHEET, OCTAVOS_RESPONSES_SHEET, OCTAVOS_MATCHES_SHEET, OCTAVOS_RESULTS_SHEET, OCTAVOS_RANKING_SHEET, QUARTERFINALS_RESPONSES_SHEET, QUARTERFINALS_MATCHES_SHEET, QUARTERFINALS_RESULTS_SHEET, QUARTERFINALS_RANKING_SHEET, FINAL_PHASE_RESPONSES_SHEET, FINAL_PHASE_MATCHES_SHEET, FINAL_PHASE_RESULTS_SHEET, FINAL_PHASE_RANKING_SHEET, API_STATE_SHEET],
  };
  writeDiagnosticSheet_(ss, result);

  return {
    ok: result.ok,
    message: result.message,
    configuredSpreadsheetId: result.configuredSpreadsheetId,
    activeSpreadsheetId: result.activeSpreadsheetId,
    spreadsheetUrl: result.spreadsheetUrl,
    existingSheets: result.existingSheets,
    sheets: result.sheets,
  };
}

function syncFootballDataFromWeb_(e) {
  const expectedSecret = PropertiesService.getScriptProperties().getProperty(SYNC_SECRET_PROPERTY);
  const providedSecret = e && e.parameter ? e.parameter.secret : "";
  if (!expectedSecret || providedSecret !== expectedSecret) {
    return { ok: false, error: "No autorizado. Configura SYNC_SECRET si necesitas sincronizar desde URL." };
  }
  return syncFootballData();
}

function syncFootballData() {
  const lock = LockService.getScriptLock();
  let ss;

  try {
    lock.waitLock(30000);
    ss = getSpreadsheet_();
    setupMatchesSheet_(ss, normalizePayload_({ name: "Sistema", email: "sistema@quiniela.local", picks: {} }).matches);

    const apiResponse = fetchFootballData_();
    const previousResults = readResults_(ss);
    const freshResults = buildResults_(apiResponse.matches);
    const results = mergeResults_(freshResults, previousResults);
    writeResults_(ss, results);
    const ranking = rebuildRanking_(ss, results);

    const roundMatches = buildRoundOf32Matches_(apiResponse.matches);
    setupRoundOf32MatchesSheet_(ss, roundMatches);
    const previousRoundResults = readRoundOf32Results_(ss);
    const freshRoundResults = buildRoundOf32Results_(roundMatches, apiResponse.matches);
    const roundResults = mergeResults_(freshRoundResults, previousRoundResults);
    writeRoundOf32Results_(ss, roundResults);
    const roundRankings = rebuildRoundOf32Rankings_(ss, roundResults);

    const octavosMatches = cloneOctavosFallbackMatches_();
    setupOctavosMatchesSheet_(ss, octavosMatches);
    const previousOctavosResults = readResultsFromSheet_(ss, OCTAVOS_RESULTS_SHEET);
    const freshOctavosResults = buildOctavosResults_(octavosMatches, apiResponse.matches);
    const octavosResults = mergeResults_(freshOctavosResults, previousOctavosResults);
    writeResultsToSheet_(ss, OCTAVOS_RESULTS_SHEET, octavosResults);
    const octavosRankings = rebuildOctavosRankings_(ss, octavosResults, roundRankings.cumulative);

    const quarterfinalsMatches = cloneQuarterfinalsFallbackMatches_();
    setupQuarterfinalsMatchesSheet_(ss, quarterfinalsMatches);
    const previousQuarterfinalsResults = readResultsFromSheet_(ss, QUARTERFINALS_RESULTS_SHEET);
    const freshQuarterfinalsResults = buildQuarterfinalsResults_(quarterfinalsMatches, apiResponse.matches);
    const quarterfinalsResults = mergeResults_(freshQuarterfinalsResults, previousQuarterfinalsResults);
    writeResultsToSheet_(ss, QUARTERFINALS_RESULTS_SHEET, quarterfinalsResults);
    const quarterfinalsRankings = rebuildQuarterfinalsRankings_(ss, quarterfinalsResults, octavosRankings.cumulative);

    const finalPhaseMatches = cloneFinalPhaseFallbackMatches_();
    setupFinalPhaseMatchesSheet_(ss, finalPhaseMatches);
    const previousFinalPhaseResults = readResultsFromSheet_(ss, FINAL_PHASE_RESULTS_SHEET);
    const freshFinalPhaseResults = buildFinalPhaseResults_(finalPhaseMatches, apiResponse.matches);
    const finalPhaseResults = mergeResults_(freshFinalPhaseResults, previousFinalPhaseResults);
    writeResultsToSheet_(ss, FINAL_PHASE_RESULTS_SHEET, finalPhaseResults);
    const finalPhaseRankings = rebuildFinalPhaseRankings_(ss, finalPhaseResults, quarterfinalsRankings.cumulative);
    writeCachedPayload_(ROUND_OF_32_MATCHES_CACHE_KEY, { matches: roundMatches }, 300);
    writeApiState_(ss, apiResponse.apiState);
    clearDataCaches_();

    return {
      ok: true,
      syncedAt: apiResponse.apiState.updatedAt,
      results: results.length,
      preservedResults: countPreservedResults_(freshResults, results),
      ranking: ranking.length,
      roundOf32Results: roundResults.length,
      roundOf32Ranking: roundRankings.phase.length,
      octavosResults: octavosResults.length,
      octavosRanking: octavosRankings.phase.length,
      quarterfinalsResults: quarterfinalsResults.length,
      quarterfinalsRanking: quarterfinalsRankings.phase.length,
      finalPhaseResults: finalPhaseResults.length,
      finalPhaseRanking: finalPhaseRankings.phase.length,
      cumulativeRanking: finalPhaseRankings.cumulative.length,
      apiState: apiResponse.apiState,
    };
  } catch (error) {
    const apiState = error && error.apiState ? error.apiState : {
      updatedAt: new Date().toISOString(),
      httpStatus: "",
      requestsAvailable: "",
      requestCounterReset: "",
      apiVersion: "",
      authenticatedClient: "",
      message: String(error && error.message ? error.message : error),
    };
    try {
      ss = ss || getSpreadsheet_();
      writeApiState_(ss, apiState);
    } catch (ignore) {}

    return { ok: false, error: String(error && error.message ? error.message : error), apiState: apiState };
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }
}

function getPublicData_() {
  const cached = readCachedPayload_(PUBLIC_DATA_CACHE_KEY);
  if (cached) return cached;

  const ss = getSpreadsheet_();
  const cumulativeRanking = readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET);
  const finalPhaseRanking = readExtendedRanking_(ss, FINAL_PHASE_RANKING_SHEET);
  const payload = {
    ok: true,
    generatedAt: new Date().toISOString(),
    results: [],
    ranking: cumulativeRanking.length ? cumulativeRanking : readRanking_(ss),
    roundOf32: { matches: [], results: [] },
    octavos: {
      matches: cloneOctavosFallbackMatches_(),
      results: readResultsFromSheet_(ss, OCTAVOS_RESULTS_SHEET),
    },
    quarterfinals: {
      matches: cloneQuarterfinalsFallbackMatches_(),
      results: readResultsFromSheet_(ss, QUARTERFINALS_RESULTS_SHEET),
    },
    finalPhaseRanking: finalPhaseRanking,
    finalPhase: {
      matches: cloneFinalPhaseFallbackMatches_(),
      results: readResultsFromSheet_(ss, FINAL_PHASE_RESULTS_SHEET),
    },
    apiState: readApiState_(ss),
  };
  writeCachedPayload_(PUBLIC_DATA_CACHE_KEY, payload, currentPayloadCacheSeconds_());
  return payload;
}

function maybeSyncFootballDataForPublic_(ss) {
  const results = readResults_(ss);
  const apiState = readApiState_(ss);
  const liveWindow = hasLiveMatchWindow_();
  const maxAgeMinutes = liveWindow ? LIVE_SYNC_MAX_AGE_MINUTES : STANDARD_SYNC_MAX_AGE_MINUTES;
  const cacheSeconds = liveWindow ? LIVE_SYNC_CACHE_SECONDS : STANDARD_SYNC_CACHE_SECONDS;
  const shouldSync = results.length === 0 || !apiState || !apiState.updatedAt || isApiStateStale_(apiState.updatedAt, maxAgeMinutes);
  if (!shouldSync) return;

  const cache = CacheService.getScriptCache();
  if (cache.get(PUBLIC_SYNC_CACHE_KEY)) return;
  cache.put(PUBLIC_SYNC_CACHE_KEY, "1", cacheSeconds);

  try {
    syncFootballData();
  } catch (ignore) {}
}

function refreshPublicData_() {
  const ss = getSpreadsheet_();
  maybeSyncFootballDataForPublic_(ss);
  return { ok: true, generatedAt: new Date().toISOString() };
}

function hasLiveMatchWindow_() {
  const now = nowInCostaRica_();
  return MATCHES.concat(ROUND_OF_32_FALLBACK_MATCHES, OCTAVOS_FALLBACK_MATCHES, QUARTERFINALS_FALLBACK_MATCHES, FINAL_PHASE_FALLBACK_MATCHES).some(function(match) {
    return match.crDate === now.date &&
      now.minutes >= match.crTimeMinutes &&
      now.minutes <= match.crTimeMinutes + 130;
  });
}

function nowInCostaRica_() {
  const now = new Date();
  const date = Utilities.formatDate(now, CR_TIME_ZONE, "yyyy-MM-dd");
  const hour = Number(Utilities.formatDate(now, CR_TIME_ZONE, "H"));
  const minute = Number(Utilities.formatDate(now, CR_TIME_ZONE, "m"));
  return {
    date: date,
    minutes: hour * 60 + minute,
  };
}

function isApiStateStale_(value, maxAgeMinutes) {
  if (!value) return true;
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return true;
  return new Date().getTime() - date.getTime() > maxAgeMinutes * 60 * 1000;
}

function currentPayloadCacheSeconds_() {
  return hasLiveMatchWindow_() ? LIVE_PAYLOAD_CACHE_SECONDS : STANDARD_PAYLOAD_CACHE_SECONDS;
}

function readCachedPayload_(key) {
  try {
    const cache = CacheService.getScriptCache();
    const direct = cache.get(key);
    if (direct) return JSON.parse(direct);

    const metaText = cache.get(key + ":meta");
    if (!metaText) return null;

    const meta = JSON.parse(metaText);
    const chunkCount = Number(meta.chunks || 0);
    if (!chunkCount || chunkCount > CACHE_MAX_CHUNKS) return null;

    const chunkKeys = [];
    for (let i = 0; i < chunkCount; i += 1) {
      chunkKeys.push(key + ":chunk:" + i);
    }
    const chunks = cache.getAll(chunkKeys);
    let text = "";
    for (let j = 0; j < chunkKeys.length; j += 1) {
      const chunk = chunks[chunkKeys[j]];
      if (chunk === undefined || chunk === null) return null;
      text += chunk;
    }
    return JSON.parse(text);
  } catch (ignore) {
    return null;
  }
}

function writeCachedPayload_(key, value, seconds) {
  try {
    const text = JSON.stringify(value);
    const cache = CacheService.getScriptCache();
    clearCachedPayload_(key);

    if (text.length <= CACHE_CHUNK_SIZE) {
      cache.put(key, text, seconds);
      return;
    }

    const chunkCount = Math.ceil(text.length / CACHE_CHUNK_SIZE);
    if (chunkCount > CACHE_MAX_CHUNKS) return;

    const payload = {};
    for (let i = 0; i < chunkCount; i += 1) {
      payload[key + ":chunk:" + i] = text.slice(i * CACHE_CHUNK_SIZE, (i + 1) * CACHE_CHUNK_SIZE);
    }
    payload[key + ":meta"] = JSON.stringify({ chunks: chunkCount });
    cache.putAll(payload, seconds);
  } catch (ignore) {}
}

function clearDataCaches_() {
  clearCachedPayload_(PUBLIC_DATA_CACHE_KEY);
  clearCachedPayload_(PREDICTIONS_DATA_CACHE_KEY);
}

function clearCachedPayload_(key) {
  try {
    const cache = CacheService.getScriptCache();
    const keys = [key, key + ":meta"];
    for (let i = 0; i < CACHE_MAX_CHUNKS; i += 1) {
      keys.push(key + ":chunk:" + i);
    }
    cache.removeAll(keys);
  } catch (ignore) {}
}

function getPredictionsData_() {
  const cached = readCachedPayload_(PREDICTIONS_DATA_CACHE_KEY);
  if (cached) return cached;

  const ss = getSpreadsheet_();
  const participantProfiles = readParticipantProfiles_(ss);
  const finalPhaseParticipants = readFinalPhaseParticipants_(ss);
  enrichRoundParticipants_(finalPhaseParticipants, participantProfiles);
  const finalPhaseMatches = cloneFinalPhaseFallbackMatches_();
  const finalPhaseResults = readResultsFromSheet_(ss, FINAL_PHASE_RESULTS_SHEET);
  const maxVisibleParticipants = 16;
  const payload = {
    ok: true,
    generatedAt: new Date().toISOString(),
    matches: [],
    results: [],
    participants: [],
    totalParticipants: 0,
    hiddenParticipants: 0,
    maxVisibleParticipants: maxVisibleParticipants,
    finalPhase: {
      matches: finalPhaseMatches,
      results: finalPhaseResults,
      participants: finalPhaseParticipants.slice(0, maxVisibleParticipants),
      totalParticipants: finalPhaseParticipants.length,
      hiddenParticipants: Math.max(finalPhaseParticipants.length - maxVisibleParticipants, 0),
      ranking: readExtendedRanking_(ss, FINAL_PHASE_RANKING_SHEET),
      cumulativeRanking: readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET),
    },
  };
  writeCachedPayload_(PREDICTIONS_DATA_CACHE_KEY, payload, currentPayloadCacheSeconds_());
  return payload;
}

function enrichRoundParticipants_(roundParticipants, participants) {
  const originalParticipantByName = {};
  (participants || []).forEach(function(participant) {
    originalParticipantByName[normalizeParticipantName_(participant.name)] = participant;
  });
  (roundParticipants || []).forEach(function(participant) {
    const original = originalParticipantByName[normalizeParticipantName_(participant.name)] || {};
    participant.champion = original.champion || "Sin selección";
    participant.championFlagCode = original.championFlagCode || "";
  });
  return roundParticipants;
}

function getPredictionsExportData_() {
  const ss = getSpreadsheet_();
  maybeSyncFootballDataForPublic_(ss);
  const participants = readParticipants_(ss);
  const roundParticipants = readRoundOf32Participants_(ss);
  enrichRoundParticipants_(roundParticipants, participants);
  const octavosParticipants = readOctavosParticipants_(ss);
  enrichRoundParticipants_(octavosParticipants, participants);
  const quarterfinalsParticipants = readQuarterfinalsParticipants_(ss);
  enrichRoundParticipants_(quarterfinalsParticipants, participants);
  const finalPhaseParticipants = readFinalPhaseParticipants_(ss);
  enrichRoundParticipants_(finalPhaseParticipants, participants);
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    matches: MATCHES,
    results: readResults_(ss),
    participants: participants,
    totalParticipants: participants.length,
    roundOf32: {
      matches: readRoundOf32MatchesSheet_(ss),
      results: readRoundOf32Results_(ss),
      participants: roundParticipants,
      totalParticipants: roundParticipants.length,
      ranking: readExtendedRanking_(ss, ROUND_OF_32_RANKING_SHEET),
      cumulativeRanking: readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET),
    },
    octavos: {
      matches: cloneOctavosFallbackMatches_(),
      results: readResultsFromSheet_(ss, OCTAVOS_RESULTS_SHEET),
      participants: octavosParticipants,
      totalParticipants: octavosParticipants.length,
      ranking: readExtendedRanking_(ss, OCTAVOS_RANKING_SHEET),
      cumulativeRanking: readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET),
    },
    quarterfinals: {
      matches: cloneQuarterfinalsFallbackMatches_(),
      results: readResultsFromSheet_(ss, QUARTERFINALS_RESULTS_SHEET),
      participants: quarterfinalsParticipants,
      totalParticipants: quarterfinalsParticipants.length,
      ranking: readExtendedRanking_(ss, QUARTERFINALS_RANKING_SHEET),
      cumulativeRanking: readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET),
    },
    finalPhase: {
      matches: cloneFinalPhaseFallbackMatches_(),
      results: readResultsFromSheet_(ss, FINAL_PHASE_RESULTS_SHEET),
      participants: finalPhaseParticipants,
      totalParticipants: finalPhaseParticipants.length,
      ranking: readExtendedRanking_(ss, FINAL_PHASE_RANKING_SHEET),
      cumulativeRanking: readExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET),
    },
  };
}

function getRoundOf32FormData_() {
  const ss = getSpreadsheet_();
  const participants = readExistingParticipantNames_(ss);
  let matches = cloneRoundOf32FallbackMatches_();
  let source = "fallback";
  let message = "";

  try {
    matches = getRoundOf32Matches_();
    source = "football-data.org";
  } catch (error) {
    message = String(error && error.message ? error.message : error);
  }

  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    participants: participants,
    matches: matches,
    totalMatches: matches.length,
    closed: isRoundOf32FormClosed_(),
    closesAt: new Date(ROUND_OF_32_CLOSE_AT_UTC_MS).toISOString(),
    closeLabel: ROUND_OF_32_CLOSE_LABEL,
    source: source,
    message: message,
  };
}

function handleRoundOf32Submission_(e) {
  const lock = LockService.getScriptLock();
  let response;

  try {
    lock.waitLock(30000);
    if (isRoundOf32FormClosed_()) {
      throw new Error("La quiniela de dieciseisavos cerro el " + ROUND_OF_32_CLOSE_LABEL + ".");
    }

    const payload = parsePayload_(e);
    const ss = getSpreadsheet_();
    const participant = validateRoundOf32Participant_(ss, payload && payload.name);
    const matches = getRoundOf32Matches_();
    const picks = payload && payload.picks ? payload.picks : {};
    const selections = matches.map(function(match) {
      const pick = picks[match.id];
      if (["home", "draw", "away"].indexOf(pick) === -1) {
        throw new Error("Hay selecciones incompletas.");
      }
      return {
        id: match.id,
        apiId: match.apiId || "",
        number: match.number,
        stage: "LAST_32",
        crDate: match.crDate,
        crDateLabel: match.crDateLabel,
        crTime: match.crTime,
        crTimeMinutes: match.crTimeMinutes,
        home: match.home.name,
        away: match.away.name,
        pick: pick,
        pickLabel: getPickLabel_(match, pick),
      };
    });

    setupRoundOf32MatchesSheet_(ss, matches);
    upsertRoundOf32Response_(ss, participant.name, selections);
    rebuildRoundOf32Rankings_(ss, readRoundOf32Results_(ss));
    clearDataCaches_();
    clearCachedPayload_(ROUND_OF_32_FORM_CACHE_KEY);

    response = {
      ok: true,
      savedAt: new Date().toISOString(),
      updated: true,
      participant: participant.name,
    };
  } catch (error) {
    response = { ok: false, error: String(error && error.message ? error.message : error) };
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }

  return respond_(e, response);
}

function isRoundOf32FormClosed_() {
  return new Date().getTime() >= ROUND_OF_32_CLOSE_AT_UTC_MS;
}

function readExistingParticipantNames_(ss) {
  const participants = readParticipants_(ss);
  const seen = {};
  const names = [];
  participants.forEach(function(participant) {
    const name = String(participant.name || "").trim();
    const key = normalizeParticipantName_(name);
    if (!name || !key || seen[key]) return;
    seen[key] = true;
    names.push(name);
  });
  names.sort(function(a, b) { return a.localeCompare(b, "es"); });
  return names;
}

function validateRoundOf32Participant_(ss, requestedName) {
  const wanted = normalizeParticipantName_(requestedName);
  const names = readExistingParticipantNames_(ss);
  for (let i = 0; i < names.length; i += 1) {
    if (normalizeParticipantName_(names[i]) === wanted) return { name: names[i] };
  }
  throw new Error("Debes escoger un participante existente.");
}

function normalizeParticipantName_(value) {
  return normalizeTeamName_(value);
}

function getRoundOf32Matches_() {
  const cached = readCachedPayload_(ROUND_OF_32_MATCHES_CACHE_KEY);
  if (cached && Array.isArray(cached.matches) && cached.matches.length === 16) return cached.matches;

  const apiResponse = fetchFootballData_();
  const matches = buildRoundOf32Matches_(apiResponse.matches || []);
  if (matches.length !== 16) throw new Error("football-data.org aun no devolvio los 16 cruces de dieciseisavos.");
  writeCachedPayload_(ROUND_OF_32_MATCHES_CACHE_KEY, { matches: matches }, 300);
  return matches;
}

function buildRoundOf32Matches_(apiMatches) {
  const fallback = cloneRoundOf32FallbackMatches_();
  const roundApiMatches = (apiMatches || [])
    .filter(function(match) { return String(match.stage || "") === "LAST_32"; })
    .sort(function(a, b) { return String(a.utcDate || "").localeCompare(String(b.utcDate || "")); });

  roundApiMatches.forEach(function(apiMatch) {
    const mapped = roundOf32MatchFromApi_(apiMatch);
    let slot = fallback.findIndex(function(match) {
      return match.crDate === mapped.crDate && Number(match.crTimeMinutes) === Number(mapped.crTimeMinutes);
    });
    if (slot < 0) {
      slot = fallback.findIndex(function(match) { return !match.apiId; });
    }
    if (slot >= 0) {
      const confirmed = fallback[slot];
      fallback[slot] = Object.assign({}, confirmed, mapped, {
        home: preferDefinedRoundTeam_(mapped.home, confirmed.home),
        away: preferDefinedRoundTeam_(mapped.away, confirmed.away),
      });
    }
  });

  return fallback
    .sort(compareRoundOf32Matches_)
    .map(function(match, index) {
      return Object.assign({}, match, { id: "R32-" + String(index + 1).padStart(2, "0"), number: index + 1 });
    });
}

function preferDefinedRoundTeam_(apiTeam, confirmedTeam) {
  const name = normalizeTeamName_(apiTeam && apiTeam.name);
  const placeholders = ["", "a definir", "por definir", "tbd", "to be decided"];
  return placeholders.indexOf(name) === -1 ? apiTeam : (confirmedTeam || apiTeam);
}

function roundOf32MatchFromApi_(apiMatch) {
  const utcDate = apiMatch && apiMatch.utcDate ? new Date(apiMatch.utcDate) : null;
  const validDate = utcDate && !Number.isNaN(utcDate.getTime());
  const crDate = validDate ? Utilities.formatDate(utcDate, CR_TIME_ZONE, "yyyy-MM-dd") : "";
  const hour = validDate ? Number(Utilities.formatDate(utcDate, CR_TIME_ZONE, "H")) : 0;
  const minute = validDate ? Number(Utilities.formatDate(utcDate, CR_TIME_ZONE, "m")) : 0;
  return {
    apiId: apiMatch ? apiMatch.id || "" : "",
    stage: "LAST_32",
    crDate: crDate,
    crDateLabel: formatRoundOf32DateLabel_(crDate),
    crTime: formatRoundOf32TimeLabel_(hour, minute),
    crTimeMinutes: hour * 60 + minute,
    home: localTeamFromApi_(apiMatch ? apiMatch.homeTeam : null),
    away: localTeamFromApi_(apiMatch ? apiMatch.awayTeam : null),
    utcDate: apiMatch ? apiMatch.utcDate || "" : "",
  };
}

function localTeamFromApi_(apiTeam) {
  const variants = teamNameVariants_(apiTeam || {});
  const localTeams = [];
  const seen = {};
  MATCHES.forEach(function(match) {
    [match.home, match.away].forEach(function(team) {
      const key = normalizeTeamName_(team && team.name);
      if (!key || seen[key]) return;
      seen[key] = true;
      localTeams.push(team);
    });
  });
  for (let i = 0; i < localTeams.length; i += 1) {
    const aliases = teamAliases_(localTeams[i].name);
    if (hasAnyAlias_(aliases, variants)) {
      return { name: localTeams[i].name, flagCode: localTeams[i].flagCode || "" };
    }
  }
  const name = String((apiTeam && (apiTeam.name || apiTeam.shortName || apiTeam.tla)) || "").trim();
  return { name: name || "A definir", flagCode: "" };
}

function cloneRoundOf32FallbackMatches_() {
  return JSON.parse(JSON.stringify(ROUND_OF_32_FALLBACK_MATCHES));
}

function compareRoundOf32Matches_(a, b) {
  return String(a.crDate || "").localeCompare(String(b.crDate || "")) ||
    Number(a.crTimeMinutes || 0) - Number(b.crTimeMinutes || 0) ||
    Number(a.number || 0) - Number(b.number || 0);
}

function formatRoundOf32DateLabel_(value) {
  if (!value) return "";
  const parts = String(value).split("-");
  const months = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];
  return Number(parts[2]) + " " + months[Number(parts[1]) - 1] + " " + parts[0];
}

function formatRoundOf32TimeLabel_(hour24, minute) {
  const period = hour24 >= 12 ? "p.m." : "a.m.";
  const hour12 = hour24 % 12 || 12;
  return hour12 + ":" + String(minute).padStart(2, "0") + " " + period;
}

function normalizeRoundOf32Date_(value) {
  if (!value) return "";
  if (Object.prototype.toString.call(value) === "[object Date]" && !Number.isNaN(value.getTime())) {
    return Utilities.formatDate(value, CR_TIME_ZONE, "yyyy-MM-dd");
  }
  const text = String(value || "").trim();
  const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (iso) return iso[1] + "-" + iso[2] + "-" + iso[3];
  const parsed = new Date(text);
  if (!Number.isNaN(parsed.getTime())) return Utilities.formatDate(parsed, CR_TIME_ZONE, "yyyy-MM-dd");
  return text;
}

function roundOf32TimeMinutes_(value, fallback) {
  if (Object.prototype.toString.call(value) === "[object Date]" && !Number.isNaN(value.getTime())) {
    return Number(Utilities.formatDate(value, CR_TIME_ZONE, "H")) * 60 + Number(Utilities.formatDate(value, CR_TIME_ZONE, "m"));
  }
  const text = String(value || "").toLowerCase();
  const parts = text.match(/(\d{1,2}):(\d{2})\s*([ap])\.?\s*m\.?/);
  if (!parts) return Number(fallback || 0);
  let hour = Number(parts[1]) % 12;
  if (parts[3] === "p") hour += 12;
  return hour * 60 + Number(parts[2]);
}

function setupRoundOf32MatchesSheet_(ss, matches) {
  const sheet = ss.getSheetByName(ROUND_OF_32_MATCHES_SHEET) || ss.insertSheet(ROUND_OF_32_MATCHES_SHEET);
  const rows = [["ID", "API ID", "Numero", "Fecha CR", "Hora CR", "Local", "Visita"]].concat((matches || []).map(function(match) {
    return [match.id, match.apiId || "", match.number, match.crDate, match.crTime, match.home.name, match.away.name];
  }));
  sheet.clearContents();
  if (rows.length > 1) sheet.getRange(2, 4, rows.length - 1, 2).setNumberFormat("@");
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sheet.setFrozenRows(1);
}

function readRoundOf32MatchesSheet_(ss) {
  const sheet = ss.getSheetByName(ROUND_OF_32_MATCHES_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return cloneRoundOf32FallbackMatches_();
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });
  return values.slice(1).reduce(function(matches, row) {
    const id = getCellByHeader_(row, headers, "ID");
    if (!id) return matches;
    const homeName = String(getCellByHeader_(row, headers, "Local") || "A definir");
    const awayName = String(getCellByHeader_(row, headers, "Visita") || "A definir");
    const rawCrDate = getCellByHeader_(row, headers, "Fecha CR");
    const rawCrTime = getCellByHeader_(row, headers, "Hora CR");
    const crDate = normalizeRoundOf32Date_(rawCrDate);
    const crTime = Object.prototype.toString.call(rawCrTime) === "[object Date]" && !Number.isNaN(rawCrTime.getTime())
      ? formatRoundOf32TimeLabel_(Number(Utilities.formatDate(rawCrTime, CR_TIME_ZONE, "H")), Number(Utilities.formatDate(rawCrTime, CR_TIME_ZONE, "m")))
      : String(rawCrTime || "");
    const fallback = ROUND_OF_32_FALLBACK_MATCHES.find(function(match) { return match.id === id; }) || {};
    matches.push({
      id: id,
      apiId: getCellByHeader_(row, headers, "API ID"),
      number: getCellByHeader_(row, headers, "Numero"),
      stage: "LAST_32",
      crDate: crDate,
      crDateLabel: formatRoundOf32DateLabel_(crDate),
      crTime: crTime,
      crTimeMinutes: roundOf32TimeMinutes_(rawCrTime, fallback.crTimeMinutes),
      home: { name: homeName, flagCode: flagCodeForTeamName_(homeName) },
      away: { name: awayName, flagCode: flagCodeForTeamName_(awayName) },
    });
    return matches;
  }, []).sort(compareRoundOf32Matches_);
}

function flagCodeForTeamName_(name) {
  const wanted = normalizeTeamName_(name);
  let flagCode = "";
  MATCHES.some(function(match) {
    return [match.home, match.away].some(function(team) {
      if (normalizeTeamName_(team && team.name) !== wanted) return false;
      flagCode = team.flagCode || "";
      return true;
    });
  });
  return flagCode;
}

function upsertRoundOf32Response_(ss, participantName, selections) {
  const sheet = ss.getSheetByName(ROUND_OF_32_RESPONSES_SHEET) || ss.insertSheet(ROUND_OF_32_RESPONSES_SHEET);
  const requiredHeaders = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat((selections || []).map(function(selection) { return selection.id; }));
  const headers = ensureHeaders_(sheet, requiredHeaders);
  const row = headers.map(function() { return ""; });
  setCell_(row, headers, "Actualizado", new Date());
  setCell_(row, headers, "Nombre", participantName);
  setCell_(row, headers, "Clave participante", normalizeParticipantName_(participantName));
  setCell_(row, headers, "Total partidos", selections.length);
  setCell_(row, headers, "Completados", selections.length);
  setCell_(row, headers, "Selecciones JSON", JSON.stringify(selections));
  selections.forEach(function(selection) { setCell_(row, headers, selection.id, selection.pickLabel); });

  let targetRow = sheet.getLastRow() + 1;
  if (sheet.getLastRow() > 1) {
    const nameIndex = headers.indexOf("Nombre");
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    for (let i = 0; i < values.length; i += 1) {
      if (normalizeParticipantName_(values[i][nameIndex]) === normalizeParticipantName_(participantName)) {
        targetRow = i + 2;
        break;
      }
    }
  }
  sheet.getRange(targetRow, 1, 1, headers.length).setValues([row]);
  sheet.setFrozenRows(1);
}

function setupRoundOf32ResponsesSheet_(ss) {
  const sheet = ss.getSheetByName(ROUND_OF_32_RESPONSES_SHEET) || ss.insertSheet(ROUND_OF_32_RESPONSES_SHEET);
  const headers = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(ROUND_OF_32_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  ensureHeaders_(sheet, headers);
  sheet.setFrozenRows(1);
}

function getOctavosFormData_() {
  const ss = getSpreadsheet_();
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    participants: readExistingParticipantNames_(ss),
    matches: cloneOctavosFallbackMatches_(),
    totalMatches: OCTAVOS_FALLBACK_MATCHES.length,
    closed: isOctavosFormClosed_(),
    closesAt: new Date(OCTAVOS_CLOSE_AT_UTC_MS).toISOString(),
    closeLabel: OCTAVOS_CLOSE_LABEL,
    source: "manual",
    message: "",
  };
}

function handleOctavosSubmission_(e) {
  const lock = LockService.getScriptLock();
  let response;

  try {
    lock.waitLock(30000);
    if (isOctavosFormClosed_()) {
      throw new Error("La quiniela de octavos cerro el " + OCTAVOS_CLOSE_LABEL + ".");
    }

    const payload = parsePayload_(e);
    const ss = getSpreadsheet_();
    const participant = validateRoundOf32Participant_(ss, payload && payload.name);
    const matches = cloneOctavosFallbackMatches_();
    const picks = payload && payload.picks ? payload.picks : {};
    const selections = matches.map(function(match) {
      const pick = picks[match.id];
      if (["home", "draw", "away"].indexOf(pick) === -1) {
        throw new Error("Hay selecciones incompletas.");
      }
      return {
        id: match.id,
        number: match.number,
        stage: "LAST_16",
        crDate: match.crDate,
        crDateLabel: match.crDateLabel,
        crTime: match.crTime,
        crTimeMinutes: match.crTimeMinutes,
        home: match.home.name,
        away: match.away.name,
        pick: pick,
        pickLabel: getPickLabel_(match, pick),
      };
    });

    setupOctavosMatchesSheet_(ss, matches);
    upsertOctavosResponse_(ss, participant.name, selections);
    clearDataCaches_();

    response = {
      ok: true,
      savedAt: new Date().toISOString(),
      updated: true,
      participant: participant.name,
    };
  } catch (error) {
    response = { ok: false, error: String(error && error.message ? error.message : error) };
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }

  return respond_(e, response);
}

function isOctavosFormClosed_() {
  return new Date().getTime() >= OCTAVOS_CLOSE_AT_UTC_MS;
}

function cloneOctavosFallbackMatches_() {
  return JSON.parse(JSON.stringify(OCTAVOS_FALLBACK_MATCHES));
}

function setupOctavosMatchesSheet_(ss, matches) {
  const sheet = ss.getSheetByName(OCTAVOS_MATCHES_SHEET) || ss.insertSheet(OCTAVOS_MATCHES_SHEET);
  const rows = [["ID", "API ID", "Numero", "Fecha CR", "Hora CR", "Local", "Visita"]].concat((matches || []).map(function(match) {
    return [match.id, match.apiId || "", match.number, match.crDate, match.crTime, match.home.name, match.away.name];
  }));
  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, 1).setNumberFormat("@");
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sheet.setFrozenRows(1);
}

function upsertOctavosResponse_(ss, participantName, selections) {
  const sheet = ss.getSheetByName(OCTAVOS_RESPONSES_SHEET) || ss.insertSheet(OCTAVOS_RESPONSES_SHEET);
  const requiredHeaders = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(OCTAVOS_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  const headers = ensureHeaders_(sheet, requiredHeaders);
  const row = headers.map(function() { return ""; });
  setCell_(row, headers, "Actualizado", new Date());
  setCell_(row, headers, "Nombre", participantName);
  setCell_(row, headers, "Clave participante", normalizeParticipantName_(participantName));
  setCell_(row, headers, "Total partidos", selections.length);
  setCell_(row, headers, "Completados", selections.length);
  setCell_(row, headers, "Selecciones JSON", JSON.stringify(selections));
  selections.forEach(function(selection) { setCell_(row, headers, selection.id, selection.pickLabel); });

  let targetRow = sheet.getLastRow() + 1;
  if (sheet.getLastRow() > 1) {
    const nameIndex = headers.indexOf("Nombre");
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    for (let i = 0; i < values.length; i += 1) {
      if (normalizeParticipantName_(values[i][nameIndex]) === normalizeParticipantName_(participantName)) {
        targetRow = i + 2;
        break;
      }
    }
  }
  sheet.getRange(targetRow, 1, 1, headers.length).setValues([row]);
  sheet.setFrozenRows(1);
}

function setupOctavosResponsesSheet_(ss) {
  const sheet = ss.getSheetByName(OCTAVOS_RESPONSES_SHEET) || ss.insertSheet(OCTAVOS_RESPONSES_SHEET);
  const headers = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(OCTAVOS_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  ensureHeaders_(sheet, headers);
  sheet.setFrozenRows(1);
}

function getQuarterfinalsFormData_() {
  const ss = getSpreadsheet_();
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    participants: readExistingParticipantNames_(ss),
    matches: cloneQuarterfinalsFallbackMatches_(),
    totalMatches: QUARTERFINALS_FALLBACK_MATCHES.length,
    closed: isQuarterfinalsFormClosed_(),
    closesAt: new Date(QUARTERFINALS_CLOSE_AT_UTC_MS).toISOString(),
    closeLabel: QUARTERFINALS_CLOSE_LABEL,
    source: "manual",
    message: "",
  };
}

function handleQuarterfinalsSubmission_(e) {
  const lock = LockService.getScriptLock();
  let response;
  try {
    lock.waitLock(30000);
    if (isQuarterfinalsFormClosed_()) {
      throw new Error("La quiniela de cuartos cerro el " + QUARTERFINALS_CLOSE_LABEL + ".");
    }
    const payload = parsePayload_(e);
    const ss = getSpreadsheet_();
    const participant = validateRoundOf32Participant_(ss, payload && payload.name);
    const matches = cloneQuarterfinalsFallbackMatches_();
    const picks = payload && payload.picks ? payload.picks : {};
    const selections = matches.map(function(match) {
      const pick = picks[match.id];
      if (["home", "draw", "away"].indexOf(pick) === -1) throw new Error("Hay selecciones incompletas.");
      return {
        id: match.id,
        number: match.number,
        stage: "QUARTER_FINALS",
        crDate: match.crDate,
        crDateLabel: match.crDateLabel,
        crTime: match.crTime,
        crTimeMinutes: match.crTimeMinutes,
        home: match.home.name,
        away: match.away.name,
        pick: pick,
        pickLabel: getPickLabel_(match, pick),
      };
    });
    setupQuarterfinalsMatchesSheet_(ss, matches);
    upsertQuarterfinalsResponse_(ss, participant.name, selections);
    clearDataCaches_();
    response = { ok: true, savedAt: new Date().toISOString(), updated: true, participant: participant.name };
  } catch (error) {
    response = { ok: false, error: String(error && error.message ? error.message : error) };
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
  return respond_(e, response);
}

function isQuarterfinalsFormClosed_() {
  return new Date().getTime() >= QUARTERFINALS_CLOSE_AT_UTC_MS;
}

function cloneQuarterfinalsFallbackMatches_() {
  return JSON.parse(JSON.stringify(QUARTERFINALS_FALLBACK_MATCHES));
}

function setupQuarterfinalsMatchesSheet_(ss, matches) {
  const sheet = ss.getSheetByName(QUARTERFINALS_MATCHES_SHEET) || ss.insertSheet(QUARTERFINALS_MATCHES_SHEET);
  const rows = [["ID", "API ID", "Numero", "Fecha CR", "Hora CR", "Local", "Visita"]].concat((matches || []).map(function(match) {
    return [match.id, match.apiId || "", match.number, match.crDate, match.crTime, match.home.name, match.away.name];
  }));
  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, 1).setNumberFormat("@");
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sheet.setFrozenRows(1);
}

function upsertQuarterfinalsResponse_(ss, participantName, selections) {
  const sheet = ss.getSheetByName(QUARTERFINALS_RESPONSES_SHEET) || ss.insertSheet(QUARTERFINALS_RESPONSES_SHEET);
  const requiredHeaders = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(QUARTERFINALS_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  const headers = ensureHeaders_(sheet, requiredHeaders);
  const row = headers.map(function() { return ""; });
  setCell_(row, headers, "Actualizado", new Date());
  setCell_(row, headers, "Nombre", participantName);
  setCell_(row, headers, "Clave participante", normalizeParticipantName_(participantName));
  setCell_(row, headers, "Total partidos", selections.length);
  setCell_(row, headers, "Completados", selections.length);
  setCell_(row, headers, "Selecciones JSON", JSON.stringify(selections));
  selections.forEach(function(selection) { setCell_(row, headers, selection.id, selection.pickLabel); });
  let targetRow = sheet.getLastRow() + 1;
  if (sheet.getLastRow() > 1) {
    const nameIndex = headers.indexOf("Nombre");
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    for (let i = 0; i < values.length; i += 1) {
      if (normalizeParticipantName_(values[i][nameIndex]) === normalizeParticipantName_(participantName)) {
        targetRow = i + 2;
        break;
      }
    }
  }
  sheet.getRange(targetRow, 1, 1, headers.length).setValues([row]);
  sheet.setFrozenRows(1);
}

function setupQuarterfinalsResponsesSheet_(ss) {
  const sheet = ss.getSheetByName(QUARTERFINALS_RESPONSES_SHEET) || ss.insertSheet(QUARTERFINALS_RESPONSES_SHEET);
  const headers = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(QUARTERFINALS_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  ensureHeaders_(sheet, headers);
  sheet.setFrozenRows(1);
}

function getFinalPhaseFormData_() {
  const ss = getSpreadsheet_();
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    participants: readExistingParticipantNames_(ss),
    matches: cloneFinalPhaseFallbackMatches_(),
    totalMatches: FINAL_PHASE_FALLBACK_MATCHES.length,
    closed: isFinalPhaseFormClosed_(),
    closesAt: new Date(FINAL_PHASE_CLOSE_AT_UTC_MS).toISOString(),
    closeLabel: FINAL_PHASE_CLOSE_LABEL,
    source: "manual",
    message: "",
  };
}

function handleFinalPhaseSubmission_(e) {
  const lock = LockService.getScriptLock();
  let response;
  try {
    lock.waitLock(30000);
    if (isFinalPhaseFormClosed_()) {
      throw new Error("La quiniela de fase final cerro el " + FINAL_PHASE_CLOSE_LABEL + ".");
    }
    const payload = parsePayload_(e);
    const ss = getSpreadsheet_();
    const participant = validateRoundOf32Participant_(ss, payload && payload.name);
    const matchesById = {};
    (payload && Array.isArray(payload.matches) ? payload.matches : []).forEach(function(match) {
      if (match && match.id) matchesById[match.id] = match;
    });
    const picks = payload && payload.picks ? payload.picks : {};
    const advances = payload && payload.advances ? payload.advances : {};
    const selections = cloneFinalPhaseFallbackMatches_().map(function(baseMatch) {
      const submittedMatch = matchesById[baseMatch.id] || {};
      const pick = picks[baseMatch.id] || submittedMatch.pick;
      if (["home", "draw", "away"].indexOf(pick) === -1) throw new Error("Hay selecciones incompletas.");
      if ((baseMatch.id === "FP-01" || baseMatch.id === "FP-02") && pick === "draw" && ["home", "away"].indexOf(advances[baseMatch.id] || submittedMatch.advancePick) === -1) {
        throw new Error("Cuando marcas empate en semifinales, debes indicar quien avanza para armar la final.");
      }
      const match = {
        id: baseMatch.id,
        number: baseMatch.number,
        stage: baseMatch.stage,
        phaseLabel: baseMatch.phaseLabel,
        crDate: baseMatch.crDate,
        crDateLabel: baseMatch.crDateLabel,
        crTime: baseMatch.crTime,
        crTimeMinutes: baseMatch.crTimeMinutes,
        home: submittedMatch.home && submittedMatch.home.name ? submittedMatch.home.name : submittedMatch.home || baseMatch.home.name,
        away: submittedMatch.away && submittedMatch.away.name ? submittedMatch.away.name : submittedMatch.away || baseMatch.away.name,
        homeFlagCode: submittedMatch.home && submittedMatch.home.flagCode ? submittedMatch.home.flagCode : submittedMatch.homeFlagCode || baseMatch.home.flagCode || "",
        awayFlagCode: submittedMatch.away && submittedMatch.away.flagCode ? submittedMatch.away.flagCode : submittedMatch.awayFlagCode || baseMatch.away.flagCode || "",
      };
      const pickLabel = submittedMatch.pickLabel || finalPhasePickLabel_(match, pick);
      return {
        id: match.id,
        number: match.number,
        stage: match.stage,
        phaseLabel: match.phaseLabel,
        crDate: match.crDate,
        crDateLabel: match.crDateLabel,
        crTime: match.crTime,
        crTimeMinutes: match.crTimeMinutes,
        home: match.home,
        away: match.away,
        homeFlagCode: match.homeFlagCode,
        awayFlagCode: match.awayFlagCode,
        pick: pick,
        pickLabel: pickLabel,
        selectedTeam: submittedMatch.selectedTeam || (pick === "home" ? match.home : pick === "away" ? match.away : ""),
        advancePick: advances[match.id] || submittedMatch.advancePick || "",
        advanceTeam: submittedMatch.advanceTeam || "",
      };
    });
    setupFinalPhaseMatchesSheet_(ss, cloneFinalPhaseFallbackMatches_());
    upsertFinalPhaseResponse_(ss, participant.name, selections);
    clearDataCaches_();
    response = { ok: true, savedAt: new Date().toISOString(), updated: true, participant: participant.name };
  } catch (error) {
    response = { ok: false, error: String(error && error.message ? error.message : error) };
  } finally {
    try { lock.releaseLock(); } catch (ignore) {}
  }
  return respond_(e, response);
}

function finalPhasePickLabel_(match, pick) {
  if (pick === "home") return match.home;
  if (pick === "away") return match.away;
  if (pick === "draw") return "Empate";
  return "";
}

function isFinalPhaseFormClosed_() {
  return new Date().getTime() >= FINAL_PHASE_CLOSE_AT_UTC_MS;
}

function cloneFinalPhaseFallbackMatches_() {
  return JSON.parse(JSON.stringify(FINAL_PHASE_FALLBACK_MATCHES));
}

function setupFinalPhaseMatchesSheet_(ss, matches) {
  const sheet = ss.getSheetByName(FINAL_PHASE_MATCHES_SHEET) || ss.insertSheet(FINAL_PHASE_MATCHES_SHEET);
  const rows = [["ID", "API ID", "Numero", "Fase", "Fecha CR", "Hora CR", "Local", "Visita"]].concat((matches || []).map(function(match) {
    return [match.id, match.apiId || "", match.number, match.phaseLabel || match.stage || "", match.crDate, match.crTime, match.home.name, match.away.name];
  }));
  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, 1).setNumberFormat("@");
  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sheet.setFrozenRows(1);
}

function upsertFinalPhaseResponse_(ss, participantName, selections) {
  const sheet = ss.getSheetByName(FINAL_PHASE_RESPONSES_SHEET) || ss.insertSheet(FINAL_PHASE_RESPONSES_SHEET);
  const requiredHeaders = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(FINAL_PHASE_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  const headers = ensureHeaders_(sheet, requiredHeaders);
  const row = headers.map(function() { return ""; });
  setCell_(row, headers, "Actualizado", new Date());
  setCell_(row, headers, "Nombre", participantName);
  setCell_(row, headers, "Clave participante", normalizeParticipantName_(participantName));
  setCell_(row, headers, "Total partidos", selections.length);
  setCell_(row, headers, "Completados", selections.length);
  setCell_(row, headers, "Selecciones JSON", JSON.stringify(selections));
  selections.forEach(function(selection) { setCell_(row, headers, selection.id, selection.pickLabel); });
  let targetRow = sheet.getLastRow() + 1;
  if (sheet.getLastRow() > 1) {
    const nameIndex = headers.indexOf("Nombre");
    const values = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length).getValues();
    for (let i = 0; i < values.length; i += 1) {
      if (normalizeParticipantName_(values[i][nameIndex]) === normalizeParticipantName_(participantName)) {
        targetRow = i + 2;
        break;
      }
    }
  }
  sheet.getRange(targetRow, 1, 1, headers.length).setValues([row]);
  sheet.setFrozenRows(1);
}

function setupFinalPhaseResponsesSheet_(ss) {
  const sheet = ss.getSheetByName(FINAL_PHASE_RESPONSES_SHEET) || ss.insertSheet(FINAL_PHASE_RESPONSES_SHEET);
  const headers = ["Actualizado", "Nombre", "Clave participante", "Total partidos", "Completados", "Selecciones JSON"]
    .concat(FINAL_PHASE_FALLBACK_MATCHES.map(function(match) { return match.id; }));
  ensureHeaders_(sheet, headers);
  sheet.setFrozenRows(1);
}

function fetchFootballData_() {
  const token = getFootballDataToken_();
  if (!token) {
    throw new Error("Falta configurar la propiedad de script FOOTBALL_DATA_API_KEY.");
  }

  const response = UrlFetchApp.fetch(FOOTBALL_DATA_API_URL, {
    method: "get",
    muteHttpExceptions: true,
    headers: {
      "X-Auth-Token": token,
    },
  });
  const httpStatus = response.getResponseCode();
  const apiState = extractApiState_(response, httpStatus);
  const body = response.getContentText();
  let data = {};

  try {
    data = JSON.parse(body || "{}");
  } catch (ignore) {}

  if (httpStatus < 200 || httpStatus >= 300) {
    const error = new Error(data.message || data.error || ("football-data.org respondio HTTP " + httpStatus));
    error.apiState = apiState;
    throw error;
  }

  return { matches: data.matches || [], apiState: apiState };
}

function buildResults_(apiMatches) {
  const usedApiIds = {};
  return MATCHES.map(function(localMatch) {
    const apiMatchInfo = findApiMatch_(localMatch, apiMatches || [], usedApiIds);
    return buildResult_(localMatch, apiMatchInfo ? apiMatchInfo.match : null, apiMatchInfo ? apiMatchInfo.reversed : false);
  });
}

function buildRoundOf32Results_(roundMatches, apiMatches) {
  const apiById = {};
  (apiMatches || []).forEach(function(match) {
    if (match && match.id !== undefined && match.id !== null) apiById[String(match.id)] = match;
  });
  return (roundMatches || []).map(function(match) {
    const apiMatch = match.apiId ? apiById[String(match.apiId)] : null;
    return buildResult_(match, apiMatch, false);
  });
}

function buildOctavosResults_(octavosMatches, apiMatches) {
  const usedApiIds = {};
  return (octavosMatches || []).map(function(match) {
    const apiMatchInfo = findApiMatch_(match, apiMatches || [], usedApiIds);
    return buildResult_(match, apiMatchInfo ? apiMatchInfo.match : null, apiMatchInfo ? apiMatchInfo.reversed : false);
  });
}

function buildQuarterfinalsResults_(quarterfinalsMatches, apiMatches) {
  return buildOctavosResults_(quarterfinalsMatches, apiMatches);
}

function buildFinalPhaseResults_(finalPhaseMatches, apiMatches) {
  const usedApiIds = {};
  return (finalPhaseMatches || []).map(function(match) {
    const apiMatchInfo = findApiMatchForFinalPhase_(match, apiMatches || [], usedApiIds);
    return buildResult_(match, apiMatchInfo ? apiMatchInfo.match : null, apiMatchInfo ? apiMatchInfo.reversed : false);
  });
}

function mergeResults_(freshResults, previousResults) {
  const previousById = {};
  (previousResults || []).forEach(function(result) {
    if (result && result.matchId) previousById[result.matchId] = result;
  });

  return (freshResults || []).map(function(fresh) {
    return mergeResult_(fresh, previousById[fresh.matchId]);
  });
}

function mergeResult_(fresh, previous) {
  if (!previous || !previous.matchId) return fresh;
  if (!shouldKeepPreviousResult_(fresh, previous)) return fresh;

  return {
    matchId: fresh.matchId,
    apiId: previous.apiId || fresh.apiId || "",
    number: fresh.number,
    group: fresh.group,
    crDate: fresh.crDate,
    crDateLabel: fresh.crDateLabel,
    crTime: fresh.crTime,
    home: fresh.home,
    away: fresh.away,
    status: previous.status || fresh.status,
    duration: previous.duration || fresh.duration || "",
    minute: previous.minute !== "" && previous.minute !== undefined ? previous.minute : fresh.minute,
    injuryTime: previous.injuryTime !== "" && previous.injuryTime !== undefined ? previous.injuryTime : fresh.injuryTime,
    homeGoals: previous.homeGoals,
    awayGoals: previous.awayGoals,
    score: previous.score,
    regularHomeGoals: previous.regularHomeGoals,
    regularAwayGoals: previous.regularAwayGoals,
    regularScore: previous.regularScore,
    regularTimeComplete: previous.regularTimeComplete,
    winner: previous.winner,
    winnerLabel: previous.winnerLabel,
    winnerTeam: previous.winnerTeam || fresh.winnerTeam || "",
    matchWinner: previous.matchWinner || fresh.matchWinner || "",
    apiUpdatedAt: previous.apiUpdatedAt || fresh.apiUpdatedAt || "",
    utcDate: previous.utcDate || fresh.utcDate || "",
  };
}

function shouldKeepPreviousResult_(fresh, previous) {
  if (!hasMeaningfulResult_(previous)) return false;
  if (!fresh || !fresh.matchId) return true;

  const previousFinal = isFinalResult_(previous);
  const freshFinal = isFinalResult_(fresh);
  if (previousFinal && !freshFinal) return true;

  if (isQuinielaResultComplete_(previous) && !isQuinielaResultComplete_(fresh)) return true;

  if (!fresh.apiId && hasMeaningfulResult_(previous)) return true;

  if (hasScoreOrWinner_(previous) && !hasScoreOrWinner_(fresh) && isWeakResultStatus_(fresh.status)) {
    return true;
  }

  return false;
}

function isFinalResult_(result) {
  return result && (result.status === "FINISHED" || result.status === "AWARDED") && hasScoreOrWinner_(result);
}

function isQuinielaResultComplete_(result) {
  if (!result || !result.winner) return false;
  const hasExplicitFlag = result.regularTimeComplete !== "" &&
    result.regularTimeComplete !== null &&
    result.regularTimeComplete !== undefined;
  if (hasExplicitFlag) return isTrueValue_(result.regularTimeComplete);
  return result.status === "FINISHED" || result.status === "AWARDED";
}

function isTrueValue_(value) {
  return value === true || String(value || "").toLowerCase() === "true";
}

function hasMeaningfulResult_(result) {
  return Boolean(result && (
    result.apiId ||
    hasScoreOrWinner_(result) ||
    (result.status && result.status !== "SCHEDULED" && result.status !== "TIMED")
  ));
}

function hasScoreOrWinner_(result) {
  return Boolean(result && (
    result.score ||
    result.regularScore ||
    result.winner ||
    isGoalValue_(result.homeGoals) ||
    isGoalValue_(result.awayGoals) ||
    isGoalValue_(result.regularHomeGoals) ||
    isGoalValue_(result.regularAwayGoals)
  ));
}

function isGoalValue_(value) {
  return value === 0 || value === "0" || Boolean(value);
}

function isWeakResultStatus_(status) {
  return !status || ["SCHEDULED", "TIMED", "POSTPONED", "SUSPENDED"].indexOf(String(status)) !== -1;
}

function countPreservedResults_(freshResults, mergedResults) {
  const freshById = {};
  (freshResults || []).forEach(function(result) {
    if (result && result.matchId) freshById[result.matchId] = result;
  });
  return (mergedResults || []).reduce(function(count, result) {
    const fresh = freshById[result.matchId] || {};
    return count + (String(fresh.status || "") !== String(result.status || "") ||
      String(fresh.score || "") !== String(result.score || "") ||
      String(fresh.regularScore || "") !== String(result.regularScore || "") ||
      String(fresh.regularTimeComplete || "") !== String(result.regularTimeComplete || "") ||
      String(fresh.winner || "") !== String(result.winner || "") ? 1 : 0);
  }, 0);
}

function findApiMatch_(localMatch, apiMatches, usedApiIds) {
  const homeAliases = teamAliases_(localMatch.home.name);
  const awayAliases = teamAliases_(localMatch.away.name);

  for (let i = 0; i < apiMatches.length; i += 1) {
    const apiMatch = apiMatches[i];
    const apiId = String(apiMatch.id || i);
    if (usedApiIds[apiId]) continue;

    const apiHome = teamNameVariants_(apiMatch.homeTeam);
    const apiAway = teamNameVariants_(apiMatch.awayTeam);
    const direct = hasAnyAlias_(homeAliases, apiHome) && hasAnyAlias_(awayAliases, apiAway);
    const reversed = hasAnyAlias_(homeAliases, apiAway) && hasAnyAlias_(awayAliases, apiHome);
    if (direct || reversed) {
      usedApiIds[apiId] = true;
      return { match: apiMatch, reversed: reversed };
    }
  }

  return null;
}

function findApiMatchForFinalPhase_(localMatch, apiMatches, usedApiIds) {
  const hasPlaceholder = isPlaceholderTeam_(localMatch.home && localMatch.home.name) || isPlaceholderTeam_(localMatch.away && localMatch.away.name);
  if (!hasPlaceholder) {
    const named = findApiMatch_(localMatch, apiMatches, usedApiIds);
    if (named) return named;
  }

  for (let i = 0; i < apiMatches.length; i += 1) {
    const apiMatch = apiMatches[i];
    const apiId = String(apiMatch.id || i);
    if (usedApiIds[apiId]) continue;
    if (String(apiMatch.stage || "").toUpperCase() !== String(localMatch.stage || "").toUpperCase()) continue;
    const crInfo = apiMatchCostaRicaInfo_(apiMatch);
    if (crInfo.date === localMatch.crDate && Math.abs(crInfo.minutes - Number(localMatch.crTimeMinutes || 0)) <= 5) {
      usedApiIds[apiId] = true;
      return { match: apiMatch, reversed: false };
    }
  }

  for (let j = 0; j < apiMatches.length; j += 1) {
    const apiMatch = apiMatches[j];
    const apiId = String(apiMatch.id || j);
    if (usedApiIds[apiId]) continue;
    const crInfo = apiMatchCostaRicaInfo_(apiMatch);
    if (crInfo.date === localMatch.crDate && Math.abs(crInfo.minutes - Number(localMatch.crTimeMinutes || 0)) <= 5) {
      usedApiIds[apiId] = true;
      return { match: apiMatch, reversed: false };
    }
  }
  return null;
}

function isPlaceholderTeam_(name) {
  const value = normalizeTeamName_(name);
  return !value || value === "a definir" || value.indexOf("ganador") !== -1 || value.indexOf("perdedor") !== -1;
}

function apiMatchCostaRicaInfo_(apiMatch) {
  const date = apiMatch && apiMatch.utcDate ? new Date(apiMatch.utcDate) : null;
  if (!date || Number.isNaN(date.getTime())) return { date: "", minutes: -1 };
  return {
    date: Utilities.formatDate(date, CR_TIME_ZONE, "yyyy-MM-dd"),
    minutes: Number(Utilities.formatDate(date, CR_TIME_ZONE, "H")) * 60 + Number(Utilities.formatDate(date, CR_TIME_ZONE, "m")),
  };
}

function buildResult_(localMatch, apiMatch, reversed) {
  const score = apiMatch && apiMatch.score ? apiMatch.score : {};
  const status = apiMatch ? apiMatch.status || "SCHEDULED" : "SCHEDULED";
  const duration = score.duration || "REGULAR";
  const fullTime = scorePair_(score.fullTime || score.regularTime || {});
  const regularTime = regularTimeScore_(score, status);
  const apiHomeGoals = fullTime.home;
  const apiAwayGoals = fullTime.away;
  const homeGoals = reversed ? apiAwayGoals : apiHomeGoals;
  const awayGoals = reversed ? apiHomeGoals : apiAwayGoals;
  const regularHomeGoals = reversed ? regularTime.away : regularTime.home;
  const regularAwayGoals = reversed ? regularTime.home : regularTime.away;
  const regularTimeComplete = isRegularTimeComplete_(apiMatch, score, regularTime);
  const winner = regularTimeComplete ? winnerFromGoals_(regularHomeGoals, regularAwayGoals) : "";
  const apiHomeName = apiTeamName_(apiMatch && apiMatch.homeTeam);
  const apiAwayName = apiTeamName_(apiMatch && apiMatch.awayTeam);
  const winnerTeam = winner === "draw" ? "" : winner === "home" ? (reversed ? apiAwayName : apiHomeName) : winner === "away" ? (reversed ? apiHomeName : apiAwayName) : "";
  const updatedAt = apiMatch && apiMatch.lastUpdated ? apiMatch.lastUpdated : "";

  return {
    matchId: localMatch.id,
    apiId: apiMatch ? apiMatch.id || "" : "",
    number: localMatch.number,
    group: localMatch.group,
    crDate: localMatch.crDate,
    crDateLabel: localMatch.crDateLabel,
    crTime: localMatch.crTime,
    home: localMatch.home.name,
    away: localMatch.away.name,
    status: status,
    duration: duration,
    minute: apiMatch ? numberOrBlank_(apiMatch.minute) : "",
    injuryTime: apiMatch ? numberOrBlank_(apiMatch.injuryTime) : "",
    homeGoals: homeGoals,
    awayGoals: awayGoals,
    score: homeGoals === "" || awayGoals === "" ? "" : homeGoals + " - " + awayGoals,
    regularHomeGoals: regularHomeGoals,
    regularAwayGoals: regularAwayGoals,
    regularScore: regularHomeGoals === "" || regularAwayGoals === "" ? "" : regularHomeGoals + " - " + regularAwayGoals,
    regularTimeComplete: regularTimeComplete,
    winner: winner,
    winnerLabel: getPickLabel_(localMatch, winner),
    winnerTeam: winnerTeam,
    matchWinner: mapWinner_(score.winner, reversed),
    apiUpdatedAt: updatedAt,
    utcDate: apiMatch ? apiMatch.utcDate || "" : "",
  };
}

function apiTeamName_(team) {
  if (!team) return "";
  return team.name || team.shortName || team.tla || "";
}

function scorePair_(node) {
  const score = node || {};
  return {
    home: numberOrBlank_(score.home !== undefined ? score.home : score.homeTeam),
    away: numberOrBlank_(score.away !== undefined ? score.away : score.awayTeam),
  };
}

function hasCompleteScorePair_(pair) {
  return pair && pair.home !== "" && pair.away !== "";
}

function regularTimeScore_(score, status) {
  const regularTime = scorePair_(score.regularTime || {});
  if (hasCompleteScorePair_(regularTime)) return regularTime;

  const fullTime = scorePair_(score.fullTime || {});
  const duration = String(score.duration || "REGULAR");
  const extended = duration === "EXTRA_TIME" || duration === "PENALTY_SHOOTOUT" ||
    status === "EXTRA_TIME" || status === "PENALTY_SHOOTOUT";
  if (!extended) return fullTime;

  const extraTime = scorePair_(score.extraTime || {});
  const penalties = scorePair_(score.penalties || {});
  if (!hasCompleteScorePair_(fullTime)) return regularTime;

  const extraHome = hasCompleteScorePair_(extraTime) ? extraTime.home : 0;
  const extraAway = hasCompleteScorePair_(extraTime) ? extraTime.away : 0;
  const penaltyHome = hasCompleteScorePair_(penalties) ? penalties.home : 0;
  const penaltyAway = hasCompleteScorePair_(penalties) ? penalties.away : 0;
  if (!hasCompleteScorePair_(extraTime) && !hasCompleteScorePair_(penalties)) return regularTime;

  return {
    home: Math.max(fullTime.home - extraHome - penaltyHome, 0),
    away: Math.max(fullTime.away - extraAway - penaltyAway, 0),
  };
}

function isRegularTimeComplete_(apiMatch, score, regularTime) {
  if (!apiMatch || !hasCompleteScorePair_(regularTime)) return false;
  const status = String(apiMatch.status || "");
  const duration = String(score.duration || "REGULAR");
  if (["FINISHED", "AWARDED", "EXTRA_TIME", "PENALTY_SHOOTOUT"].indexOf(status) !== -1) return true;
  if (["EXTRA_TIME", "PENALTY_SHOOTOUT"].indexOf(duration) !== -1) return true;

  const explicitRegularTime = scorePair_(score.regularTime || {});
  const minute = numberOrBlank_(apiMatch.minute);
  return status === "PAUSED" && minute !== "" && minute >= 90 && hasCompleteScorePair_(explicitRegularTime);
}

function winnerFromGoals_(homeGoals, awayGoals) {
  if (homeGoals === "" || awayGoals === "") return "";
  if (homeGoals > awayGoals) return "home";
  if (awayGoals > homeGoals) return "away";
  return "draw";
}

function writeResults_(ss, results) {
  return writeResultsToSheet_(ss, RESULTS_SHEET, results);
}

function writeRoundOf32Results_(ss, results) {
  return writeResultsToSheet_(ss, ROUND_OF_32_RESULTS_SHEET, results);
}

function writeResultsToSheet_(ss, sheetName, results) {
  const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  const headers = [
    "ID",
    "API ID",
    "Numero",
    "Grupo",
    "Fecha CR",
    "Hora CR",
    "Local",
    "Visita",
    "Estado",
    "Duracion",
    "Minuto",
    "Reposicion",
    "Marcador",
    "Goles Local",
    "Goles Visita",
    "Marcador 90 min",
    "Goles Local 90",
    "Goles Visita 90",
    "Tiempo reglamentario completo",
    "Ganador",
    "Ganador etiqueta",
    "Ganador equipo",
    "Ganador partido",
    "Actualizado API",
    "Fecha UTC API",
  ];
  const rows = [headers].concat(results.map(function(result) {
    return [
      result.matchId,
      result.apiId,
      result.number,
      result.group,
      result.crDate,
      result.crTime,
      result.home,
      result.away,
      result.status,
      result.duration,
      result.minute,
      result.injuryTime,
      result.score,
      result.homeGoals,
      result.awayGoals,
      result.regularScore,
      result.regularHomeGoals,
      result.regularAwayGoals,
      result.regularTimeComplete,
      result.winner,
      result.winnerLabel,
      result.winnerTeam || "",
      result.matchWinner,
      result.apiUpdatedAt,
      result.utcDate,
    ];
  }));

  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, 1).setNumberFormat("@");
  sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function rebuildRanking_(ss, results) {
  const responsesSheet = ss.getSheetByName(RESPONSES_SHEET);
  const finishedResults = {};
  (results || []).forEach(function(result) {
    if (isQuinielaResultComplete_(result)) {
      finishedResults[result.matchId] = result.winner;
    }
  });
  const computedMatches = Object.keys(finishedResults).length;
  const ranking = [];

  if (responsesSheet && responsesSheet.getLastRow() > 1) {
    const values = responsesSheet.getDataRange().getValues();
    const headers = values[0].map(function(header) { return String(header || ""); });
    const nameIndex = headers.indexOf("Nombre");
    const emailIndex = headers.indexOf("Correo");
    const submittedIndex = headers.indexOf("Fecha envio") !== -1 ? headers.indexOf("Fecha envio") : headers.indexOf("Fecha envío");
    const jsonIndex = headers.indexOf("Selecciones JSON");

    values.slice(1).forEach(function(row) {
      const selections = parseSelectionsJson_(row[jsonIndex]);
      let hits = 0;
      selections.forEach(function(selection) {
        if (finishedResults[selection.id] && finishedResults[selection.id] === selection.pick) hits += 1;
      });
      ranking.push({
        name: String(row[nameIndex] || ""),
        email: String(row[emailIndex] || ""),
        submittedAt: submittedIndex >= 0 ? row[submittedIndex] : "",
        points: hits * POINTS_PER_HIT,
        hits: hits,
        computedMatches: computedMatches,
        totalPredictions: selections.length,
      });
    });
  }

  ranking.sort(function(a, b) {
    return b.points - a.points ||
      b.hits - a.hits ||
      String(a.name || "").localeCompare(String(b.name || ""), "es") ||
      String(a.submittedAt || "").localeCompare(String(b.submittedAt || ""));
  });
  ranking.forEach(function(row, index) {
    row.position = index + 1;
  });

  writeRanking_(ss, ranking);
  return ranking;
}

function rebuildRoundOf32Rankings_(ss, results) {
  const existingNames = readExistingParticipantNames_(ss);
  const submittedParticipants = readRoundOf32Participants_(ss);
  const submittedByName = {};
  submittedParticipants.forEach(function(participant) {
    submittedByName[normalizeParticipantName_(participant.name)] = participant;
  });

  const finishedResults = {};
  (results || []).forEach(function(result) {
    if (isQuinielaResultComplete_(result)) finishedResults[result.matchId] = result.winner;
  });
  const computedMatches = Object.keys(finishedResults).length;

  const phase = existingNames.map(function(name) {
    const participant = submittedByName[normalizeParticipantName_(name)] || { selections: [] };
    let hits = 0;
    (participant.selections || []).forEach(function(selection) {
      if (finishedResults[selection.id] && finishedResults[selection.id] === selection.pick) hits += 1;
    });
    return {
      name: name,
      points: hits * POINTS_PER_HIT,
      hits: hits,
      computedMatches: computedMatches,
      totalPredictions: (participant.selections || []).length,
    };
  });
  sortRankingRows_(phase);
  applyRankingMovement_(ss, ROUND_OF_32_RANKING_SHEET, phase, computedMatches);
  writeExtendedRanking_(ss, ROUND_OF_32_RANKING_SHEET, phase);

  const groupRanking = readRanking_(ss);
  const groupByName = {};
  groupRanking.forEach(function(row) {
    const key = normalizeParticipantName_(row.name);
    if (!key || groupByName[key]) return;
    groupByName[key] = row;
  });
  const phaseByName = {};
  phase.forEach(function(row) { phaseByName[normalizeParticipantName_(row.name)] = row; });
  const cumulative = existingNames.map(function(name) {
    const key = normalizeParticipantName_(name);
    const groupRow = groupByName[key] || {};
    const phaseRow = phaseByName[key] || {};
    return {
      name: name,
      points: Number(groupRow.points || 0) + Number(phaseRow.points || 0),
      hits: Number(groupRow.hits || 0) + Number(phaseRow.hits || 0),
      computedMatches: Number(groupRow.computedMatches || 0) + computedMatches,
      totalPredictions: Number(groupRow.totalPredictions || 0) + Number(phaseRow.totalPredictions || 0),
    };
  });
  sortRankingRows_(cumulative);
  const cumulativeComputed = cumulative.length ? Number(cumulative[0].computedMatches || 0) : computedMatches;
  applyRankingMovement_(ss, CUMULATIVE_RANKING_SHEET, cumulative, cumulativeComputed);
  writeExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET, cumulative);

  return { phase: phase, cumulative: cumulative };
}

function rebuildOctavosRankings_(ss, results, previousCumulative) {
  const existingNames = readExistingParticipantNames_(ss);
  const submittedParticipants = readOctavosParticipants_(ss);
  const submittedByName = {};
  submittedParticipants.forEach(function(participant) {
    submittedByName[normalizeParticipantName_(participant.name)] = participant;
  });

  const finishedResults = {};
  (results || []).forEach(function(result) {
    if (isQuinielaResultComplete_(result)) finishedResults[result.matchId] = result.winner;
  });
  const computedMatches = Object.keys(finishedResults).length;
  const phase = existingNames.map(function(name) {
    const participant = submittedByName[normalizeParticipantName_(name)] || { selections: [] };
    let hits = 0;
    (participant.selections || []).forEach(function(selection) {
      if (finishedResults[selection.id] && finishedResults[selection.id] === selection.pick) hits += 1;
    });
    return {
      name: name,
      points: hits * POINTS_PER_HIT,
      hits: hits,
      computedMatches: computedMatches,
      totalPredictions: (participant.selections || []).length,
    };
  });
  sortRankingRows_(phase);
  applyRankingMovement_(ss, OCTAVOS_RANKING_SHEET, phase, computedMatches);
  writeExtendedRanking_(ss, OCTAVOS_RANKING_SHEET, phase);

  const previousByName = {};
  (previousCumulative || []).forEach(function(row) {
    previousByName[normalizeParticipantName_(row.name)] = row;
  });
  const phaseByName = {};
  phase.forEach(function(row) { phaseByName[normalizeParticipantName_(row.name)] = row; });
  const cumulative = existingNames.map(function(name) {
    const key = normalizeParticipantName_(name);
    const previousRow = previousByName[key] || {};
    const phaseRow = phaseByName[key] || {};
    return {
      name: name,
      points: Number(previousRow.points || 0) + Number(phaseRow.points || 0),
      hits: Number(previousRow.hits || 0) + Number(phaseRow.hits || 0),
      computedMatches: Number(previousRow.computedMatches || 0) + computedMatches,
      totalPredictions: Number(previousRow.totalPredictions || 0) + Number(phaseRow.totalPredictions || 0),
    };
  });
  sortRankingRows_(cumulative);
  const cumulativeComputed = cumulative.length ? Number(cumulative[0].computedMatches || 0) : computedMatches;
  applyRankingMovement_(ss, CUMULATIVE_RANKING_SHEET, cumulative, cumulativeComputed);
  writeExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET, cumulative);

  return { phase: phase, cumulative: cumulative };
}

function rebuildQuarterfinalsRankings_(ss, results, previousCumulative) {
  const existingNames = readExistingParticipantNames_(ss);
  const submittedParticipants = readQuarterfinalsParticipants_(ss);
  const submittedByName = {};
  submittedParticipants.forEach(function(participant) {
    submittedByName[normalizeParticipantName_(participant.name)] = participant;
  });
  const finishedResults = {};
  (results || []).forEach(function(result) {
    if (isQuinielaResultComplete_(result)) finishedResults[result.matchId] = result.winner;
  });
  const computedMatches = Object.keys(finishedResults).length;
  const phase = existingNames.map(function(name) {
    const participant = submittedByName[normalizeParticipantName_(name)] || { selections: [] };
    let hits = 0;
    (participant.selections || []).forEach(function(selection) {
      if (finishedResults[selection.id] && finishedResults[selection.id] === selection.pick) hits += 1;
    });
    return {
      name: name,
      points: hits * POINTS_PER_HIT,
      hits: hits,
      computedMatches: computedMatches,
      totalPredictions: (participant.selections || []).length,
    };
  });
  sortRankingRows_(phase);
  applyRankingMovement_(ss, QUARTERFINALS_RANKING_SHEET, phase, computedMatches);
  writeExtendedRanking_(ss, QUARTERFINALS_RANKING_SHEET, phase);

  const previousByName = {};
  (previousCumulative || []).forEach(function(row) {
    previousByName[normalizeParticipantName_(row.name)] = row;
  });
  const phaseByName = {};
  phase.forEach(function(row) { phaseByName[normalizeParticipantName_(row.name)] = row; });
  const cumulative = existingNames.map(function(name) {
    const key = normalizeParticipantName_(name);
    const previousRow = previousByName[key] || {};
    const phaseRow = phaseByName[key] || {};
    return {
      name: name,
      points: Number(previousRow.points || 0) + Number(phaseRow.points || 0),
      hits: Number(previousRow.hits || 0) + Number(phaseRow.hits || 0),
      computedMatches: Number(previousRow.computedMatches || 0) + computedMatches,
      totalPredictions: Number(previousRow.totalPredictions || 0) + Number(phaseRow.totalPredictions || 0),
    };
  });
  sortRankingRows_(cumulative);
  const cumulativeComputed = cumulative.length ? Number(cumulative[0].computedMatches || 0) : computedMatches;
  applyRankingMovement_(ss, CUMULATIVE_RANKING_SHEET, cumulative, cumulativeComputed);
  writeExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET, cumulative);
  return { phase: phase, cumulative: cumulative };
}

function rebuildFinalPhaseRankings_(ss, results, previousCumulative) {
  const existingNames = readExistingParticipantNames_(ss);
  const submittedParticipants = readFinalPhaseParticipants_(ss);
  const submittedByName = {};
  submittedParticipants.forEach(function(participant) {
    submittedByName[normalizeParticipantName_(participant.name)] = participant;
  });
  const finishedResults = {};
  (results || []).forEach(function(result) {
    if (isQuinielaResultComplete_(result)) finishedResults[result.matchId] = result;
  });
  const computedMatches = Object.keys(finishedResults).length;
  const phase = existingNames.map(function(name) {
    const participant = submittedByName[normalizeParticipantName_(name)] || { selections: [] };
    let hits = 0;
    (participant.selections || []).forEach(function(selection) {
      const result = finishedResults[selection.id];
      if (finalPhaseSelectionHits_(selection, result)) hits += 1;
    });
    return {
      name: name,
      points: hits * POINTS_PER_HIT,
      hits: hits,
      computedMatches: computedMatches,
      totalPredictions: (participant.selections || []).length,
    };
  });
  sortRankingRows_(phase);
  applyRankingMovement_(ss, FINAL_PHASE_RANKING_SHEET, phase, computedMatches);
  writeExtendedRanking_(ss, FINAL_PHASE_RANKING_SHEET, phase);

  const previousByName = {};
  (previousCumulative || []).forEach(function(row) {
    previousByName[normalizeParticipantName_(row.name)] = row;
  });
  const phaseByName = {};
  phase.forEach(function(row) { phaseByName[normalizeParticipantName_(row.name)] = row; });
  const cumulative = existingNames.map(function(name) {
    const key = normalizeParticipantName_(name);
    const previousRow = previousByName[key] || {};
    const phaseRow = phaseByName[key] || {};
    return {
      name: name,
      points: Number(previousRow.points || 0) + Number(phaseRow.points || 0),
      hits: Number(previousRow.hits || 0) + Number(phaseRow.hits || 0),
      computedMatches: Number(previousRow.computedMatches || 0) + computedMatches,
      totalPredictions: Number(previousRow.totalPredictions || 0) + Number(phaseRow.totalPredictions || 0),
    };
  });
  sortRankingRows_(cumulative);
  const cumulativeComputed = cumulative.length ? Number(cumulative[0].computedMatches || 0) : computedMatches;
  applyRankingMovement_(ss, CUMULATIVE_RANKING_SHEET, cumulative, cumulativeComputed);
  writeExtendedRanking_(ss, CUMULATIVE_RANKING_SHEET, cumulative);
  return { phase: phase, cumulative: cumulative };
}

function finalPhaseSelectionHits_(selection, result) {
  if (!selection || !result || !isQuinielaResultComplete_(result)) return false;
  if (selection.pick === "draw" || result.winner === "draw") return selection.pick === result.winner;
  if (selection.selectedTeam && result.winnerTeam) {
    if (normalizeTeamName_(selection.selectedTeam) === normalizeTeamName_(result.winnerTeam)) return true;
  }
  if (selection.pickLabel && result.winnerTeam) {
    if (normalizeTeamName_(selection.pickLabel) === normalizeTeamName_(result.winnerTeam)) return true;
  }
  return selection.pick === result.winner;
}

function readRoundOf32Participants_(ss) {
  return readPhaseParticipants_(ss, ROUND_OF_32_RESPONSES_SHEET);
}

function readOctavosParticipants_(ss) {
  return readPhaseParticipants_(ss, OCTAVOS_RESPONSES_SHEET);
}

function readQuarterfinalsParticipants_(ss) {
  return readPhaseParticipants_(ss, QUARTERFINALS_RESPONSES_SHEET);
}

function readFinalPhaseParticipants_(ss) {
  return readPhaseParticipants_(ss, FINAL_PHASE_RESPONSES_SHEET);
}

function readPhaseParticipants_(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });
  const nameIndex = headers.indexOf("Nombre");
  const jsonIndex = headers.indexOf("Selecciones JSON");
  return values.slice(1).reduce(function(participants, row) {
    const name = nameIndex >= 0 ? String(row[nameIndex] || "").trim() : "";
    if (!name) return participants;
    const selections = (jsonIndex >= 0 ? parseSelectionsJson_(row[jsonIndex]) : []).map(function(selection) {
      if (!selection || !selection.id) return selection;
      const copy = Object.assign({}, selection);
      if (!copy.selectedTeam && copy.pickLabel && normalizeTeamName_(copy.pickLabel) !== "empate") {
        copy.selectedTeam = copy.pickLabel;
      }
      return copy;
    });
    const picksByMatchId = {};
    selections.forEach(function(selection) {
      if (!selection || !selection.id) return;
      picksByMatchId[selection.id] = {
        pick: selection.pick || "",
        pickLabel: selection.pickLabel || "",
        selectedTeam: selection.selectedTeam || "",
        advancePick: selection.advancePick || "",
        advanceTeam: selection.advanceTeam || "",
        home: selection.home || "",
        away: selection.away || "",
      };
    });
    participants.push({
      number: participants.length + 1,
      name: name,
      selections: selections,
      totalPredictions: selections.length,
      picksByMatchId: picksByMatchId,
    });
    return participants;
  }, []);
}

function sortRankingRows_(rows) {
  rows.sort(function(a, b) {
    return Number(b.points || 0) - Number(a.points || 0) ||
      Number(b.hits || 0) - Number(a.hits || 0) ||
      String(a.name || "").localeCompare(String(b.name || ""), "es");
  });
  rows.forEach(function(row, index) { row.position = index + 1; });
}

function applyRankingMovement_(ss, sheetName, rows, computedMatches) {
  const previous = readExtendedRanking_(ss, sheetName);
  const previousByName = {};
  previous.forEach(function(row) { previousByName[normalizeParticipantName_(row.name)] = row; });
  const previousComputed = previous.length ? Number(previous[0].computedMatches || 0) : -1;
  rows.forEach(function(row) {
    const old = previousByName[normalizeParticipantName_(row.name)];
    if (old && previousComputed === Number(computedMatches || 0)) {
      row.movement = Number(old.movement || 0);
    } else if (old) {
      row.movement = Number(old.position || row.position) - Number(row.position || 0);
    } else {
      row.movement = 0;
    }
  });
}

function writeExtendedRanking_(ss, sheetName, ranking) {
  const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  const headers = ["Posicion", "Nombre", "Puntos", "Aciertos", "Partidos computados", "Predicciones", "Movimiento", "Actualizado"];
  const updatedAt = new Date();
  const rows = [headers].concat((ranking || []).map(function(row) {
    return [row.position, row.name, row.points, row.hits, row.computedMatches, row.totalPredictions, row.movement || 0, updatedAt];
  }));
  sheet.clearContents();
  sheet.getRange(1, 1, Math.max(rows.length, 1), headers.length).setValues(rows);
  sheet.setFrozenRows(1);
}

function readExtendedRanking_(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });
  return values.slice(1).reduce(function(rows, row) {
    const result = {
      position: getCellByHeader_(row, headers, "Posicion"),
      name: getCellByHeader_(row, headers, "Nombre"),
      points: getCellByHeader_(row, headers, "Puntos"),
      hits: getCellByHeader_(row, headers, "Aciertos"),
      computedMatches: getCellByHeader_(row, headers, "Partidos computados"),
      totalPredictions: getCellByHeader_(row, headers, "Predicciones"),
      movement: getCellByHeader_(row, headers, "Movimiento"),
    };
    if (result.name) rows.push(result);
    return rows;
  }, []);
}

function writeRanking_(ss, ranking) {
  const sheet = ss.getSheetByName(RANKING_SHEET) || ss.insertSheet(RANKING_SHEET);
  const headers = ["Posicion", "Nombre", "Correo", "Puntos", "Aciertos", "Partidos computados", "Predicciones", "Actualizado"];
  const updatedAt = new Date();
  const rows = [headers].concat((ranking || []).map(function(row) {
    return [row.position, row.name, row.email, row.points, row.hits, row.computedMatches, row.totalPredictions, updatedAt];
  }));

  sheet.clearContents();
  sheet.getRange(1, 1, Math.max(rows.length, 1), headers.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function readResults_(ss) {
  return readResultsFromSheet_(ss, RESULTS_SHEET);
}

function readRoundOf32Results_(ss) {
  return readResultsFromSheet_(ss, ROUND_OF_32_RESULTS_SHEET);
}

function readResultsFromSheet_(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });

  return values.slice(1).reduce(function(results, row) {
    const result = {
      matchId: getCellByHeader_(row, headers, "ID"),
      apiId: getCellByHeader_(row, headers, "API ID"),
      number: getCellByHeader_(row, headers, "Numero"),
      group: getCellByHeader_(row, headers, "Grupo"),
      crDate: getCellByHeader_(row, headers, "Fecha CR"),
      crTime: getCellByHeader_(row, headers, "Hora CR"),
      home: getCellByHeader_(row, headers, "Local"),
      away: getCellByHeader_(row, headers, "Visita"),
      status: getCellByHeader_(row, headers, "Estado"),
      duration: getCellByHeader_(row, headers, "Duracion"),
      minute: getCellByHeader_(row, headers, "Minuto"),
      injuryTime: getCellByHeader_(row, headers, "Reposicion"),
      score: getCellByHeader_(row, headers, "Marcador"),
      homeGoals: getCellByHeader_(row, headers, "Goles Local"),
      awayGoals: getCellByHeader_(row, headers, "Goles Visita"),
      regularScore: getCellByHeader_(row, headers, "Marcador 90 min"),
      regularHomeGoals: getCellByHeader_(row, headers, "Goles Local 90"),
      regularAwayGoals: getCellByHeader_(row, headers, "Goles Visita 90"),
      regularTimeComplete: getCellByHeader_(row, headers, "Tiempo reglamentario completo"),
      winner: getCellByHeader_(row, headers, "Ganador"),
      winnerLabel: getCellByHeader_(row, headers, "Ganador etiqueta"),
      winnerTeam: getCellByHeader_(row, headers, "Ganador equipo"),
      matchWinner: getCellByHeader_(row, headers, "Ganador partido"),
      apiUpdatedAt: getCellByHeader_(row, headers, "Actualizado API"),
      utcDate: getCellByHeader_(row, headers, "Fecha UTC API"),
    };
    if (sheetName === OCTAVOS_RESULTS_SHEET && String(result.matchId || "").indexOf("OCT-") !== 0) {
      const fallbackMatch = OCTAVOS_FALLBACK_MATCHES.find(function(match) {
        return Number(match.number) === Number(result.number);
      });
      if (fallbackMatch) result.matchId = fallbackMatch.id;
    }
    if (result.matchId || result.apiId || result.home || result.away || result.status || result.winner) {
      results.push(result);
    }
    return results;
  }, []);
}

function readRanking_(ss) {
  const sheet = ss.getSheetByName(RANKING_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });

  return values.slice(1).reduce(function(ranking, row) {
    const result = {
      position: getCellByHeader_(row, headers, "Posicion"),
      name: getCellByHeader_(row, headers, "Nombre"),
      points: getCellByHeader_(row, headers, "Puntos"),
      hits: getCellByHeader_(row, headers, "Aciertos"),
      computedMatches: getCellByHeader_(row, headers, "Partidos computados"),
      totalPredictions: getCellByHeader_(row, headers, "Predicciones"),
    };
    if (result.name || result.points || result.hits || result.totalPredictions) {
      ranking.push(result);
    }
    return ranking;
  }, []);
}

function readParticipantProfiles_(ss) {
  const sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet || sheet.getLastRow() < 2 || sheet.getLastColumn() < 1) return [];
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(function(header) {
    return String(header || "");
  });
  const nameIndex = headerIndex_(headers, ["Nombre"]);
  const championIndex = headerIndex_(headers, ["Campeon", "Campeón", "CampeÃ³n"]);
  const championCodeIndex = headerIndex_(headers, ["Codigo campeon", "Código campeón", "CÃ³digo campeÃ³n"]);
  if (nameIndex < 0) return [];
  const rowCount = sheet.getLastRow() - 1;
  const names = sheet.getRange(2, nameIndex + 1, rowCount, 1).getValues();
  const champions = championIndex >= 0 ? sheet.getRange(2, championIndex + 1, rowCount, 1).getValues() : [];
  const codes = championCodeIndex >= 0 ? sheet.getRange(2, championCodeIndex + 1, rowCount, 1).getValues() : [];
  return names.reduce(function(profiles, row, index) {
    const name = String(row[0] || "").trim();
    if (!name) return profiles;
    profiles.push({
      name: name,
      champion: champions[index] ? String(champions[index][0] || "") : "",
      championFlagCode: codes[index] ? String(codes[index][0] || "") : "",
    });
    return profiles;
  }, []);
}

function readParticipants_(ss) {
  const sheet = ss.getSheetByName(RESPONSES_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });
  const nameIndex = headerIndex_(headers, ["Nombre"]);
  const emailIndex = headerIndex_(headers, ["Correo"]);
  const submittedIndex = headerIndex_(headers, ["Fecha envio", "Fecha envío", "Fecha envÃ­o"]);
  const championIndex = headerIndex_(headers, ["Campeon", "Campeón", "CampeÃ³n"]);
  const championCodeIndex = headerIndex_(headers, ["Codigo campeon", "Código campeón", "CÃ³digo campeÃ³n"]);
  const jsonIndex = headerIndex_(headers, ["Selecciones JSON"]);
  const participants = [];

  values.slice(1).forEach(function(row) {
    const name = nameIndex >= 0 ? String(row[nameIndex] || "").trim() : "";
    const email = emailIndex >= 0 ? String(row[emailIndex] || "").trim() : "";
    if (!name && !email) return;

    const selections = jsonIndex >= 0 ? parseSelectionsJson_(row[jsonIndex]) : [];
    const picksByMatchId = {};
    selections.forEach(function(selection) {
      if (!selection || !selection.id) return;
      picksByMatchId[selection.id] = {
        pick: selection.pick || "",
        pickLabel: selection.pickLabel || "",
      };
    });

    participants.push({
      number: participants.length + 1,
      name: name || ("Participante " + (participants.length + 1)),
      submittedAt: submittedIndex >= 0 ? row[submittedIndex] : "",
      champion: championIndex >= 0 ? String(row[championIndex] || "") : "",
      championFlagCode: championCodeIndex >= 0 ? String(row[championCodeIndex] || "") : "",
      totalPredictions: selections.length,
      picksByMatchId: picksByMatchId,
    });
  });

  return participants;
}

function readApiState_(ss) {
  const sheet = ss.getSheetByName(API_STATE_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return null;
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });
  const row = values[1];
  return {
    updatedAt: getCellByHeader_(row, headers, "Actualizado"),
    httpStatus: getCellByHeader_(row, headers, "HTTP"),
    requestsAvailable: getCellByHeader_(row, headers, "X-RequestsAvailable"),
    requestCounterReset: getCellByHeader_(row, headers, "X-RequestCounter-Reset"),
    apiVersion: getCellByHeader_(row, headers, "X-API-Version"),
    authenticatedClient: getCellByHeader_(row, headers, "X-Authenticated-Client"),
    message: getCellByHeader_(row, headers, "Mensaje"),
  };
}

function writeApiState_(ss, apiState) {
  const sheet = ss.getSheetByName(API_STATE_SHEET) || ss.insertSheet(API_STATE_SHEET);
  const headers = [
    "Actualizado",
    "HTTP",
    "X-RequestsAvailable",
    "X-RequestCounter-Reset",
    "X-API-Version",
    "X-Authenticated-Client",
    "Mensaje",
    "URL",
  ];
  const row = [
    apiState.updatedAt || new Date().toISOString(),
    apiState.httpStatus || "",
    apiState.requestsAvailable || "",
    apiState.requestCounterReset || "",
    apiState.apiVersion || "",
    apiState.authenticatedClient || "",
    apiState.message || "",
    FOOTBALL_DATA_API_URL,
  ];

  sheet.clearContents();
  sheet.getRange(1, 1, 2, headers.length).setValues([headers, row]);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function handleSubmission_(e, useJsonp) {
  const lock = LockService.getScriptLock();
  let response;

  try {
    lock.waitLock(30000);
    if (isFormClosed_()) {
      throw new Error("La quiniela cerró el " + FORM_CLOSE_LABEL + ".");
    }
    const payload = normalizePayload_(parsePayload_(e));
    validatePayload_(payload);

    const ss = getSpreadsheet_();
    setupMatchesSheet_(ss, payload.matches);
    appendResponse_(ss, payload);
    clearDataCaches_();

    response = { ok: true, savedAt: new Date().toISOString() };
  } catch (error) {
    response = { ok: false, error: String(error && error.message ? error.message : error) };
  } finally {
    try {
      lock.releaseLock();
    } catch (ignore) {}
  }

  return useJsonp ? javascript_(e.parameter.callback, response) : json_(response);
}

function isFormClosed_() {
  return new Date().getTime() >= FORM_CLOSE_AT_UTC_MS;
}

function parsePayload_(e) {
  if (e && e.parameter && e.parameter.payload) {
    return JSON.parse(e.parameter.payload);
  }

  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  throw new Error("No se recibió payload.");
}

function normalizePayload_(payload) {
  if (payload && Array.isArray(payload.matches)) return payload;
  if (!payload || !payload.picks) throw new Error("No se recibieron selecciones.");
  const champion = payload.champion && payload.champion.name ? payload.champion : null;

  const matches = MATCHES.map(function(match) {
    const pick = payload.picks[match.id];
    return {
      id: match.id,
      number: match.number,
      group: match.group,
      date: match.date,
      dateLabel: match.dateLabel,
      crDate: match.crDate,
      crDateLabel: match.crDateLabel,
      crTime: match.crTime,
      crTimeMinutes: match.crTimeMinutes,
      home: match.home.name,
      away: match.away.name,
      pick: pick,
      pickLabel: getPickLabel_(match, pick),
    };
  });

  return {
    submittedAt: payload.submittedAt || new Date().toISOString(),
    name: payload.name,
    email: payload.email,
    champion: champion,
    championName: champion ? champion.name : "",
    championFlagCode: champion ? champion.flagCode || "" : "",
    totalMatches: MATCHES.length,
    matches: matches,
    source: payload.source || "quiniela-mundial-2026-github-pages",
  };
}

function getPickLabel_(match, pick) {
  if (pick === "home") return match.home.name;
  if (pick === "away") return match.away.name;
  if (pick === "draw") return "Empate";
  return "";
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== "object") throw new Error("Payload inválido.");
  if (!payload.name || !payload.email) throw new Error("Nombre y correo son obligatorios.");
  if (!payload.championName) throw new Error("Debes escoger el país campeón.");
  if (!Array.isArray(payload.matches) || payload.matches.length === 0) {
    throw new Error("No se recibieron selecciones.");
  }

  const missing = payload.matches.filter(function(match) {
    return !match.id || !match.home || !match.away || ["home", "away", "draw"].indexOf(match.pick) === -1 || !match.pickLabel;
  });
  if (missing.length > 0) throw new Error("Hay selecciones incompletas.");
}

function setupMatchesSheet_(ss, matches) {
  const sheet = ss.getSheetByName(MATCHES_SHEET) || ss.insertSheet(MATCHES_SHEET);
  if (sheet.getLastRow() > 0) return;

  const rows = [["ID", "Número", "Grupo", "Fecha", "Local", "Visita"]];
  matches.forEach(function(match) {
    rows.push([match.id, match.number, match.group, match.date, match.home, match.away]);
  });

  sheet.getRange(1, 1, rows.length, rows[0].length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, rows[0].length);
}

function appendResponse_(ss, payload) {
  const sheet = ss.getSheetByName(RESPONSES_SHEET) || ss.insertSheet(RESPONSES_SHEET);
  const matchHeaders = payload.matches.map(function(match) {
    return match.id + " " + match.home + " vs " + match.away;
  });

  const requiredHeaders = [
    "Fecha envío",
    "Nombre",
    "Correo",
    "Campeón",
    "Código campeón",
    "Total partidos",
    "Completados",
    "Selecciones JSON"
  ].concat(matchHeaders);

  const headers = ensureHeaders_(sheet, requiredHeaders);
  const row = headers.map(function() { return ""; });

  setCell_(row, headers, "Fecha envío", new Date());
  setCell_(row, headers, "Nombre", payload.name);
  setCell_(row, headers, "Correo", payload.email);
  setCell_(row, headers, "Campeón", payload.championName);
  setCell_(row, headers, "Código campeón", payload.championFlagCode);
  setCell_(row, headers, "Total partidos", payload.totalMatches || payload.matches.length);
  setCell_(row, headers, "Completados", payload.matches.length);
  setCell_(row, headers, "Selecciones JSON", JSON.stringify(payload.matches));

  payload.matches.forEach(function(match) {
    const header = match.id + " " + match.home + " vs " + match.away;
    setCell_(row, headers, header, match.pickLabel);
  });

  sheet.appendRow(row);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, Math.min(headers.length, 12));
}

function ensureHeaders_(sheet, requiredHeaders) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, requiredHeaders.length).setValues([requiredHeaders]);
    return requiredHeaders.slice();
  }

  const lastColumn = Math.max(sheet.getLastColumn(), 1);
  const existingHeaders = sheet
    .getRange(1, 1, 1, lastColumn)
    .getValues()[0]
    .map(function(header) { return String(header || ""); });

  const missingHeaders = requiredHeaders.filter(function(header) {
    return existingHeaders.indexOf(header) === -1;
  });

  if (missingHeaders.length > 0) {
    sheet
      .getRange(1, existingHeaders.length + 1, 1, missingHeaders.length)
      .setValues([missingHeaders]);
  }

  return existingHeaders.concat(missingHeaders);
}

function setCell_(row, headers, header, value) {
  const index = headers.indexOf(header);
  if (index >= 0) row[index] = value;
}

function writeDiagnosticSheet_(ss, data) {
  const sheet = ss.getSheetByName(DIAGNOSTIC_SHEET) || ss.insertSheet(DIAGNOSTIC_SHEET);
  const rows = [
    ["Campo", "Valor"],
    ["Actualizado", new Date()],
    ["Spreadsheet ID configurado", data.configuredSpreadsheetId || SPREADSHEET_ID],
    ["Spreadsheet ID activo", data.activeSpreadsheetId || ss.getId()],
    ["Spreadsheet URL", data.spreadsheetUrl || ss.getUrl()],
    ["Token football-data configurado", data.tokenConfigured === undefined ? "" : data.tokenConfigured],
    ["Hojas existentes", (data.existingSheets || data.sheets || []).join(", ")],
    ["Mensaje", data.message || ""],
  ];

  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, 2).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, 2);
}

function respond_(e, value) {
  return e && e.parameter && e.parameter.callback ? javascript_(e.parameter.callback, value) : json_(value);
}

function getFootballDataToken_() {
  return PropertiesService.getScriptProperties().getProperty(FOOTBALL_DATA_TOKEN_PROPERTY);
}

function extractApiState_(response, httpStatus) {
  const headers = response.getAllHeaders ? response.getAllHeaders() : response.getHeaders();
  return {
    updatedAt: new Date().toISOString(),
    httpStatus: httpStatus,
    requestsAvailable: getHeader_(headers, "X-RequestsAvailable") || getHeader_(headers, "X-Requests-Available"),
    requestCounterReset: getHeader_(headers, "X-RequestCounter-Reset"),
    apiVersion: getHeader_(headers, "X-API-Version"),
    authenticatedClient: getHeader_(headers, "X-Authenticated-Client"),
    message: httpStatus >= 200 && httpStatus < 300 ? "OK" : "Error",
  };
}

function getHeader_(headers, name) {
  const wanted = String(name || "").toLowerCase();
  const keys = Object.keys(headers || {});
  for (let i = 0; i < keys.length; i += 1) {
    if (String(keys[i]).toLowerCase() === wanted) return headers[keys[i]];
  }
  return "";
}

function teamAliases_(localName) {
  const aliases = {
    "México": ["Mexico"],
    "Sudáfrica": ["South Africa"],
    "República de Corea": ["Korea Republic", "South Korea", "Republic of Korea"],
    "República Checa": ["Czechia", "Czech Republic"],
    "Canadá": ["Canada"],
    "Bosnia y Herzegovina": ["Bosnia and Herzegovina", "Bosnia-Herzegovina"],
    "Catar": ["Qatar"],
    "Suiza": ["Switzerland"],
    "Brasil": ["Brazil"],
    "Marruecos": ["Morocco"],
    "Haití": ["Haiti"],
    "Escocia": ["Scotland"],
    "Estados Unidos": ["United States", "USA", "United States of America"],
    "Paraguay": ["Paraguay"],
    "Australia": ["Australia"],
    "Turquía": ["Turkey", "Türkiye", "Turkiye"],
    "Alemania": ["Germany"],
    "Curazao": ["Curacao", "Curaçao"],
    "Costa de Marfil": ["Cote d'Ivoire", "Côte d'Ivoire", "Ivory Coast"],
    "Ecuador": ["Ecuador"],
    "Países Bajos": ["Netherlands", "Holland"],
    "Japón": ["Japan"],
    "Suecia": ["Sweden"],
    "Túnez": ["Tunisia"],
    "Bélgica": ["Belgium"],
    "Egipto": ["Egypt"],
    "Irán": ["Iran", "IR Iran"],
    "Nueva Zelanda": ["New Zealand"],
    "España": ["Spain"],
    "Cabo Verde": ["Cape Verde"],
    "Arabia Saudí": ["Saudi Arabia", "Saudi Arabia"],
    "Uruguay": ["Uruguay"],
    "Francia": ["France"],
    "Senegal": ["Senegal"],
    "Irak": ["Iraq"],
    "Noruega": ["Norway"],
    "Argentina": ["Argentina"],
    "Argelia": ["Algeria"],
    "Austria": ["Austria"],
    "Jordania": ["Jordan"],
    "Portugal": ["Portugal"],
    "República Dem. del Congo": ["DR Congo", "Congo DR", "Democratic Republic of Congo", "Congo"],
    "Uzbekistán": ["Uzbekistan"],
    "Colombia": ["Colombia"],
    "Inglaterra": ["England"],
    "Croacia": ["Croatia"],
    "Ghana": ["Ghana"],
    "Panamá": ["Panama"],
  };
  return [localName].concat(aliases[localName] || []).map(normalizeTeamName_);
}

function teamNameVariants_(team) {
  if (!team) return [];
  return [team.name, team.shortName, team.tla].filter(Boolean).map(normalizeTeamName_);
}

function hasAnyAlias_(aliases, variants) {
  return aliases.some(function(alias) {
    return variants.indexOf(alias) !== -1;
  });
}

function normalizeTeamName_(value) {
  const normalized = String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
  const aliases = {
    "spain": "espana",
    "france": "francia",
    "england": "inglaterra",
    "argentina": "argentina",
    "morocco": "marruecos",
    "belgium": "belgica",
    "norway": "noruega",
    "switzerland": "suiza",
    "canada": "canada",
    "mexico": "mexico",
    "brazil": "brasil",
    "japan": "japon",
    "paraguay": "paraguay",
    "portugal": "portugal",
    "croatia": "croacia",
    "colombia": "colombia",
    "ghana": "ghana",
    "algeria": "argelia",
    "egypt": "egipto",
    "united states": "estados unidos",
    "usa": "estados unidos",
    "united states of america": "estados unidos",
    "ivory coast": "costa de marfil",
    "cote d ivoire": "costa de marfil",
    "cote divoire": "costa de marfil",
    "netherlands": "paises bajos",
    "germany": "alemania"
  };
  return aliases[normalized] || normalized;
}

function numberOrBlank_(value) {
  return typeof value === "number" ? value : "";
}

function mapWinner_(winner, reversed) {
  if (winner === "DRAW") return "draw";
  if (winner === "HOME_TEAM") return reversed ? "away" : "home";
  if (winner === "AWAY_TEAM") return reversed ? "home" : "away";
  return "";
}

function parseSelectionsJson_(value) {
  try {
    const selections = JSON.parse(String(value || "[]"));
    return Array.isArray(selections) ? selections : [];
  } catch (ignore) {
    return [];
  }
}

function headerIndex_(headers, candidates) {
  for (let i = 0; i < candidates.length; i += 1) {
    const index = headers.indexOf(candidates[i]);
    if (index >= 0) return index;
  }
  return -1;
}

function getCellByHeader_(row, headers, header) {
  const index = headers.indexOf(header);
  return index >= 0 ? row[index] : "";
}

function maskEmail_(email) {
  const value = String(email || "");
  const parts = value.split("@");
  if (parts.length !== 2) return "";
  const local = parts[0];
  const visible = local.slice(0, Math.min(2, local.length));
  return visible + "***@" + parts[1];
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}

function javascript_(callback, value) {
  const safeCallback = /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback || "") ? callback : "callback";
  return ContentService
    .createTextOutput(safeCallback + "(" + JSON.stringify(value) + ");")
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
