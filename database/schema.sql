CREATE DATABASE notable;
\connect notable;
CREATE SCHEMA notable_schema;

CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);

CREATE TABLE appointments (
  id SERIAL PRIMARY KEY,
	patient_first_name VARCHAR(50) NOT NULL,
	patient_last_name VARCHAR(50) NOT NULL,
	date_time TIMESTAMPTZ NOT NULL,
	kind VARCHAR(11) NOT NULL,
	CONSTRAINT doctor_id
	  FOREIGN KEY(id)
		  REFERENCES doctors(id)
);

INSERT INTO doctors (first_name, last_name) VALUES ('Erin', 'Grisham');