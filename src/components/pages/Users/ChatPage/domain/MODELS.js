
export const SCALES_INTERVALS_PRESETS = [
     { key: "DAY_HOURS", intervals: 48, amplitude: 30, labels: ["Dia - 30 min", "1/2 hora"]},
     { key: "DAY_HOURS", intervals: 24, amplitude: 60, labels: ["Dia - 1 hr ", "Hora"]},
     { key: "WEEK_DAYS", intervals: 7, amplitude: 60 * 24, labels: ["Semana - dia", "dia"]},
     { key: "MONTH_DAYS", intervals: 28, amplitude: 60 * 24, labels: ["Mês - dia","dia"]},
     { key: "YEAR_MONTHS", intervals: 12, amplitude: 60 * 24 * 28, labels: ["Ano - mês","Mês"]},
]

export const MEASUREMENTS_DATA = [
     { key: "mTemperature", label: "Temperatura", unidade:"C°" },
     { key: "mWindSpeed", label: "Velocidade do Ventro", unidade: "( m/s )" },
     { key: "mRainVolume", label: "Voluma de Chuva", unidade: "( m³ )"  },
     { key: "mAccRainVolume", label: "Voluma de Chuva Acumulada", unidade: "( m³ )"  },
     { key: "mAirHumidity", label: "Umidade do ar", unidade: "( % )"  },
]
