export default function Meal({ params }) {
	return (
		<main>
			<h1 style={{ color: 'white', textAlign: 'center' }}>
				{params.slug.replace(/_/g, ' ')}
			</h1>
		</main>
	);
}
