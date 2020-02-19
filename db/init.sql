CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    imageUrl TEXT,
    name VARCHAR(50),
    price MONEY
);

INSERT INTO inventory
(imageUrl, name, price)
VALUES
($1, $2, $3)

SELECT * FROM inventory;