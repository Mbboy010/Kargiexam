export default function Result({ user, scores }) {
  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Exam Completed!</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Reg No:</strong> {user.regNo}</p>
        <hr />
        <h3>Subject Scores</h3>
        {Object.entries(scores).map(([sub, score]) => (
          <p key={sub}>
            <strong>{sub.charAt(0).toUpperCase() + sub.slice(1)}:</strong> {score}/200
          </p>
        ))}
        <h3>Total Score: {total}/600</h3>
      </div>
    </div>
  );
}

const styles = {
  container: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' },
  card: { background: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', minWidth: '300px' },
};