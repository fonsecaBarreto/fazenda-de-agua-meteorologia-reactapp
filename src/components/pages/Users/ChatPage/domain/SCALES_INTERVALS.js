
export const SCALES_INTERVALS_PRESETS = [
     { key: "DAY_MINUTES", intervals: 1440, amplitude: 10, labels: ["Dia_minutos", "Minuto"]},
     { key: "DAY_HOURS", intervals: 24, amplitude: 60, labels: ["Dia", "Hora"]},
     { key: "WEEK_DAYS", intervals: 7, amplitude: 60 * 24, labels: ["Semana", "dia"]},
     { key: "MONTH_DAYS", intervals: 28, amplitude: 60 * 24, labels: ["Mês","dia"]},
     { key: "YEAR_MONTHS", intervals: 12, amplitude: 60 * 24 * 28, labels: ["Ano","Mês"]},
]

export const MEASUREMENTS_DATA = [
     { key: "mTemperature", label: "Temperatura", unidade:"C°" },
     { key: "mWindSpeed", label: "Velocidade do Ventro", unidade: "( m/s )" },
/*      { key: "mdWindDirection", label: "Direção do Ventro", unidade: "NSEW"  }, */
     { key: "mRainVolume", label: "Voluma de Chuva", unidade: "( m³ )"  },
     { key: "mAccRainVolume", label: "Voluma de Chuva Acumulada", unidade: "( m³ )"  },
     { key: "mAirHumidity", label: "Umidade do ar", unidade: "( % )"  },
]
