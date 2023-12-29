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
