export function toMinutes(value: string): number {

  const [hour, minute] = value
    .split(":")
    .map(Number);

  return hour * 60 + minute;

}

export function currentMinutes(): number {

  const now = new Date();

  return now.getHours() * 60 + now.getMinutes();

}