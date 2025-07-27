import axios from 'axios';
import FormData from 'form-data';
import fs from 'node:fs';
import { config } from './config.js';
import { products } from './data/products.js';
import { categories } from './data/categories.js';

const api = axios.create({
  baseURL: config.apiUrl,
  headers: {
    Authorization: `Bearer ${config.userToken}`,
  },
});

async function seed() {
  // Skip category creation since they already exist
  console.log('Skipping category creation - categories already exist');

  for (const product of products) {
    const productForm = new FormData();

    productForm.append('name', product.name);
    productForm.append('price', product.price);
    productForm.append('category_id', product.category_id);
    productForm.append('offer', String(product.offer));
    productForm.append('file', fs.createReadStream(product.file));

    try {
      const { data: createdProduct } = await api.post('/products', productForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });

      console.log(`Created product: ${createdProduct.name}`);
    } catch (err) {
      console.log(`Error creating product: ${product.name}`);
      console.log(err.response?.data || err.message);
      // Don't exit on error, continue with next product
    }
  }
}

seed();