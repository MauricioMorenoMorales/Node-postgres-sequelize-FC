CREATE TABLE IF NOT EXISTS projects(
	id int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name text NOT NULL CHECK (name <> ''),
	priority integer NOT NULL,
	description text,
	deliverydate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
	id int PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	name text NOT NULL CHECK (name <> ''),
	done BOOLEAN,
	projectId INTEGER REFERENCES projects(id)
);

INSERT INTO projects(name, priority, description, deliverydate) VALUES
  ('Make a Web App',1,'Using Javascript','2021-02-02');

INSERT INTO projects(name, priority, description, deliverydate) VALUES
  ('Make an backend app',1,'Using Typescript','2021-02-13');

INSERT INTO projects(name, priority, description, deliverydate) VALUES
  ('Make an Desktop app',2,'Using rust','2021-02-19');

-- Insert TASKS DATA

INSERT INTO tasks(name, done, projectId) VALUES
  ('Download Vuejs', false, 1 );

INSERT INTO tasks(name, done, projectId) VALUES
  ('Create UI WEB', false, 1 );

INSERT INTO tasks(name, done, projectId) VALUES
  ('Configure concurrently', false, 2 );

INSERT INTO tasks(name, done, projectId) VALUES
  ('Design UI', false, 2 );

INSERT INTO tasks(name, done, projectId) VALUES
  ('Learn rust', false, 3 );