<template>
  <v-card class="position-relative" elevation="5">
    <div class="calendar-wrapper">
      <v-calendar
        class="p-3"
        ref="calendar"
        v-model="value"
        :events="events"
        :view-mode="'month'"
        :weekdays="[0, 1, 2, 3, 4, 5, 6]"
        :first-day-of-week="1"
        :show-adjacent-months="true"
        @update:modelValue="onDateChange">
        <template #header="{ title }">
          <div class="v-calendar-header justify-between align-center flex-column flex-sm-row">
            <div class="v-calendar-header__title ml-0 mb-2 mb-sm-0">{{ formatTitle(title) }}</div>
            <div class="d-flex justify-end">
              <v-btn
                class="mr-2"
                flat
                prepend-icon="mdi-calendar-today"
                color="info"
                @click="goToToday">
                Hôm nay
              </v-btn>
              <v-btn
                class="mr-1"
                flat
                size="x-small"
                icon="mdi-chevron-left"
                color="info"
                rounded="md"
                @click="goToPrevious"></v-btn>
              <v-btn
                flat
                size="x-small"
                icon="mdi-chevron-right"
                color="info"
                rounded="md"
                @click="goToNext"></v-btn>
            </div>
          </div>
        </template>
      </v-calendar>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useDate } from 'vuetify';
import { VCalendar } from 'vuetify/labs/VCalendar';
import { Lunar } from 'lunar-typescript';

const adapter = useDate();

const value = ref<Date[]>([new Date()]);
const events = ref<any[]>([]);

const vietnameseDays = ['Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy', 'Chủ Nhật'];
const vietnameseMonths: Record<string, string> = {
  January: 'Tháng 1',
  February: 'Tháng 2',
  March: 'Tháng 3',
  April: 'Tháng 4',
  May: 'Tháng 5',
  June: 'Tháng 6',
  July: 'Tháng 7',
  August: 'Tháng 8',
  September: 'Tháng 9',
  October: 'Tháng 10',
  November: 'Tháng 11',
  December: 'Tháng 12'
};

const solarEvents = [
  { date: '01-01', title: 'Tết Dương lịch', color: 'blue' },
  { date: '14-02', title: 'Valentine', color: 'pink' },
  { date: '08-03', title: 'Quốc tế Phụ nữ', color: 'purple' },
  { date: '30-04', title: 'Giải phóng miền Nam', color: 'red' },
  { date: '01-05', title: 'Quốc tế Lao động', color: 'orange' },
  { date: '01-06', title: 'Quốc tế Thiếu nhi', color: 'green' },
  { date: '02-09', title: 'Quốc Khánh', color: 'red' },
  { date: '24-12', title: 'Lễ Giáng sinh', color: 'green' },
  { date: '25-12', title: 'Lễ Giáng sinh', color: 'green' }
];

const lunarEvents = [
  { lunarDate: '01-01', title: 'Tết Nguyên Đán', color: 'red' },
  { lunarDate: '02-01', title: 'Tết Nguyên Đán', color: 'red' },
  { lunarDate: '03-01', title: 'Tết Nguyên Đán', color: 'red' },
  { lunarDate: '04-01', title: 'Tết Nguyên Đán', color: 'red' },
  { lunarDate: '05-01', title: 'Tết Nguyên Đán', color: 'red' },
  { lunarDate: '10-03', title: 'Giỗ Tổ Hùng Vương', color: 'purple' },
  { lunarDate: '07-07', title: 'Lễ Thất tịch', color: 'pink' },
  { lunarDate: '15-08', title: 'Tết Trung Thu', color: 'yellow' },
  { lunarDate: '23-12', title: 'Tết Ông Công Ông Táo', color: 'brown' }
];

const goToToday = () => {
  value.value = [new Date()];
  onDateChange();
};

const goToPrevious = () => {
  const currentDate = value.value[0];
  const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
  value.value = [prevMonth];
  onDateChange();
};

const goToNext = () => {
  const currentDate = value.value[0];
  const nextMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
  value.value = [nextMonth];
  onDateChange();
};

const formatTitle = (title: string): string => {
  const [monthName, year] = title.split(' ');

  return `${vietnameseMonths[monthName] ?? monthName} - ${year}`;
};

const getBlackFriday = (year: number) => {
  const date = new Date(year, 10, 1);
  let count = 0;

  while (date.getMonth() === 10) {
    if (date.getDay() === 5) count++;
    if (count === 4) return date;
    date.setDate(date.getDate() + 1);
  }

  return null;
};

const updateDayHeaders = () => {
  const heads = document.getElementsByClassName('v-calendar-weekly__head-weeknumber');
  Array.from(heads).forEach((header) => {
    (header as HTMLElement).style.borderBottom = 'thin solid #e0e0e0';
  });
  const headers = document.querySelectorAll('.v-calendar-weekly__head-weekday-with-weeknumber');
  headers.forEach((header, index) => {
    const element = header as HTMLElement;
    element.textContent = vietnameseDays[index];
    element.style.fontWeight = 'bold';
    element.style.padding = '5px';
    element.style.borderBottom = 'thin solid #e0e0e0';
  });
};

const addSpecialEvents = (start: Date, end: Date) => {
  const specialEvents = [];
  const current = new Date(start);
  const year = start.getFullYear();

  while (current <= end) {
    const day = current.getDate();
    const month = current.getMonth() + 1;

    if (day === 15) {
      specialEvents.push({
        title: 'Sale giữa tháng',
        start: new Date(current),
        end: new Date(current),
        color: 'blue',
        allDay: true
      });
    }

    if (day === 25) {
      specialEvents.push({
        title: 'Sale lương về',
        start: new Date(current),
        end: new Date(current),
        color: 'orange',
        allDay: true
      });
    }

    if (day === month) {
      specialEvents.push({
        title: 'Hot sale',
        start: new Date(current),
        end: new Date(current),
        color: 'red',
        allDay: true
      });
    }

    current.setDate(current.getDate() + 1);
  }

  solarEvents.forEach((event) => {
    const [day, month] = event.date.split('-').map(Number);
    const eventDate = new Date(year, month - 1, day);
    if (eventDate >= start && eventDate <= end) {
      specialEvents.push({
        title: event.title,
        start: eventDate,
        end: eventDate,
        color: event.color,
        allDay: true
      });
    }
  });

  const blackFriday = getBlackFriday(year);
  if (blackFriday && blackFriday >= start && blackFriday <= end) {
    specialEvents.push({
      title: 'Black Friday',
      start: blackFriday,
      end: blackFriday,
      color: 'black',
      allDay: true
    });
  }

  lunarEvents.forEach((event) => {
    const [day, month] = event.lunarDate.split('-').map(Number);
    let solarDate = Lunar.fromYmd(year, month, day).getSolar();

    if (solarDate.getYear() > year) {
      solarDate = Lunar.fromYmd(year - 1, month, day).getSolar();
    }

    const eventDateObj = new Date(
      solarDate.getYear(),
      solarDate.getMonth() - 1,
      solarDate.getDay()
    );

    if (eventDateObj >= start && eventDateObj <= end) {
      specialEvents.push({
        title: event.title,
        start: eventDateObj,
        end: eventDateObj,
        color: event.color,
        allDay: true
      });
    }
  });

  events.value = specialEvents;
};

const onDateChange = () => {
  const calendar = value.value[0];
  const start = adapter.startOfMonth(calendar) as Date;
  const end = adapter.endOfMonth(calendar) as Date;
  addSpecialEvents(start, end);
};

onMounted(() => {
  updateDayHeaders();
  onDateChange();
});
</script>

<style scoped>
.calendar-wrapper {
  max-width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.v-calendar {
  min-width: 650px;
}

@media (max-width: 600px) {
  .calendar-wrapper {
    overflow-x: auto;
    display: block;
  }
}
</style>
