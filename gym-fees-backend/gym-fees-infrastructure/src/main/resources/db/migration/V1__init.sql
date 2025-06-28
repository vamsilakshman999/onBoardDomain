CREATE TABLE packages (
  id BIGINT PRIMARY KEY,
  name VARCHAR(50),
  duration_months INT,
  base_fee DECIMAL(10,2)
);

INSERT INTO packages(id,name,duration_months,base_fee) VALUES
  (1,'1-month',1,100.00),
  (2,'2-month',2,180.00),
  (3,'3-month',3,250.00);
