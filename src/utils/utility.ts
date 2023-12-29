import { FormEvent } from 'react';

const color: ThemeType[] = [
  'green#00FF00',
  'purple#800080',
  'orange#FFA500',
  'blue#0000FF',
  'pink#FFC0CB',
];

export function randomChipColor() {
  const num = Math.floor(Math.random() * 6);
  return color[num];
}

export function fileToString(e: FormEvent<HTMLInputElement>) {
  const target = e.currentTarget;
  const files = (target.files as FileList)[0];

  const reader = new FileReader();
  reader.readAsDataURL(files);

  return new Promise<string>((resolve) => {
    reader.onload = () => {
      const reuslt = String(reader.result);
      resolve(reuslt);
    };
  });
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
