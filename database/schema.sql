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
	date VARCHAR(20) NOT NULL,
	time VARCHAR(20) NOT NULL,
	kind VARCHAR(11) NOT NULL,
	doctor_id SERIAL NOT NULL REFERENCES doctors
);

INSERT INTO doctors (first_name, last_name) VALUES ('Erin', 'Grisham');
INSERT INTO doctors (first_name, last_name) VALUES ('Ariana', 'Cramer');
INSERT INTO doctors (first_name, last_name) VALUES ('Maria', 'Castillo');

INSERT INTO appointments (patient_first_name, patient_last_name, date, time, kind, doctor_id) VALUES ('John', 'Doe', 'Sun Feb 06 2022', '14:30:00 GMT-0500', 'New Patient', (SELECT id FROM doctors WHERE id=2));

INSERT INTO appointments (patient_first_name, patient_last_name, date, time, kind, doctor_id) VALUES ('Jane', 'Doe', 'Sat Feb 07 2022', '15:30:00 GMT-0500', 'Follow-up', (SELECT id FROM doctors WHERE id=2));
