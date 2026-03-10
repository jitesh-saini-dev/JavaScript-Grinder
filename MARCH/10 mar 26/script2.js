const data = [
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["11:00", "08:00", "14:00", "16:30"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["12:00", "15:00", "09:15", "17:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["10:00", "16:00", "13:30", "19:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["13:00", "07:45", "10:15", "15:45"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["08:30", "11:30", "14:30", "18:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["09:00", "12:15", "15:15", "17:45"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["10:30", "13:00", "16:45", "20:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["07:00", "09:45", "12:30", "15:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["08:15", "10:45", "14:15", "16:00"],
        },
      },
    },
  },
  {
    schedule: {
      day: {
        timeSlots: {
          items: ["09:30", "12:45", "15:30", "18:15"],
        },
      },
    },
  },
];

const ans = data.map((d) => {
  return {
    schedule: {
      ...d.schedule.day,
      day: {
        ...d.schedule.day.timeSlots,
        timeSlots: {
          ...d.schedule.day.timeSlots.items,
          items: d.schedule.day.timeSlots.items.sort((a, b) =>
            a.localeCompare(b),
          ),
        },
      },
    },
  };
});

console.log(ans);
