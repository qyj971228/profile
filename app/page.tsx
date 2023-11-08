import Button from '~/components/Button'
export default function Home() {
  return (
    <main>
      <div style={{display: 'flex', gap: '10px', flexDirection: 'column'}}>
        <Button>Default</Button>
        <Button color="success">Success</Button>
        <Button color="info">Info</Button>
        <Button color="warning">Warning</Button>
        <Button color="error">Error</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </div>
    </main>
  )
}
