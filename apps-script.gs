const SPREADSHEET_ID = "1bJ6OEcfab_stv8aEq-qggJssYhQPciODAX0tOhD54kQ";
const RESPONSES_SHEET = "Respuestas";
const MATCHES_SHEET = "Partidos";
const RESULTS_SHEET = "Resultados";
const RANKING_SHEET = "Ranking";
const API_STATE_SHEET = "Estado API";
const DIAGNOSTIC_SHEET = "Diagnostico";
const FOOTBALL_DATA_API_URL = "https://api.football-data.org/v4/competitions/WC/matches?season=2026";
const FOOTBALL_DATA_TOKEN_PROPERTY = "FOOTBALL_DATA_API_KEY";
const SYNC_SECRET_PROPERTY = "SYNC_SECRET";
const POINTS_PER_HIT = 1;
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "12:00 p.m.",
    "crTimeMinutes": 720
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "8:30 p.m.",
    "crTimeMinutes": 1230
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crDate": "2026-06-14",
    "crDateLabel": "14 jun 2026",
    "crTime": "12:00 a.m.",
    "crTimeMinutes": 0
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "11:00 p.m.",
    "crTimeMinutes": 1380
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
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
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
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
    "crDate": "2026-06-21",
    "crDateLabel": "21 jun 2026",
    "crTime": "12:00 a.m.",
    "crTimeMinutes": 0
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
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
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
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crTime": "11:00 p.m.",
    "crTimeMinutes": 1380
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
    "crTime": "11:00 p.m.",
    "crTimeMinutes": 1380
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
    "crTime": "12:00 p.m.",
    "crTimeMinutes": 720
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "12:00 p.m.",
    "crTimeMinutes": 720
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
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
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "6:00 p.m.",
    "crTimeMinutes": 1080
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
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
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
    "crTime": "8:00 p.m.",
    "crTimeMinutes": 1200
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "3:00 p.m.",
    "crTimeMinutes": 900
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
    "crTime": "9:00 p.m.",
    "crTimeMinutes": 1260
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
    "crDate": "2026-06-17",
    "crDateLabel": "17 jun 2026",
    "crTime": "12:00 a.m.",
    "crTimeMinutes": 0
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
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
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
    "crTime": "11:00 p.m.",
    "crTimeMinutes": 1380
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "1:00 p.m.",
    "crTimeMinutes": 780
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
    "crTime": "10:00 p.m.",
    "crTimeMinutes": 1320
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
    "crTime": "7:30 p.m.",
    "crTimeMinutes": 1170
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
    "crTime": "7:30 p.m.",
    "crTimeMinutes": 1170
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
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
    "crTime": "4:00 p.m.",
    "crTimeMinutes": 960
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
    "crTime": "7:00 p.m.",
    "crTimeMinutes": 1140
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
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
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
    "crTime": "5:00 p.m.",
    "crTimeMinutes": 1020
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
    sheets: [MATCHES_SHEET, RESULTS_SHEET, RANKING_SHEET, API_STATE_SHEET],
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
    const results = buildResults_(apiResponse.matches);
    writeResults_(ss, results);
    const ranking = rebuildRanking_(ss, results);
    writeApiState_(ss, apiResponse.apiState);

    return {
      ok: true,
      syncedAt: apiResponse.apiState.updatedAt,
      results: results.length,
      ranking: ranking.length,
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
  const ss = getSpreadsheet_();
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    results: readResults_(ss),
    ranking: readRanking_(ss),
    apiState: readApiState_(ss),
  };
}

function getPredictionsData_() {
  const ss = getSpreadsheet_();
  const participants = readParticipants_(ss);
  const maxVisibleParticipants = 16;
  return {
    ok: true,
    generatedAt: new Date().toISOString(),
    matches: MATCHES,
    results: readResults_(ss),
    participants: participants.slice(0, maxVisibleParticipants),
    totalParticipants: participants.length,
    hiddenParticipants: Math.max(participants.length - maxVisibleParticipants, 0),
    maxVisibleParticipants: maxVisibleParticipants,
  };
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

function buildResult_(localMatch, apiMatch, reversed) {
  const score = apiMatch && apiMatch.score ? apiMatch.score : {};
  const fullTime = score.fullTime || score.regularTime || {};
  const apiHomeGoals = numberOrBlank_(fullTime.home);
  const apiAwayGoals = numberOrBlank_(fullTime.away);
  const homeGoals = reversed ? apiAwayGoals : apiHomeGoals;
  const awayGoals = reversed ? apiHomeGoals : apiAwayGoals;
  const winner = mapWinner_(score.winner, reversed);
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
    status: apiMatch ? apiMatch.status || "SCHEDULED" : "SCHEDULED",
    homeGoals: homeGoals,
    awayGoals: awayGoals,
    score: homeGoals === "" || awayGoals === "" ? "" : homeGoals + " - " + awayGoals,
    winner: winner,
    winnerLabel: getPickLabel_(localMatch, winner),
    apiUpdatedAt: updatedAt,
    utcDate: apiMatch ? apiMatch.utcDate || "" : "",
  };
}

function writeResults_(ss, results) {
  const sheet = ss.getSheetByName(RESULTS_SHEET) || ss.insertSheet(RESULTS_SHEET);
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
    "Marcador",
    "Goles Local",
    "Goles Visita",
    "Ganador",
    "Ganador etiqueta",
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
      result.score,
      result.homeGoals,
      result.awayGoals,
      result.winner,
      result.winnerLabel,
      result.apiUpdatedAt,
      result.utcDate,
    ];
  }));

  sheet.clearContents();
  sheet.getRange(1, 1, rows.length, headers.length).setValues(rows);
  sheet.setFrozenRows(1);
  sheet.autoResizeColumns(1, headers.length);
}

function rebuildRanking_(ss, results) {
  const responsesSheet = ss.getSheetByName(RESPONSES_SHEET);
  const finishedResults = {};
  (results || []).forEach(function(result) {
    if ((result.status === "FINISHED" || result.status === "AWARDED") && result.winner) {
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
      String(a.submittedAt || "").localeCompare(String(b.submittedAt || ""));
  });
  ranking.forEach(function(row, index) {
    row.position = index + 1;
  });

  writeRanking_(ss, ranking);
  return ranking;
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
  const sheet = ss.getSheetByName(RESULTS_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });

  return values.slice(1).map(function(row) {
    return {
      matchId: getCellByHeader_(row, headers, "ID"),
      apiId: getCellByHeader_(row, headers, "API ID"),
      number: getCellByHeader_(row, headers, "Numero"),
      group: getCellByHeader_(row, headers, "Grupo"),
      crDate: getCellByHeader_(row, headers, "Fecha CR"),
      crTime: getCellByHeader_(row, headers, "Hora CR"),
      home: getCellByHeader_(row, headers, "Local"),
      away: getCellByHeader_(row, headers, "Visita"),
      status: getCellByHeader_(row, headers, "Estado"),
      score: getCellByHeader_(row, headers, "Marcador"),
      homeGoals: getCellByHeader_(row, headers, "Goles Local"),
      awayGoals: getCellByHeader_(row, headers, "Goles Visita"),
      winner: getCellByHeader_(row, headers, "Ganador"),
      winnerLabel: getCellByHeader_(row, headers, "Ganador etiqueta"),
      apiUpdatedAt: getCellByHeader_(row, headers, "Actualizado API"),
      utcDate: getCellByHeader_(row, headers, "Fecha UTC API"),
    };
  });
}

function readRanking_(ss) {
  const sheet = ss.getSheetByName(RANKING_SHEET);
  if (!sheet || sheet.getLastRow() < 2) return [];
  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function(header) { return String(header || ""); });

  return values.slice(1).map(function(row) {
    return {
      position: getCellByHeader_(row, headers, "Posicion"),
      name: getCellByHeader_(row, headers, "Nombre"),
      email: maskEmail_(getCellByHeader_(row, headers, "Correo")),
      points: getCellByHeader_(row, headers, "Puntos"),
      hits: getCellByHeader_(row, headers, "Aciertos"),
      computedMatches: getCellByHeader_(row, headers, "Partidos computados"),
      totalPredictions: getCellByHeader_(row, headers, "Predicciones"),
    };
  });
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
    const payload = normalizePayload_(parsePayload_(e));
    validatePayload_(payload);

    const ss = getSpreadsheet_();
    setupMatchesSheet_(ss, payload.matches);
    appendResponse_(ss, payload);

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
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
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
