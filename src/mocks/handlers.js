// handlers.js
import { http, HttpResponse } from 'msw';
import { generateProducts } from '../utils/generateProducts.js';

export const handlers = [
  http.get('/api/products', (req) => {
    const url = new URL(req.url, window.location.origin);
    const seed = parseInt(url.searchParams.get('seed')) || 42;
    const products = generateProducts(42);
    return HttpResponse.json(products, { status: 200 });
  })
];
 