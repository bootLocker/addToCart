import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 700,
  duration: '30s',
};

export default function () {
  const before = new Date().getTime();
  const T = 6;

  for (let i = 0; i < 11; i++) {
    http.get('http://localhost:3001/api/products/');
  }

  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  check(remainder, { 'reached request rate': remainder > 0 });
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(`Timer exhausted! The execution time of the test took longer than ${T} seconds`);
  }
}
