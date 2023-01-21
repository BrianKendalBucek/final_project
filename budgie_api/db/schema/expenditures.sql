DROP TABLE IF EXISTS expenditures CASCADE;
CREATE TABLE expenditures (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  currency_id INTEGER REFERENCES currencies(id) ON DELETE CASCADE,
  paid_with TEXT,
  when TIMESTAMP,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  notes TEXT
);
