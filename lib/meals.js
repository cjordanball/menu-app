import sql from 'better-sqlite3';

const db = sql('meals.db');

export const getMeals = async () => {
	// Following line for illustration purposes only
	await new Promise((res) => setTimeout(res, 5000));
	return db.prepare('SELECT * FROM meals').all();
};
