import express from 'express'
import morgan from 'morgan'
import pkg from './package.json';

import { createRoles } from './src/libs/initialSetup'
import productsRoutes from  './src/routes/products.routes'
import authRoutes from './src/routes/auth.routes'

import './src/includes/database'

const app = express()

createRoles()

app.set('pkg', pkg)

app.use(express.json())
app.use(morgan('dev'));

app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

app.listen(3000);