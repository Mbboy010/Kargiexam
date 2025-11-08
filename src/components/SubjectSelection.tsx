export default function SubjectSelection({ onSelect, completed = [] }) {
  const subjects = [
    { id: 'maths', name: 'Mathematics', color: '#28a745' },
    { id: 'english', name: 'English', color: '#007bff' },
    { id: 'biology', name: 'Biology', color: '#dc3545' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Select Subject</h2>
      <div style={styles.grid}>
        {subjects.map(sub => (
          <button
            key={sub.id}
            onClick={() => onSelect(sub.id)}
            style={{
              ...styles.card,
              backgroundColor: sub.color,
              opacity: completed.includes(sub.id) ? 0.7 : 1,
            }}
            disabled={false}
          >
            <h3>{sub.name}</h3>
            {completed.includes(sub.id) && <span style={styles.done}>✓ Completed</span>}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '2rem', textAlign: 'center' },
  title: { marginBottom: '2rem', color: '#333' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' },
  card: { padding: '2rem', borderRadius: '10px', color: 'white', fontWeight: 'bold', border: 'none', cursor: 'pointer', position: 'relative' },
  done: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.3)', padding: '5px 10px', borderRadius: '15px', fontSize: '12px' },
};