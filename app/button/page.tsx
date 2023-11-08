import Button from '~/components/Button'
export default function Home() {
  return (
    <main>
      <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <Button>Default</Button>
          <Button color="success">Success</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="primary">Primary</Button>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <Button size="small">Default</Button>
          <Button
            size="small"
            color="success"
          >
            Success
          </Button>
          <Button
            size="small"
            color="info"
          >
            Info
          </Button>
          <Button
            size="small"
            color="warning"
          >
            Warning
          </Button>
          <Button
            size="small"
            color="error"
          >
            Error
          </Button>
          <Button
            size="small"
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            size="small"
            color="primary"
          >
            Primary
          </Button>
        </div>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column', border: '1px solid #eee' }}>
          <Button size="large">Default</Button>
          <Button
            size="large"
            color="success"
          >
            Success
          </Button>
          <Button
            size="large"
            color="info"
          >
            Info
          </Button>
          <Button
            size="large"
            color="warning"
          >
            Warning
          </Button>
          <Button
            size="large"
            color="error"
          >
            Error
          </Button>
          <Button
            size="large"
            color="secondary"
          >
            Secondary
          </Button>
          <Button
            size="large"
            color="primary"
          >
            Primary
          </Button>
        </div>
      </div>
    </main>
  )
}
