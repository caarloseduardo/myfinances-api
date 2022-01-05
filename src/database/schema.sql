CREATE DATABASE myfinances;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS transactions (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  description VARCHAR NOT NULL,
  amount FLOAT NOT NULL,
  date TIMESTAMP NOT NULL
);
