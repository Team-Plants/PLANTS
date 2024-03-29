import { Colors } from '@/components/header/dashboardHeader/dashboardHeader';

const color: ThemeType[] = [
  'green#00FF00',
  'purple#800080',
  'orange#FFA500',
  'blue#0000FF',
  'pink#FFC0CB',
];

export function selectChipColor(index: number) {
  return color[index];
}

const colors: Colors[] = ['yellow', 'orange', 'green', 'blue', 'brown', 'pink'];

export function randomNickNameColor() {
  const num = Math.floor(Math.random() * 6);
  return colors[num];
}

export function dateFormat(dueDate: string) {
  const selectedDateTime = new Date(dueDate);
  const year = selectedDateTime.getFullYear();
  const month = String(selectedDateTime.getMonth() + 1).padStart(2, '0');
  const date = String(selectedDateTime.getDate()).padStart(2, '0');
  const hours = String(selectedDateTime.getHours()).padStart(2, '0');
  const minutes = String(selectedDateTime.getMinutes()).padStart(2, '0');

  const formattedDateTime = `${year}-${month}-${date} ${hours}:${minutes}`;

  return formattedDateTime;
}
