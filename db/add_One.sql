INSERT INTO inventory
(imageUrl, name, price)
VALUES
($1, $2, $3);

SELECT * FROM inventory;